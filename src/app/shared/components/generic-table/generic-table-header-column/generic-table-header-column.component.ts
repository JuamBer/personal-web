import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  faCircleQuestion,
  faFilter,
  faFilterCircleDollar,
  faLanguage,
  faSort,
  faSortDown,
  faSortUp,
} from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { OverlayPanel } from 'primeng/overlaypanel';
import { TableLazyLoadEvent } from 'primeng/table';
import { publicLanguageReducer } from 'src/app/shared/state/languages/public-language.reducer';
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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GenericTableHeaderColumnComponent<T> {
  private fb = inject(FormBuilder);
  private store = inject(Store);

  @ViewChild(OverlayPanel) filterTypes!: OverlayPanel;

  filterFormGroup = this.fb.nonNullable.group({
    value: [undefined, [Validators.required]],
    filterType: this.fb.nonNullable.control<FilterType | undefined>(undefined, [Validators.required]),
  });

  sorting: 'initial' | 'ascending' | 'descending' = 'initial';

  language$ = this.store.select(publicLanguageReducer.getOne);

  @Input({
    required: true,
  })
  field!: GenericFieldConfig<T>;
  @Output() filter = new EventEmitter<FilterEvent<T>>();
  @Output() sort = new EventEmitter<SortEvent<T>>();

  @Input() set lazyLoadEvent(event: TableLazyLoadEvent) {
    let isHighlight = false;
    if (event?.sortField !== this.field.field) {
      this.sorting = 'initial';
    } else {
      isHighlight = true;
    }

    if (event?.filters && !Array.isArray(event?.filters)) {
      Object.entries(event?.filters)?.forEach(([k]) => {
        if (k === this.field.field) {
          isHighlight = true;
        }
      });
    }

    this.isHighlight = isHighlight;
  }

  isHighlight: boolean = false;

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
      case 'ascending':
        return faSortUp;
      case 'descending':
        return faSortDown;
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

  get faQuestion() {
    return faCircleQuestion;
  }
  get faLanguage() {
    return faLanguage;
  }
}
