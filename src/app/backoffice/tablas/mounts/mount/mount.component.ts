import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { RequestFilter } from '@app/shared/models/request-filter';
import { TableConfig } from '@app/shared/models/table-config/table-config';
import { CommonNames } from '@app/shared/state/common/common.names';
import { publicLanguageReducer } from '@app/shared/state/languages/public-language.reducer';
import { PublicLanguageState } from '@app/shared/state/languages/public-language.state';
import { environment } from '@env/environment';
import { Store } from '@ngrx/store';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Mount } from '../models/mount.model';
import { MountModalComponent } from '../mount-modal/mount-modal.component';
import { mountActions } from '../state/mount.actions';
import { mountNames } from '../state/mount.names';
import { mountReducer } from '../state/mount.reducer';
import { MountState } from '../state/mount.state';

@Component({
  selector: 'app-mount',
  templateUrl: './mount.component.html',
  styleUrls: ['./mount.component.scss'],
})
export class MountComponent implements OnInit {
  @ViewChild(MountModalComponent) modal: MountModalComponent;

  entities$: Observable<Mount[]> = this.store.select(mountReducer.getAll);
  loading$: Observable<boolean> = this.store.select(mountReducer.getLoading);
  count$: Observable<number> = this.store.select(mountReducer.getCount);
  names: CommonNames = mountNames;
  requestFilter: RequestFilter = environment.defaultRequestFilter;
  tableConfig: TableConfig;
  loadTable: boolean = false;
  permisos: any[] = [];

  constructor(
    private store: Store<MountState>,
    private confirmationSrv: ConfirmationService,
    private messageSrv: MessageService,
    private toastSrv: MessageService,
    private router: Router,
    private translateSrv: TranslateService,
    private publicLanguageStore: Store<PublicLanguageState>,
  ) {}

  ngOnInit(): void {
    this.publicLanguageStore
      .select(publicLanguageReducer.getOne)
      .pipe(filter((i) => i != null))
      .subscribe((language) => {
        this.translateSrv.use(language.acronym);
      });
    this.translateSrv.onLangChange.subscribe((event: LangChangeEvent) => {
      this.cargarPagina();
    });

    this.cargarPagina();
    this.getAll();
  }

  getAll() {
    this.cargarPagina();
    this.store.dispatch(mountActions.loadAll({ payload: this.requestFilter }));
  }

  onClick(event) {
    switch (event.type) {
      case 'add': {
        this.router.navigate([
          'backoffice',
          this.names.kebabCase.plural.normal,
          { modalMode: 'CREATE' },
        ]);
        break;
      }
      case 'view': {
        this.router.navigate([
          'backoffice',
          this.names.kebabCase.plural.normal,
          { modalMode: 'VIEW', id: event.data.id },
        ]);
        break;
      }
      case 'edit': {
        this.router.navigate([
          'backoffice',
          this.names.kebabCase.plural.normal,
          { modalMode: 'UPDATE', id: event.data.id },
        ]);
        break;
      }
      case 'delete': {
        this.confirmationSrv.confirm({
          message: this.translateSrv.instant('messages.confirmation.message', {
            name: this.translateSrv.instant(
              `tables.${this.names.camelCase.singular}.singular`,
            ),
          }),
          header: this.translateSrv.instant('messages.confirmation.header'),
          icon: 'pi pi-info-circle',
          rejectLabel: this.translateSrv.instant('buttons.reject'),
          acceptLabel: this.translateSrv.instant('buttons.accept'),
          accept: () => {
            this.store.dispatch(mountActions.delete({ id: event.data.id }));
          },
        });

        break;
      }
    }
  }

  cargarPagina() {
    let optionButtons = [];
    let topButtons = [];

    topButtons.push({
      action: 'add',
      icon: 'pi pi-plus',
      label: this.translateSrv.instant('buttons.new', {
        name: this.translateSrv.instant('tables.mount.singular'),
      }),
    });

    optionButtons.push({ action: 'view', icon: 'pi pi-search-plus' });
    optionButtons.push({ action: 'edit', icon: 'pi pi-pencil' });
    optionButtons.push({ action: 'delete', icon: 'pi pi-trash' });

    this.tableConfig = {
      fieldConfig: [
        {
          field: 'date',
          nombre: this.translateSrv.instant('columns.date'),
          sort: false,
          filter: false,
          tipo: 'FECHA',
        },
        {
          field: 'user',
          nombre: this.translateSrv.instant('columns.user'),
          sort: false,
          filter: false,
          tipo: 'TEXTO',
        },
        {
          field: 'description',
          nombre: this.translateSrv.instant('columns.description'),
          sort: false,
          filter: false,
          tipo: 'TEXTO',
        },
      ],
      optionButtons: optionButtons,
      topButtons: topButtons,
    };
  }
}
