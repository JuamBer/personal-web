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
import { languageNames } from '../../languages/state/language.names';
import { CurriculumModalComponent } from '../curriculum-modal/curriculum-modal.component';
import { Curriculum } from '../models/curriculum.model';
import { curriculumActions } from '../state/curriculum.actions';
import { curriculumNames } from '../state/curriculum.names';
import { curriculumReducer } from '../state/curriculum.reducer';
import { CurriculumState } from '../state/curriculum.state';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.scss'],
})
export class CurriculumComponent implements OnInit {
  @ViewChild(CurriculumModalComponent) modal: CurriculumModalComponent;

  entities$: Observable<Curriculum[]> = this.store.select(
    curriculumReducer.getAll,
  );
  loading$: Observable<boolean> = this.store.select(
    curriculumReducer.getLoading,
  );
  count$: Observable<number> = this.store.select(curriculumReducer.getCount);
  names: CommonNames = curriculumNames;
  requestFilter: RequestFilter = environment.defaultRequestFilter;
  tableConfig: TableConfig;
  loadTable: boolean = false;
  permisos: any[] = [];

  constructor(
    private store: Store<CurriculumState>,
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
        this.cargarPagina();
      });

    this.translateSrv.onLangChange.subscribe((event: LangChangeEvent) => {
      this.cargarPagina();
    });

    this.cargarPagina();
    this.getAll();
  }

  getAll() {
    this.cargarPagina();
    this.store.dispatch(
      curriculumActions.loadAll({ payload: this.requestFilter }),
    );
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
            this.store.dispatch(
              curriculumActions.delete({ id: event.data.id }),
            );
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
        name: this.translateSrv.instant('tables.curriculum.singular'),
      }),
    });

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
          field: 'language',
          nombre: this.translateSrv.instant(
            `tables.${languageNames.camelCase.singular}.singular`,
          ),
          sort: false,
          filter: false,
          tipo: 'OBJECTO',
          propiedadParaTipoObjecto: 'name',
        },
        {
          field: 'pdf',
          nombre: this.translateSrv.instant('columns.pdf'),
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
