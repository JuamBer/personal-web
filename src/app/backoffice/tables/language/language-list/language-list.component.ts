import { TitleCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, Router, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { ConfirmationService, LazyLoadEvent, MessageService } from 'primeng/api';
import { BehaviorSubject, Observable, Subject, filter, map, startWith, switchMap, takeUntil } from 'rxjs';
import { appRootTitle } from 'src/app/app.component';
import {
  GenericFieldType,
  GenericTableConfig,
  TableEvent,
  TableEventType,
} from 'src/app/shared/components/generic-table/models/generic-table.models';
import { defaultGenericTableConfig } from 'src/app/shared/components/generic-table/utils/vairables';
import { EntityList } from 'src/app/shared/models/entity-list.model';
import { ModalMode } from 'src/app/shared/models/modal-mode';
import { ToastService } from 'src/app/shared/services/toast.service';
import { Action } from 'src/app/shared/state/common/common-state';
import { Naming, NumberMode } from 'src/app/shared/state/common/common.names';
import { publicLanguageReducer } from 'src/app/shared/state/languages/public-language.reducer';
import { Language } from '../models/language.model';
import { languageActions } from '../state/language.actions';
import { languageNames } from '../state/language.names';
import { languageReducer } from '../state/language.reducer';

export const languageListTitleResolver: ResolveFn<string> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  const store = inject(Store);
  const translateSrv = inject(TranslateService);

  return store.select(publicLanguageReducer.getOne).pipe(
    filter((i) => !!i),
    switchMap(() =>
      translateSrv
        .get(`tables.${languageNames.name(Naming.CAMEL_CASE, NumberMode.SINGULAR)}.plural`)
        .pipe(map((table) => `${appRootTitle} | ${table}`)),
    ),
  );
};

@Component({
  selector: 'app-language-list',
  templateUrl: './language-list.component.html',
  styleUrls: ['./language-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguageListComponent implements OnInit, EntityList<Language> {
  private store = inject(Store);
  private confirmationSrv = inject(ConfirmationService);
  private router = inject(Router);
  private translateSrv = inject(TranslateService);
  private titleCasePipe = inject(TitleCasePipe);
  private toastSrv = inject(ToastService);
  private messageSrv = inject(MessageService);

  unsubscribe$: Subject<boolean> = new Subject();
  action$: Observable<Action> = this.store.select(languageReducer.getAction).pipe(takeUntil(this.unsubscribe$));
  entities$: Observable<Language[]> = this.store.select(languageReducer.getAll);
  loading$: Observable<boolean> = this.store.select(languageReducer.getLoading);
  count$: Observable<number> = this.store.select(languageReducer.getCount);
  tableConfig$ = new BehaviorSubject<GenericTableConfig<Language | undefined>>(undefined);

  ngOnInit(): void {
    this.store.dispatch(languageActions.count());
    this.translateSrv.onLangChange.pipe(startWith(this.translateSrv.currentLang)).subscribe(() => {
      this.loadTableConfig();
    });
    this.action$.subscribe((action) => {
      const message = this.toastSrv.getMessage(action, this.names.name(Naming.CAMEL_CASE, NumberMode.SINGULAR));
      if (message) {
        this.messageSrv.add(message);
      }
    });
  }

  onLazyLoadEvent(event: LazyLoadEvent) {
    this.store.dispatch(languageActions.loadAll({ payload: event }));
  }

  onTableEvent(event: TableEvent<Language>) {
    switch (event.type) {
      case TableEventType.CREATE: {
        this.router.navigate([this.router.url, 'modal', { modalMode: ModalMode.CREATE }]);
        break;
      }
      case TableEventType.VIEW: {
        this.router.navigate([this.router.url, 'modal', { modalMode: ModalMode.VIEW, id: event.value.id }]);
        break;
      }
      case TableEventType.UPDATE: {
        this.router.navigate([this.router.url, 'modal', { modalMode: ModalMode.UPDATE, id: event.value.id }]);
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
            this.store.dispatch(languageActions.delete({ id: event.value.id }));
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
        name: this.translateSrv.instant(`tables.${'language'}.singular`),
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
          field: 'name',
          label: 'Name',
          type: GenericFieldType.TEXT,
          filter: true,
          sort: true,
        },
        {
          field: 'nativeName',
          label: 'Native Name',
          type: GenericFieldType.TEXT,
          filter: true,
          sort: true,
        },
        {
          field: 'acronym',
          label: 'Acronym',
          type: GenericFieldType.TEXT,
          filter: true,
          sort: true,
          format: (value) => value.toUpperCase(),
        },
        {
          field: 'active',
          label: 'Active',
          type: GenericFieldType.BOOLEAN,
          filter: true,
          sort: true,
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
    return languageNames;
  }
}
