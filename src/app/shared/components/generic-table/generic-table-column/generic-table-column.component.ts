import { Component, Input, inject } from '@angular/core';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { BehaviorSubject, combineLatest, map } from 'rxjs';
import { publicLanguageReducer } from 'src/app/shared/state/languages/public-language.reducer';
import { GenericFieldConfig, GenericFieldType } from '../models/generic-table.models';

@Component({
  selector: 'app-generic-table-column',
  templateUrl: './generic-table-column.component.html',
  styleUrls: ['./generic-table-column.component.scss'],
})
export class GenericTableColumnComponent<T> {
  private store = inject(Store);

  faLanguage = faLanguage;

  @Input() field: GenericFieldConfig<T>;

  value$ = new BehaviorSubject<T | undefined>(undefined);
  @Input() set value(value: T) {
    this.value$.next(value);
  }

  language$ = this.store.select(publicLanguageReducer.getOne);
  translation$ = combineLatest([this.language$, this.value$]).pipe(
    map(([language]) => {
      const translation = this.data?.find((i) => i.language === language.acronym);
      return translation?.value || '';
    }),
  );

  get data(): any {
    let result = this.value$.getValue();
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
