import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { BehaviorSubject, combineLatest, map } from 'rxjs';
import { Translation } from 'src/app/shared/models/translation.model';
import { publicLanguageReducer } from 'src/app/shared/state/languages/public-language.reducer';
import { GenericFieldConfig, GenericFieldType } from '../models/generic-table.models';

@Component({
  selector: 'app-generic-table-column',
  templateUrl: './generic-table-column.component.html',
  styleUrls: ['./generic-table-column.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GenericTableColumnComponent<T> {
  private store = inject(Store);

  @Input({
    required: true,
  })
  field!: GenericFieldConfig<T>;

  value$ = new BehaviorSubject<T | undefined>(undefined);
  @Input({
    required: true,
  })
  set value(value: T) {
    this.value$.next(value);
  }

  language$ = this.store.select(publicLanguageReducer.getOne);
  language = toSignal(this.language$);

  translation$ = combineLatest([this.language$, this.value$]).pipe(
    map(([language]) => {
      if (Array.isArray(this.data) && language) {
        const translation = this.data?.find((i) => i.language === language.acronym);
        return translation?.value || '';
      }
      return '';
    }),
  );

  asDate(data: string | undefined | null | number | boolean | Date | object | Translation[] | undefined | T) {
    return data instanceof Date ? data : undefined;
  }

  get data(): string | undefined | null | number | boolean | Date | object | Translation[] | undefined | T {
    let result = this.value$.getValue();
    const splittedField = this.field.field.split('.');
    for (const field of splittedField) {
      if (result && field && Object.prototype.hasOwnProperty.call(result, field)) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        result = (result as any)[field];
      }
    }
    return result;
  }

  get GenericFieldType() {
    return GenericFieldType;
  }

  get faLanguage() {
    return faLanguage;
  }
}
