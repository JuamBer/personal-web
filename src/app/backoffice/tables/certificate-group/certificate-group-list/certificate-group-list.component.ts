import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, Router, RouterStateSnapshot } from '@angular/router';
import { EntityList } from '@app/backoffice/models/entity-list.model';
import {
  GenericFieldType,
  GenericTableConfig,
  TableEvent,
  TableEventType,
} from '@app/shared/components/generic-table/models/generic-table.models';
import { ModalMode } from '@app/shared/models/modal-config/modal-mode';
import { Naming, NumberMode } from '@app/shared/state/common/common.names';
import { publicLanguageReducer } from '@app/shared/state/languages/public-language.reducer';
import { environment } from '@env/environment';
import { Action, Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { ConfirmationService, LazyLoadEvent } from 'primeng/api';
import { Observable, Subject, filter, startWith } from 'rxjs';
import { CertificateGroup } from '../models/certificate-group.model';
import { certificateGroupActions } from '../state/certificate-group.actions';
import { certificateGroupNames } from '../state/certificate-group.names';
import { certificateGroupReducer } from '../state/certificate-group.reducer';

export const certificateGroupListTitleResolver: ResolveFn<string> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  return `Juan Sáez García | Certificate Groups`;
};

@Component({
  selector: 'app-certificate-group-list',
  templateUrl: './certificate-group-list.component.html',
  styleUrls: ['./certificate-group-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CertificateGroupListComponent implements OnInit, EntityList<CertificateGroup> {
  private store = inject(Store);
  private confirmationSrv = inject(ConfirmationService);
  private router = inject(Router);
  private translateSrv = inject(TranslateService);

  entities$: Observable<CertificateGroup[]> = this.store.select(certificateGroupReducer.getAll);
  loading$: Observable<boolean> = this.store.select(certificateGroupReducer.getLoading);
  count$: Observable<number> = this.store.select(certificateGroupReducer.getCount);
  action$: Observable<Action> = this.store.select(certificateGroupReducer.getAction);
  tableConfig$: Subject<GenericTableConfig<CertificateGroup>> = new Subject<GenericTableConfig<CertificateGroup>>();

  ngOnInit(): void {
    this.store.dispatch(certificateGroupActions.count());
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
    this.store.dispatch(certificateGroupActions.loadAll({ payload: event }));
  }

  onTableEvent(event: TableEvent<CertificateGroup>) {
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
            name: this.translateSrv.instant(`tables.${'certificateGroup'}.singular`),
          }),
          header: this.translateSrv.instant('messages.confirmation.header'),
          icon: 'pi pi-info-circle',
          rejectLabel: this.translateSrv.instant('buttons.reject'),
          acceptLabel: this.translateSrv.instant('buttons.accept'),
          accept: () => {
            this.store.dispatch(certificateGroupActions.delete({ id: event.value.id }));
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
        name: this.translateSrv.instant(`tables.${this.names.name(Naming.CAMEL_CASE, NumberMode.SINGULAR)}.singular`),
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
          tooltip: (item: CertificateGroup) => item.description,
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
    return certificateGroupNames;
  }
}