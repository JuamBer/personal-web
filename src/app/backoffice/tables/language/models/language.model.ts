import { FormControl, FormGroup } from '@angular/forms';
import { AuditFields } from 'src/app/shared/models/audit-fields.model';

export interface Language extends AuditFields {
  nativeName: string;
  name: string;
  acronym: string;
  active: boolean;
}

export type LanguageFormGroup = FormGroup<{
  id?: FormControl<string | null>;
  nativeName: FormControl<string | undefined | null>;
  name: FormControl<string | undefined | null>;
  acronym: FormControl<string | undefined | null>;
  active: FormControl<boolean | null>;
}>;
