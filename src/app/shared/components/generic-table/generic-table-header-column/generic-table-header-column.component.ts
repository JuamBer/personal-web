import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  faCircleQuestion,
  faFilter,
  faFilterCircleDollar,
  faSort,
  faSortDown,
  faSortUp,
} from '@fortawesome/free-solid-svg-icons';
import { LazyLoadEvent } from 'primeng/api';
import { OverlayPanel } from 'primeng/overlaypanel';
import { FormUtils } from 'src/app/shared/utils/form-utils';
import {
  Filter,
  FilterEvent,
  FilterType,
  GenericFieldConfig,
  GenericFieldType,
  SortEvent,
} from '../models/generic-table.models';
@Component({
  selector: 'app-generic-table-header-column',
  templateUrl: './generic-table-header-column.component.html',
  styleUrls: ['./generic-table-header-column.component.scss'],
})
export class GenericTableHeaderColumnComponent<T> {
  @ViewChild(OverlayPanel) filterTypes: OverlayPanel;

  faQuestion = faCircleQuestion;

  filterFormGroup = this.formBuilder.group({
    value: [undefined, [Validators.required]],
    filterType: [undefined, [Validators.required]],
  });

  sorting: 'initial' | 'ascending' | 'descending' = 'initial';

  @Input() field: GenericFieldConfig<T>;
  @Output() filter = new EventEmitter<FilterEvent<T>>();
  @Output() sort = new EventEmitter<SortEvent<T>>();

  @Input() set lazyLoadEvent(event: LazyLoadEvent) {
    let isHighlight = false;
    if (event?.sortField !== this.field.field) {
      this.sorting = 'initial';
    } else {
      isHighlight = true;
    }

    Object.entries(event?.filters)?.forEach(([k, v]) => {
      if (k === this.field.field && v.value) {
        isHighlight = true;
      }
    });

    this.isHighlight = isHighlight;
  }

  isHighlight: boolean = false;

  constructor(private formBuilder: FormBuilder) {}

  get GenericFieldType() {
    return GenericFieldType;
  }

  get FilterType() {
    return FilterType;
  }

  get filterIcon(): IconDefinition {
    if (this.filterFormGroup.controls['value'].value) {
      return faFilterCircleDollar;
    }
    return faFilter;
  }

  get sortIcon(): IconDefinition {
    switch (this.sorting) {
      case 'initial':
        return faSort;
        break;
      case 'ascending':
        return faSortUp;
        break;
      case 'descending':
        return faSortDown;
        break;
    }
  }

  onSort() {
    let ascending = 0;
    switch (this.sorting) {
      case 'initial':
        this.sorting = 'descending';
        ascending = 1;
        break;
      case 'ascending':
        this.sorting = 'descending';
        ascending = 1;
        break;
      case 'descending':
        this.sorting = 'ascending';
        ascending = -1;
        break;
    }
    this.sort.emit({
      field: this.field,
      sortOrder: ascending,
    });
  }

  reset() {
    this.filterFormGroup.reset();
    this.filterFormGroup.updateValueAndValidity();
    this.filter.emit({
      field: this.field,
      filter: this.filterFormGroup.value as Filter,
    });
    this.filterTypes.toggle(false);
  }

  onSubmit() {
    if (this.filterFormGroup.valid) {
      this.filter.emit({
        field: this.field,
        filter: this.filterFormGroup.value as Filter,
      });
      this.filterTypes.toggle(false);
    } else {
      FormUtils.markAllAsDirtyAndTouched(this.filterFormGroup);
    }
  }
}
