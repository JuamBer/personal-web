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
import { Position } from '../models/position.model';
import { positionActions } from '../state/position.actions';
import { positionNames } from '../state/position.names';
import { positionReducer } from '../state/position.reducer';

export const positionListTitleResolver: ResolveFn<string> = () => {
  const store = inject(Store);
  const translateSrv = inject(TranslateService);

  return store.select(publicLanguageReducer.getOne).pipe(
    filter((i) => !!i),
    switchMap(() =>
      translateSrv
        .get(`tables.${positionNames.name(Naming.CAMEL_CASE, NumberMode.SINGULAR)}.plural`)
        .pipe(map((table) => `${appRootTitle} | ${table}`)),
    ),
  );
};

@Component({
  selector: 'app-position-list',
  templateUrl: './position-list.component.html',
  styleUrls: ['./position-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PositionListComponent implements OnInit, OnDestroy, EntityList<Position> {
  private store = inject(Store);
  private confirmationSrv = inject(ConfirmationService);
  private router = inject(Router);
  private translateSrv = inject(TranslateService);
  private titleCasePipe = inject(TitleCasePipe);
  private toastSrv = inject(ToastService);
  private messageSrv = inject(MessageService);

  unsubscribe$ = new Subject<void>();

  entities$ = this.store.select(positionReducer.getAll);
  entities = toSignal(this.entities$, {
    initialValue: [],
  });

  loading$ = this.store.select(positionReducer.getLoading);
  loading = toSignal(this.loading$, {
    initialValue: false,
  });

  count$ = this.store.select(positionReducer.getCount);
  count = toSignal(this.count$, {
    initialValue: 0,
  });

  tableConfig$ = new BehaviorSubject<GenericTableConfig<Position> | undefined>(undefined);
  tableConfig = toSignal(this.tableConfig$);

  action$ = this.store.select(positionReducer.getAction);

  ngOnInit() {
    this.handleLoadCount();
    this.handleLoadTableConfig();
    this.handleMessages();
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  handleLoadCount() {
    this.store.dispatch(positionActions.count());
  }

  handleLoadTableConfig() {
    this.translateSrv.onLangChange
      .pipe(takeUntil(this.unsubscribe$), startWith(this.translateSrv.currentLang))
      .subscribe(() => {
        this.loadTableConfig();
      });
  }

  handleMessages() {
    this.action$.pipe(takeUntil(this.unsubscribe$)).subscribe((action) => {
      const message = this.toastSrv.getMessage(action, this.names.name(Naming.CAMEL_CASE, NumberMode.SINGULAR));
      if (message) {
        this.messageSrv.add(message);
      }
    });
  }

  onLazyLoadEvent(event: TableLazyLoadEvent) {
    this.store.dispatch(positionActions.loadAll({ payload: event }));
  }

  onTableEvent(event: TableEvent<Position>) {
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
            this.store.dispatch(positionActions.delete({ id: event.value.id }));
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
          field: 'company.name',
          label: this.translateSrv.instant('tables.company.singular'),
          type: GenericFieldType.TEXT,
          filter: false,
          sort: false,
        },

        {
          field: 'dateFrom',
          label: this.translateSrv.instant('columns.dateFrom'),
          type: GenericFieldType.DATE,
          filter: false,
          sort: false,
        },
        {
          field: 'dateTo',
          label: this.translateSrv.instant('columns.dateTo'),
          type: GenericFieldType.DATE,
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
    return positionNames;
  }
}
