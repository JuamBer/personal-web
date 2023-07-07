import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { AuditFields } from 'src/app/shared/models/audit-fields.model';
import { Translation, TranslationFormGroup } from 'src/app/shared/models/translation.model';
import { Company } from '../../company/models/company.model';

export interface Position extends AuditFields {
  id: string;
  nameTranslations: Translation[];
  descriptionTranslations: Translation[];
  company: Company;
  dateFrom: Date;
  dateTo: Date;
  hourlyWage: number;
  importance: number;
}

export type PositionFormGroup = FormGroup<{
  id?: FormControl<string>;
  nameTranslations: FormArray<TranslationFormGroup>;
  descriptionTranslations: FormArray<TranslationFormGroup>;
  importance: FormControl<number>;
  company: FormControl<Company | undefined>;
  dateFrom: FormControl<Date | undefined>;
  dateTo: FormControl<Date | undefined>;
}>;
