import { FormControl, FormGroup } from '@angular/forms';
import { Certificate } from '../../certificate/models/certificate.model';

export interface AuditFields {
  createdAt: Date;
}
export interface CertificateGroup extends AuditFields {
  id: string;
  name: string;
  description: string;
  certificates?: Certificate[];
}

export type CertificateGroupFormGroup = FormGroup<{
  id?: FormControl<string>;
  name: FormControl<string | undefined>;
  description: FormControl<string | undefined>;
}>;
