import { TitleCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ResolveFn, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { TableLazyLoadEvent } from 'primeng/table';
import { BehaviorSubject, Subject, filter, map, startWith, switchMap, takeUntil } from 'rxjs';
import { appRootTitle } from 'src/app/app.component';
import {
  GenericFieldType,
  GenericTableConfig,
  TableEvent,
  TableEventType,
} from 'src/app/shared/components/generic-table/models/generic-table.models';
import { defaultGenericTableConfig } from 'src/app/shared/components/generic-table/utils/variables';
import { EntityList } from 'src/app/shared/models/entity-list.model';
import { ModalMode } from 'src/app/shared/models/modal-mode.model';
import { ToastService } from 'src/app/shared/services/toast.service';
import { Naming, NumberMode } from 'src/app/shared/state/common/common.names';
import { publicLanguageReducer } from 'src/app/shared/state/languages/public-language.reducer';
import { CertificateType } from '../models/certificate-type.model';
import { certificateTypeActions } from '../state/certificate-type.actions';
import { certificateTypeNames } from '../state/certificate-type.names';
import { certificateTypeReducer } from '../state/certificate-type.reducer';

export const certificateTypeListTitleResolver: ResolveFn<string> = () => {
  const store = inject(Store);
  const translateSrv = inject(TranslateService);

  return store.select(publicLanguageReducer.getOne).pipe(
    filter((i) => !!i),
    switchMap(() =>
      translateSrv
        .get(`tables.${certificateTypeNames.name(Naming.CAMEL_CASE, NumberMode.SINGULAR)}.plural`)
        .pipe(map((table) => `${appRootTitle} | ${table}`)),
    ),
  );
};

@Component({
  selector: 'app-certificate-type-list',
  templateUrl: './certificate-type-list.component.html',
  styleUrls: ['./certificate-type-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CertificateTypeListComponent implements OnInit, OnDestroy, EntityList<CertificateType> {
  private store = inject(Store);
  private confirmationSrv = inject(ConfirmationService);
  private router = inject(Router);
  private translateSrv = inject(TranslateService);
  private messageSrv = inject(MessageService);
  private toastSrv = inject(ToastService);
  private titleCasePipe = inject(TitleCasePipe);

  destroy$ = new Subject<void>();

  entities$ = this.store.select(certificateTypeReducer.getAll);
  entities = toSignal(this.entities$, {
    initialValue: [],
  });

  loading$ = this.store.select(certificateTypeReducer.getLoading);
  loading = toSignal(this.loading$, {
    initialValue: false,
  });

  count$ = this.store.select(certificateTypeReducer.getCount);
  count = toSignal(this.count$, {
    initialValue: 0,
  });

  tableConfig$ = new BehaviorSubject<GenericTableConfig<CertificateType> | undefined>(undefined);
  tableConfig = toSignal(this.tableConfig$);

  action$ = this.store.select(certificateTypeReducer.getAction);

  ngOnInit() {
    this.handleLoadCount();
    this.handleLoadTableConfig();
    this.handleMessages();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  handleLoadCount() {
    this.store.dispatch(certificateTypeActions.count());
  }

  handleLoadTableConfig() {
    this.translateSrv.onLangChange
      .pipe(takeUntil(this.destroy$), startWith(this.translateSrv.currentLang))
      .subscribe(() => {
        this.loadTableConfig();
      });
  }

  handleMessages() {
    this.action$.pipe(takeUntil(this.destroy$)).subscribe((action) => {
      const message = this.toastSrv.getMessage(action, this.names.name(Naming.CAMEL_CASE, NumberMode.SINGULAR));
      if (message) {
        this.messageSrv.add(message);
      }
    });
  }

  onLazyLoadEvent(event: TableLazyLoadEvent) {
    this.store.dispatch(certificateTypeActions.loadAll({ payload: event }));
  }

  onTableEvent(event: TableEvent<CertificateType>) {
    switch (event.type) {
      case TableEventType.CREATE: {
        this.router.navigate([this.router.url, ModalMode.CREATE]);
        break;
      }
      case TableEventType.VIEW: {
        this.router.navigate([this.router.url, ModalMode.VIEW, event.value.id]);
        break;
      }
      case TableEventType.UPDATE: {
        this.router.navigate([this.router.url, ModalMode.UPDATE, event.value.id]);
        break;
      }
      case TableEventType.DELETE: {
        this.confirmationSrv.confirm({
          message: this.translateSrv.instant('messages.confirmation.message', {
            name: this.translateSrv.instant(
              `tables.${this.names.name(Naming.CAMEL_CASE, NumberMode.SINGULAR)}.singular`,
            ),
          }),
          header: this.translateSrv.instant('messages.confirmation.header'),
          icon: 'pi pi-info-circle',
          rejectLabel: this.translateSrv.instant('buttons.reject'),
          acceptLabel: this.translateSrv.instant('buttons.accept'),
          accept: () => {
            this.store.dispatch(certificateTypeActions.delete({ id: event.value.id }));
          },
        });

        break;
      }
    }
  }

  loadTableConfig() {
    const optionButtons = [];
    const topButtons = [];

    topButtons.push({
      action: 'add',
      icon: 'pi pi-plus',
      label: this.translateSrv.instant('buttons.new', {
        name: this.translateSrv.instant(`tables.${'certificateType'}.singular`),
      }),
    });

    optionButtons.push({ action: 'view', icon: 'pi pi-search-plus' });
    optionButtons.push({ action: 'edit', icon: 'pi pi-pencil' });
    optionButtons.push({ action: 'delete', icon: 'pi pi-trash' });

    this.tableConfig$.next({
      ...defaultGenericTableConfig,
      title: this.titleCasePipe.transform(
        this.translateSrv.instant(`tables.${this.names.name(Naming.CAMEL_CASE, NumberMode.SINGULAR)}.plural`),
      ),
      fields: [
        {
          field: 'nameTranslations',
          label: this.translateSrv.instant('columns.name'),
          type: GenericFieldType.TRANSLATIONS,
          filter: false,
          sort: false,
        },
        {
          field: 'descriptionTranslations',
          label: this.translateSrv.instant('columns.description'),
          type: GenericFieldType.TRANSLATIONS,
          filter: false,
          sort: false,
        },
      ],
      buttons: {
        top: [
          {
            type: 'primary',
            style: 'raised',
            icon: 'pi-plus',
            label: this.translateSrv.instant('buttons.create', {
              name: this.translateSrv.instant(
                `tables.${this.names.name(Naming.CAMEL_CASE, NumberMode.SINGULAR)}.singular`,
              ),
            }),
            tooltip: this.translateSrv.instant('buttons.create', {
              name: this.translateSrv.instant(
                `tables.${this.names.name(Naming.CAMEL_CASE, NumberMode.SINGULAR)}.singular`,
              ),
            }),
            event: TableEventType.CREATE,
          },
        ],
        start: [],
        end: [
          {
            type: 'primary',
            style: 'raised',
            icon: 'pi-eye',
            tooltip: this.translateSrv.instant('buttons.view', {
              name: this.translateSrv.instant(
                `tables.${this.names.name(Naming.CAMEL_CASE, NumberMode.SINGULAR)}.singular`,
              ),
            }),
            event: TableEventType.VIEW,
          },
          {
            type: 'primary',
            style: 'raised',
            icon: 'pi-file-edit',
            tooltip: this.translateSrv.instant('buttons.update', {
              name: this.translateSrv.instant(
                `tables.${this.names.name(Naming.CAMEL_CASE, NumberMode.SINGULAR)}.singular`,
              ),
            }),
            event: TableEventType.UPDATE,
          },
          {
            type: 'danger',
            style: 'raised',
            icon: 'pi-trash',
            tooltip: this.translateSrv.instant('buttons.delete', {
              name: this.translateSrv.instant(
                `tables.${this.names.name(Naming.CAMEL_CASE, NumberMode.SINGULAR)}.singular`,
              ),
            }),
            event: TableEventType.DELETE,
          },
        ],
      },
    });
  }
  get NumberMode() {
    return NumberMode;
  }
  get Naming() {
    return Naming;
  }
  get names() {
    return certificateTypeNames;
  }
}
