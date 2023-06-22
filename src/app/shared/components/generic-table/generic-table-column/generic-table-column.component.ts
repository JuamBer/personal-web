import { Component, Input } from '@angular/core';
import { GenericFieldConfig, GenericFieldType } from '../models/generic-table.models';

@Component({
  selector: 'app-generic-table-column',
  templateUrl: './generic-table-column.component.html',
  styleUrls: ['./generic-table-column.component.scss'],
})
export class GenericTableColumnComponent<T> {
  @Input() field: GenericFieldConfig<T>;
  @Input() value: T;

  get data(): any {
    let result = this.value;
    const spplitedField = this.field.field.split('.');
    for (const field of spplitedField) {
      result = result[field];
    }

    return result;
  }

  get GenericFieldType() {
    return GenericFieldType;
  }
}
