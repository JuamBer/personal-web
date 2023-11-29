import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TableLazyLoadEvent } from 'primeng/table';
import { ObjectUtils } from 'src/app/shared/utils/object.utils';
import { FilterEvent, GenericTableConfig, SortEvent, TableEvent } from './models/generic-table.models';
import { defaultGenericTableConfig } from './utils/variables';

@Component({
  selector: 'app-generic-table',
  templateUrl: './generic-table.component.html',
  styleUrls: ['./generic-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GenericTableComponent<T> implements OnInit {
  @Input() config: GenericTableConfig<T> = defaultGenericTableConfig;
  @Input() loading = true;
  @Input() count = 0;
  @Input() entities: T[] = [];
  @Output() lazyLoadEvent: EventEmitter<TableLazyLoadEvent> = new EventEmitter();
  lazyLoadEventValue: TableLazyLoadEvent = {
    first: 0,
    rows: 10,
    multiSortMeta: [],
  };

  @Output() tableEvent: EventEmitter<TableEvent<T>> = new EventEmitter();
  previousTableEvent: TableEvent<T>;

  filters: FilterEvent<T>[] = [];

  ngOnInit(): void {
    this.onLazyLoad(this.lazyLoadEventValue);
  }

  onLazyLoad(event: TableLazyLoadEvent) {
    if (!ObjectUtils.areObjectEquals(this.lazyLoadEventValue, event)) {
      this.lazyLoadEvent.emit(event);
      this.lazyLoadEventValue = event;
    }
  }

  onTableEvent(event: TableEvent<T>) {
    if (!ObjectUtils.areObjectEquals(this.previousTableEvent, event)) {
      this.tableEvent.emit(event);
      this.previousTableEvent = event;
    }
  }

  onFilter(event: FilterEvent<T>) {
    const lazyLoadEventCopy: TableLazyLoadEvent = {
      ...this.lazyLoadEventValue,
      filters: {
        ...this.lazyLoadEventValue.filters,
        [event.field.field]: {
          value: event.filter,
        },
      },
    };

    if (!ObjectUtils.areObjectEquals(this.lazyLoadEventValue, lazyLoadEventCopy)) {
      this.lazyLoadEvent.emit(lazyLoadEventCopy);
      this.lazyLoadEventValue = lazyLoadEventCopy;
    }
  }

  onSort(event: SortEvent<T>) {
    const lazyLoadEventCopy: TableLazyLoadEvent = {
      ...this.lazyLoadEventValue,
      sortOrder: event.sortOrder,
      sortField: event.field.field,
    };
    if (!ObjectUtils.areObjectEquals(this.lazyLoadEventValue, lazyLoadEventCopy)) {
      this.lazyLoadEvent.emit(lazyLoadEventCopy);
      this.lazyLoadEventValue = lazyLoadEventCopy;
    }
  }

  rowTrackBy(index: number, element: T): number {
    if (this.config) {
      return element[this.config.dataKey];
    } else {
      return index;
    }
  }

  get styleClass() {
    let size = '';
    switch (this.config?.size) {
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
