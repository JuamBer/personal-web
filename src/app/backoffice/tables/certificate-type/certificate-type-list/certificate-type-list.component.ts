import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, Router, RouterStateSnapshot } from '@angular/router';
import { environment } from '@env/environment';
import { Action, Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { ConfirmationService, LazyLoadEvent } from 'primeng/api';
import { Observable, Subject, filter, startWith } from 'rxjs';
import {
  GenericFieldType,
  GenericTableConfig,
  TableEvent,
  TableEventType,
} from 'src/app/shared/components/generic-table/models/generic-table.models';
import { EntityList } from 'src/app/shared/models/entity-list.model';
import { ModalMode } from 'src/app/shared/models/modal-mode';
import { Naming, NumberMode } from 'src/app/shared/state/common/common.names';
import { publicLanguageReducer } from 'src/app/shared/state/languages/public-language.reducer';
import { CertificateType } from '../models/certificate-type.model';
import { certificateTypeActions } from '../state/certificate-type.actions';
import { certificateTypeNames } from '../state/certificate-type.names';
import { certificateTypeReducer } from '../state/certificate-type.reducer';

export const certificateTypeListTitleResolver: ResolveFn<string> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  return `Juan Sáez García | Certificate Types`;
};

@Component({
  selector: 'app-certificate-type-list',
  templateUrl: './certificate-type-list.component.html',
  styleUrls: ['./certificate-type-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CertificateTypeListComponent implements OnInit, EntityList<CertificateType> {
  private store = inject(Store);
  private confirmationSrv = inject(ConfirmationService);
  private router = inject(Router);
  private translateSrv = inject(TranslateService);

  entities$: Observable<CertificateType[]> = this.store.select(certificateTypeReducer.getAll);
  loading$: Observable<boolean> = this.store.select(certificateTypeReducer.getLoading);
  count$: Observable<number> = this.store.select(certificateTypeReducer.getCount);
  action$: Observable<Action> = this.store.select(certificateTypeReducer.getAction);
  tableConfig$: Subject<GenericTableConfig<CertificateType>> = new Subject<GenericTableConfig<CertificateType>>();

  ngOnInit(): void {
    this.store.dispatch(certificateTypeActions.count());
    this.store
      .select(publicLanguageReducer.getOne)
      .pipe(filter((i) => i != null))
      .subscribe((language) => {
        this.translateSrv.use(language.acronym);
      });

    this.translateSrv.onLangChange.pipe(startWith(this.translateSrv.currentLang)).subscribe(() => {
      this.loadTableConfig();
    });
  }

  onLazyLoadEvent(event: LazyLoadEvent) {
    this.store.dispatch(certificateTypeActions.loadAll({ payload: event }));
  }

  onTableEvent(event: TableEvent<CertificateType>) {
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
      ...environment.defaultGenericTableConfig,
      fields: [
        {
          field: 'name',
          label: 'Name',
          type: GenericFieldType.TEXT,
          filter: true,
          sort: true,
        },
        {
          field: 'description',
          label: 'description',
          type: GenericFieldType.TEXT,
          filter: true,
          sort: true,
          tooltip: (item: CertificateType) => item.description,
        },
        {
          field: 'nameTranslations',
          label: 'Name Translations',
          type: GenericFieldType.TRANSLATIONS,
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
    return certificateTypeNames;
  }
}
