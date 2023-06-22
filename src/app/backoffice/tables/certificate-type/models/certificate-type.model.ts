import { FormControl, FormGroup } from '@angular/forms';
import { AuditFields } from '../../certificate-group/models/certificate-group.model';

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
