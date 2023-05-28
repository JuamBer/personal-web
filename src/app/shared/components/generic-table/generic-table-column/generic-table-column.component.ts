import { Component, Input } from '@angular/core';
import { GenericFieldConfig } from '../models/generic-table.models';

@Component({
  selector: 'app-generic-table-column',
  templateUrl: './generic-table-column.component.html',
  styleUrls: ['./generic-table-column.component.scss'],
})
export class GenericTableColumnComponent<T> {
  @Input() field: GenericFieldConfig<T>;
  @Input() value: T;
}
