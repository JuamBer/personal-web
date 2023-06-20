import { FormControl, FormGroup } from '@angular/forms';
import { AuditFields } from '../../certificate-groups/models/certificate-group.model';

export interface CertificateType extends AuditFields {
  id?: number;
  name: string;
  description: string;
}
export type CertificateTypeFormGroup = FormGroup<{
  id: FormControl<number | undefined>;
  name: FormControl<string | undefined>;
  description: FormControl<string | undefined>;
}>;
