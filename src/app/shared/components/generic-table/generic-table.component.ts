import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { RequestFilter } from '@app/shared/models/request-filter';
import { LazyLoadEvent } from 'primeng/api';
import {
  FilterEvent,
  GenericTableConfig,
  RequestSpecification,
  SortEvent,
  TableEvent,
} from './models/generic-table.models';

@Component({
  selector: 'app-generic-table',
  templateUrl: './generic-table.component.html',
  styleUrls: ['./generic-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GenericTableComponent<T> implements OnInit {
  config: GenericTableConfig<T> = {
    dataKey: 'id',
    rowsPerPageOptions: [],
    showCurrentPageReport: false,
    paginator: false,
    size: 'normal',
    fields: [],
    buttons: {
      top: [],
      start: [],
      end: [],
    },
  };
  @Input() set tableConfig(tableConfig: GenericTableConfig<T>) {
    if (tableConfig) {
      this.config = tableConfig;
    }
  }
  get tableConfig(): GenericTableConfig<T> {
    return this.config;
  }

  @Input() loading = true;
  @Input() count = 0;
  @Input() entities: T[] = [];
  @Input() requestFilter: RequestFilter = {
    size: 0,
    page: 0,
    filter: [],
    sort: [],
  };
  @Output() requestSpecification: EventEmitter<RequestSpecification<T>> = new EventEmitter();
  requestSpec: RequestSpecification<T> = {
    lazyLoadEvent: {
      first: 0,
      rows: 10,
      multiSortMeta: [],
    },
    filters: [],
  };

  @Output() tableEvent: EventEmitter<TableEvent<T>> = new EventEmitter();
  previousTableEvent: TableEvent<T>;

  filters: FilterEvent<T>[] = [];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.requestSpecification.emit(this.requestSpec);
  }

  onLazyLoad(event: LazyLoadEvent) {
    if (this.requestSpec.lazyLoadEvent !== event) {
      this.requestSpecification.emit({
        lazyLoadEvent: event,
        filters: this.filters,
      });
    }
    this.requestSpec = { ...this.requestSpec, lazyLoadEvent: { ...event } };
  }

  onTableEvent(event: TableEvent<T>) {
    if (this.previousTableEvent !== event) {
      this.tableEvent.emit(event);
    }
    this.previousTableEvent = event;
  }

  onFilter(event: FilterEvent<T>) {
    const lazyLoadEventCopy: LazyLoadEvent = {
      ...this.requestSpec.lazyLoadEvent,
      filters: {
        ...this.requestSpec.lazyLoadEvent.filters,
        [event.field.field]: {
          value: event.filter,
        },
      },
    };

    this.requestSpecification.emit({
      lazyLoadEvent: lazyLoadEventCopy,
      filters: this.filters,
    });
    this.requestSpec = { ...this.requestSpec, lazyLoadEvent: lazyLoadEventCopy };
  }

  onSort(event: SortEvent<T>) {
    const lazyLoadEventCopy: LazyLoadEvent = {
      ...this.requestSpec.lazyLoadEvent,
      sortOrder: event.sortOrder,
      sortField: event.field.field,
    };

    this.requestSpecification.emit({
      lazyLoadEvent: lazyLoadEventCopy,
      filters: this.filters,
    });
    this.requestSpec = { ...this.requestSpec, lazyLoadEvent: lazyLoadEventCopy };
  }

  get styleClass() {
    let size = '';
    switch (this.tableConfig?.size) {
      case 'small':
        size = 'p-datatable-sm';
        break;
      case 'normal':
        size = '';
        break;
      case 'large':
        size = 'p-datatable-lg';
        break;
    }
    return size;
  }
}
