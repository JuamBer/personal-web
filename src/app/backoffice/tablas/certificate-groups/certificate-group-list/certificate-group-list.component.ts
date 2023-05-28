import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EntityList } from '@app/backoffice/models/entity-list.model';
import {
  GenericFieldType,
  GenericTableConfig,
  RequestSpecification,
  TableEvent,
  TableEventType,
} from '@app/shared/components/generic-table/models/generic-table.models';
import { RequestFilter } from '@app/shared/models/request-filter';
import { publicLanguageReducer } from '@app/shared/state/languages/public-language.reducer';
import { Store } from '@ngrx/store';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Observable, Subject, filter } from 'rxjs';
import { CertificateGroup } from '../models/certificate-group.model';
import { certificateGroupActions } from '../state/certificate-group.actions';
import { certificateGroupReducer } from '../state/certificate-group.reducer';

@Component({
  selector: 'app-certificate-group-list',
  templateUrl: './certificate-group-list.component.html',
  styleUrls: ['./certificate-group-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CertificateGroupListComponent implements OnInit, EntityList<CertificateGroup> {
  entities$: Observable<CertificateGroup[]> = this.store.select(certificateGroupReducer.getAll);
  loading$: Observable<boolean> = this.store.select(certificateGroupReducer.getLoading);
  count$: Observable<number> = this.store.select(certificateGroupReducer.getCount);
  requestFilter$: Observable<RequestFilter> = this.store.select(certificateGroupReducer.getRequestFilter);
  tableConfig$: Subject<GenericTableConfig<CertificateGroup>> = new Subject<GenericTableConfig<CertificateGroup>>();

  constructor(
    private store: Store,
    private confirmationSrv: ConfirmationService,
    private messageSrv: MessageService,
    private toastSrv: MessageService,
    private router: Router,
    private translateSrv: TranslateService,
  ) {}

  ngOnInit(): void {
    this.tableConfig$.subscribe(console.log);
    this.store
      .select(publicLanguageReducer.getOne)
      .pipe(filter((i) => i != null))
      .subscribe((language) => {
        this.translateSrv.use(language.acronym);
      });
    this.translateSrv.onLangChange.subscribe((event: LangChangeEvent) => {
      this.loadTableConfig();
    });
  }

  onRequestSpecification(event: RequestSpecification<CertificateGroup>) {
    this.store.dispatch(certificateGroupActions.loadAll({ payload: event }));
  }

  onTableEvent(event: TableEvent<CertificateGroup>) {
    switch (event.type) {
      case TableEventType.CREATE: {
        this.router.navigate(['backoffice', 'certificate-groups', 'modal', { modalMode: 'CREATE' }]);
        break;
      }
      case TableEventType.VIEW: {
        this.router.navigate(['backoffice', 'certificate-groups', 'modal', { modalMode: 'VIEW', id: event.value.id }]);
        break;
      }
      case TableEventType.UPDATE: {
        this.router.navigate([
          'backoffice',
          'certificate-groups',
          'modal',
          { modalMode: 'UPDATE', id: event.value.id },
        ]);
        break;
      }
      case TableEventType.DELETE: {
        this.confirmationSrv.confirm({
          message: this.translateSrv.instant('messages.confirmation.message', {
            name: this.translateSrv.instant(`tables.${'certificate-group'}.singular`),
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
        name: this.translateSrv.instant(`tables.${'certificate-group'}.singular`),
      }),
    });

    optionButtons.push({ action: 'view', icon: 'pi pi-search-plus' });
    optionButtons.push({ action: 'edit', icon: 'pi pi-pencil' });
    optionButtons.push({ action: 'delete', icon: 'pi pi-trash' });

    this.tableConfig$.next({
      dataKey: 'id',
      rowsPerPageOptions: [5, 10, 25],
      showCurrentPageReport: true,
      paginator: true,
      size: 'normal',
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
              name: this.translateSrv.instant('tables.certificate-group.singular'),
            }),
            tooltip: this.translateSrv.instant('buttons.create', {
              name: this.translateSrv.instant('tables.certificate-group.singular'),
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
              name: this.translateSrv.instant('tables.certificate-group.singular'),
            }),
            event: TableEventType.VIEW,
          },
          {
            type: 'primary',
            style: 'raised',
            icon: 'pi-file-edit',
            tooltip: this.translateSrv.instant('buttons.update', {
              name: this.translateSrv.instant('tables.certificate-group.singular'),
            }),
            event: TableEventType.UPDATE,
          },
          {
            type: 'danger',
            style: 'raised',
            icon: 'pi-trash',
            tooltip: this.translateSrv.instant('buttons.delete', {
              name: this.translateSrv.instant('tables.certificate-group.singular'),
            }),
            event: TableEventType.DELETE,
          },
        ],
      },
    });
  }
}
