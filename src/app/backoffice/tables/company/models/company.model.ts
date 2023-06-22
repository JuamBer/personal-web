import { FormControl, FormGroup } from '@angular/forms';
import { AuditFields } from '../../certificate-group/models/certificate-group.model';

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
