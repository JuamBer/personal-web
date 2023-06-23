import { FormControl, FormGroup } from '@angular/forms';
import { AuditFields } from '@app/shared/models/audit-fields.model';

export interface Company extends AuditFields {
  id: string;
  name: string;
  description: string;
  location: string;
}

export type CompanyFormGroup = FormGroup<{
  id?: FormControl<string>;
  name: FormControl<string | undefined>;
  description: FormControl<string | undefined>;
  location: FormControl<string | undefined>;
}>;
