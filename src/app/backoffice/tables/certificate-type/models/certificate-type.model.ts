import { FormControl, FormGroup } from '@angular/forms';
import { AuditFields } from '@app/shared/models/audit-fields.model';

export interface CertificateType extends AuditFields {
  id: string;
  name: string;
  description: string;
}
export type CertificateTypeFormGroup = FormGroup<{
  id?: FormControl<string>;
  name: FormControl<string | undefined>;
  description: FormControl<string | undefined>;
}>;
