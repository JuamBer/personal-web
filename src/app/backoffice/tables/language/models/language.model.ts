import { FormControl, FormGroup } from '@angular/forms';
import { AuditFields } from '@app/shared/models/audit-fields.model';

export interface Language extends AuditFields {
  id: string;
  nativeName: string;
  name: string;
  acronym: string;
  active: boolean;
}

export type LanguageFormGroup = FormGroup<{
  id?: FormControl<string>;
  nativeName: FormControl<string | undefined>;
  name: FormControl<string | undefined>;
  acronym: FormControl<string | undefined>;
  active: FormControl<boolean>;
}>;
