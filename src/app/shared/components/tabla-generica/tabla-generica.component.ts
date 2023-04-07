import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { DatePipe } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { RequestFilter } from '@app/shared/models/request-filter';
import { LazyLoadEvent } from 'primeng/api';
import { TableConfig } from '../../models/table-config/table-config';
import { Tipo } from './campo/campo.component';

@Component({
  selector: 'app-tabla-generica',
  templateUrl: './tabla-generica.component.html',
  animations: [
    trigger('rowExpansionTrigger', [
      state(
        'void',
        style({
          transform: 'translateX(-10%)',
          opacity: 0,
        }),
      ),
      state(
        'active',
        style({
          transform: 'translateX(0)',
          opacity: 1,
        }),
      ),
      transition('* <=> *', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
    ]),
  ],
  styleUrls: ['./tabla-generica.component.scss'],
})
export class TablaGenericaComponent implements OnInit, OnDestroy, OnChanges {
  tipos = Tipo;
  lazy: boolean = true;
  paginators: number[] = [10, 25, 50];
  @Input() entities!: any[];
  @Input() loading!: boolean;
  @Input() totalRecords!: number;
  @Input() permisos!: string[];
  @Input() tableConfig!: TableConfig;
  @Input('selection') selection: any;
  @Output('selectionChange') onSelectionChange = new EventEmitter<any>();

  @Input() requestFilter!: RequestFilter;
  @Output() requestFilterChange: EventEmitter<RequestFilter> =
    new EventEmitter();

  @Output() loadAll: EventEmitter<any> = new EventEmitter();
  @Output() onButtonClick = new EventEmitter<any>();
  @Output() onSelect = new EventEmitter<any>();
  @Output() onUnselect = new EventEmitter<any>();

  statuses: any[] = [];

  optionsWidth: string = '6em';
  filters: any = {};

  constructor(private datePipe: DatePipe) {}

  ngOnDestroy(): void {}
  ngOnChanges() {}
  ngOnInit(): void {
    this.statuses = [
      { label: 'Selecciona...', value: null },
      { label: 'Activo', value: 'true' },
      { label: 'Inactivo', value: 'false' },
    ];
    this.optionsWidth =
      this.tableConfig?.optionButtons?.length < 2
        ? `${this.tableConfig?.optionButtons?.length * 5.5}em`
        : `${this.tableConfig?.optionButtons?.length * 4}em`;
    if (this.tableConfig?.lazy != undefined) this.lazy = this.tableConfig.lazy;
  }

  calculareOptionsWidth(): string {
    return this.tableConfig?.optionButtons?.length < 2
      ? `${this.tableConfig?.optionButtons?.length * 5.5}em`
      : `${this.tableConfig?.optionButtons?.length * 4}em`;
  }

  contienePermisos(permisos: string[]): boolean {
    var result: boolean = true;
    if (permisos) {
      permisos.forEach((permiso) => {
        result = result && this.permisos.includes(permiso);
      });
    }
    return result;
  }

  loadEntitiesLazy(event: LazyLoadEvent) {
    var sort: { field: string; order: string }[] = [];
    this.filters = event.filters;
    event.multiSortMeta?.forEach((sortMeta) => {
      sort.push({
        field: sortMeta.field,
        order: sortMeta.order < 0 ? 'desc' : 'asc',
      });
    });

    var filter = [];

    for (let [key, value] of Object.entries(
      event.filters ? event.filters : [],
    )) {
      filter.push({ field: key, value: value.value });
    }

    this.requestFilter = {
      size: event.rows,
      page: event.first && event.rows ? event.first / event.rows : 0,
      filter: filter,
      sort: sort,
    };

    this.requestFilterChange.emit(this.requestFilter);
    this.loadAll.emit();
  }

  buttonEvent(event: any) {
    this.onButtonClick.emit(event);
  }

  formatDate(date: Date, format: string): any {
    return this.datePipe.transform(date, format);
  }

  hasFilters(): boolean {
    let result = false;
    this.tableConfig.fieldConfig.forEach(
      (fc) => (result = result || fc.filter),
    );
    return result;
  }

  onRowSelect(event: { data: any }) {
    this.onSelectionChange.emit(this.selection);
    this.onSelect.emit(event.data);
  }

  onRowUnselect(event: { data: any }) {
    this.onSelectionChange.emit(this.selection);
    this.onUnselect.emit(event.data);
  }

  byString(entity: { [x: string]: any } | null | undefined, string: string) {
    if (entity == null || entity === undefined) return entity;
    string = string.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
    string = string.replace(/^\./, ''); // strip a leading dot
    var a = string.split('.');
    for (var i = 0, n = a.length; i < n; ++i) {
      var k = a[i];
      if (k in entity!) {
        entity = entity![k];
      } else {
        return null;
      }
    }
    return entity;
  }

  getObject(object: { [x: string]: any }, string1: any, string2: any) {
    const res = string1 + string2;
    return object[res];
  }

  handleInput(event: Event) {
    return (event.target as HTMLInputElement).value;
  }
}
