import { FormControl, FormGroup } from '@angular/forms';
import { AuditFields } from 'src/app/shared/models/audit-fields.model';
import { Language } from '../../language/models/language.model';

export interface Curriculum extends AuditFields {
  id: string;
  date: Date;
  language: Language;
  pdf: string;
}

export type CurriculumFormGroup = FormGroup<{
  id?: FormControl<string>;
  date: FormControl<Date>;
  language: FormControl<Language | undefined>;
  pdf: FormControl<string | undefined>;
}>;