//AMGULAR
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { RequestFilter } from '@app/shared/models/request-filter';
import { TableConfig } from '@app/shared/models/table-config/table-config';
import * as fromAccount from '@app/shared/state/account/account.reducer';
import { CommonNames } from '@app/shared/state/common/common.names';
import { publicLanguageReducer } from '@app/shared/state/languages/public-language.reducer';
import { PublicLanguageState } from '@app/shared/state/languages/public-language.state';
import { environment } from '@env/environment';
import { Store } from '@ngrx/store';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Position } from '../models/position.model';
import { PositionModalComponent } from '../position-modal/position-modal.component';
import { positionActions } from '../state/position.actions';
import { positionNames } from '../state/position.names';
import { positionReducer } from '../state/position.reducer';
import { PositionState } from '../state/position.state';

@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.scss'],
})
export class PositionComponent implements OnInit {
  @ViewChild(PositionModalComponent) modal: PositionModalComponent;

  entities$: Observable<Position[]> = this.store.select(positionReducer.getAll);
  loading$: Observable<boolean> = this.store.select(positionReducer.getLoading);
  count$: Observable<number> = this.store.select(positionReducer.getCount);
  names: CommonNames = positionNames;

  requestFilter: RequestFilter = environment.defaultRequestFilter;
  tableConfig: TableConfig;
  loadTable: boolean = false;

  constructor(
    private store: Store<PositionState>,
    private toastSrv: MessageService,
    private router: Router,
    private accountStore: Store<fromAccount.AppState>,
    private translateSrv: TranslateService,
    private confirmationSrv: ConfirmationService,
    private messageSrv: MessageService,
    private publicLanguageStore: Store<PublicLanguageState>,
    private positionStore: Store<PositionState>,
  ) {}

  ngOnInit(): void {
    this.publicLanguageStore
      .select(publicLanguageReducer.getOne)
      .pipe(filter((i) => i != null))
      .subscribe((position) => {
        this.translateSrv.use(position.acronym);
      });

    this.translateSrv.onLangChange.subscribe((event: LangChangeEvent) => {
      this.cargarPagina();
    });

    this.cargarPagina();
    this.getAll();
  }

  cargarPagina() {
    let optionButtons = [];
    let topButtons = [];

    topButtons.push({
      action: 'add',
      icon: 'pi pi-plus',
      label: this.translateSrv.instant('buttons.new', {
        name: this.translateSrv.instant(`tables.${this.names.camelCase.singular}.singular`),
      }),
    });
    optionButtons.push({ action: 'view', icon: 'pi pi-search-plus' });
    optionButtons.push({ action: 'edit', icon: 'pi pi-pencil' });
    optionButtons.push({ action: 'delete', icon: 'pi pi-trash' });

    this.tableConfig = {
      fieldConfig: [
        {
          field: 'name',
          nombre: this.translateSrv.instant('columns.name'),
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
        {
          field: 'company',
          nombre: '',
          sort: false,
          filter: false,
          tipo: 'OBJECTO',
          propiedadParaTipoObjecto: 'name',
        },
        {
          field: 'dateFrom',
          nombre: this.translateSrv.instant('columns.dateFrom'),
          sort: false,
          filter: false,
          tipo: 'FECHA',
        },
        {
          field: 'dateTo',
          nombre: this.translateSrv.instant('columns.dateTo'),
          sort: false,
          filter: false,
          tipo: 'FECHA',
        },
      ],
      optionButtons: optionButtons,
      topButtons: topButtons,
    };
  }

  getAll() {
    this.store.dispatch(positionActions.loadAll({ payload: this.requestFilter }));
  }

  onClick(event) {
    switch (event.type) {
      case 'add': {
        this.router.navigate(['backoffice', this.names.kebabCase.plural.normal, { modalMode: 'CREATE' }]);
        break;
      }
      case 'view': {
        this.router.navigate(['backoffice', this.names.camelCase.plural, { modalMode: 'VIEW', id: event.data.id }]);
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
            name: this.translateSrv.instant(`tables.${this.names.camelCase.singular}.singular`),
          }),
          header: this.translateSrv.instant('messages.confirmation.header'),
          icon: 'pi pi-info-circle',
          rejectLabel: this.translateSrv.instant('buttons.reject'),
          acceptLabel: this.translateSrv.instant('buttons.accept'),
          accept: () => {
            this.store.dispatch(positionActions.delete({ id: event.data.id }));
          },
        });
        break;
      }
    }
  }
}
