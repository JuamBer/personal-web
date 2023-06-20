import { FormControl, FormGroup } from '@angular/forms';
import { AuditFields } from '../../certificate-groups/models/certificate-group.model';

export interface Company extends AuditFields {
  id?: number;
  name: string;
  description: string;
  location: string;
}

export type CompanyFormGroup = FormGroup<{
  id: FormControl<number | undefined>;
  name: FormControl<string | undefined>;
  description: FormControl<string | undefined>;
  location: FormControl<string | undefined>;
}>;
