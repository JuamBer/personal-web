import { TitleCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ResolveFn, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { ConfirmationService } from 'primeng/api';
import { TableLazyLoadEvent } from 'primeng/table';
import { BehaviorSubject, Subject, filter, map, startWith, switchMap } from 'rxjs';
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
import { Naming, NumberMode } from 'src/app/shared/state/common/common.names';
import { publicLanguageReducer } from 'src/app/shared/state/languages/public-language.reducer';
import { Certificate } from '../models/certificate.model';
import { certificateActions } from '../state/certificate.actions';
import { certificateNames } from '../state/certificate.names';
import { certificateReducer } from '../state/certificate.reducer';

export const certificateListTitleResolver: ResolveFn<string> = () => {
  const store = inject(Store);
  const translateSrv = inject(TranslateService);

  return store.select(publicLanguageReducer.getOne).pipe(
    filter((i) => !!i),
    switchMap(() =>
      translateSrv
        .get(`tables.${certificateNames.name(Naming.CAMEL_CASE, NumberMode.SINGULAR)}.plural`)
        .pipe(map((table) => `${appRootTitle} | ${table}`)),
    ),
  );
};

@Component({
  selector: 'app-certificate-list',
  templateUrl: './certificate-list.component.html',
  styleUrls: ['./certificate-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CertificateListComponent implements OnInit, OnDestroy, EntityList<Certificate> {
  private store = inject(Store);
  private confirmationSrv = inject(ConfirmationService);
  private router = inject(Router);
  private translateSrv = inject(TranslateService);
  private titleCasePipe = inject(TitleCasePipe);

  unsubscribe$ = new Subject<void>();

  entities$ = this.store.select(certificateReducer.getAll);
  entities$$ = toSignal(this.entities$, {
    initialValue: [],
  });

  loading$ = this.store.select(certificateReducer.getLoading);
  loading$$ = toSignal(this.loading$, {
    initialValue: false,
  });

  count$ = this.store.select(certificateReducer.getCount);
  count$$ = toSignal(this.count$, {
    initialValue: 0,
  });

  tableConfig$ = new BehaviorSubject<GenericTableConfig<Certificate> | undefined>(undefined);
  tableConfig$$ = toSignal(this.tableConfig$);

  action$ = this.store.select(certificateReducer.getAction);

  ngOnInit() {
    this.store.dispatch(certificateActions.count());
    this.translateSrv.onLangChange.pipe(startWith(this.translateSrv.currentLang)).subscribe(() => {
      this.loadTableConfig();
    });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  onLazyLoadEvent(event: TableLazyLoadEvent) {
    this.store.dispatch(certificateActions.loadAll({ payload: event }));
  }

  onTableEvent(event: TableEvent<Certificate>) {
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
            this.store.dispatch(certificateActions.delete({ id: event.value.id }));
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
        name: this.translateSrv.instant('tables.certificate.singular'),
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
          field: 'image',
          label: this.translateSrv.instant('columns.image'),
          type: GenericFieldType.IMAGE,
          sort: false,
          filter: false,
        },
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
        {
          field: 'date',
          label: this.translateSrv.instant('columns.date'),
          sort: false,
          filter: false,
          type: GenericFieldType.DATE,
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
    return certificateNames;
  }
}
