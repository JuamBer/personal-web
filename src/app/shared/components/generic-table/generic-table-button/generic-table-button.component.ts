import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GenericTableButton, GenericTableConfig, TableEvent } from '../models/generic-table.models';

@Component({
  selector: 'app-generic-table-button',
  templateUrl: './generic-table-button.component.html',
  styleUrls: ['./generic-table-button.component.scss'],
})
export class GenericTableButtonComponent<T> {
  @Input() position: 'top' | 'start' | 'end';
  @Input() tableConfig: GenericTableConfig<T>;
  @Input() button: GenericTableButton;
  @Input() entity: T | null = null;
  @Output() tableEvent: EventEmitter<TableEvent<T>> = new EventEmitter();

  onTableEvent(event: TableEvent<T>) {
    this.tableEvent.emit(event);
  }

  get buttonClasses() {
    let res = 'p-button';

    switch (this.tableConfig?.size) {
      case 'small':
        res = 'p-button-sm';
        break;
      case 'normal':
        res = 'p-button';
        break;
      case 'large':
        res = 'p-button-lg';
        break;
    }

    return `${res} p-button-${this.button.type}`;
  }

  get tooltipPosition() {
    let res = 'bottom';

    switch (this.position) {
      case 'start':
        res = 'right';
        break;
      case 'end':
        res = 'left';
        break;
      case 'top':
        res = 'bottom';
        break;
    }

    return res;
  }
}
