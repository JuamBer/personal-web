import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { AuditFields } from 'src/app/shared/models/audit-fields.model';
import { Translation, TranslationFormGroup } from 'src/app/shared/models/translation.model';
import { Company } from '../../company/models/company.model';

export interface Position extends AuditFields {
  nameTranslations: Translation[];
  descriptionTranslations: Translation[];
  company: Company;
  dateFrom: Date;
  dateTo: Date;
  hourlyWage: number;
  importance: number;
}

export type PositionFormGroup = FormGroup<{
  id?: FormControl<string | null>;
  nameTranslations: FormArray<TranslationFormGroup>;
  descriptionTranslations: FormArray<TranslationFormGroup>;
  importance: FormControl<number | null>;
  company: FormControl<Company | undefined | null>;
  dateFrom: FormControl<Date | undefined | null>;
  dateTo: FormControl<Date | undefined | null>;
}>;
