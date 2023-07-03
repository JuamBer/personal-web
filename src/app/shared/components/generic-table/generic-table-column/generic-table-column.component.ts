import { Component, Input, inject } from '@angular/core';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
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
  @Input() value: T;

  language$ = this.store.select(publicLanguageReducer.getOne);
  translation$ = this.language$.pipe(
    map((language) => {
      const translation = this.data?.find((i) => i.language === language.acronym);
      return translation?.value || '';
    }),
  );

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
