import { FormControl, FormGroup } from '@angular/forms';
import { Certificate } from '../../certificates/models/certificate.model';

export interface AuditFields {
  createdAt: Date;
}
export interface CertificateGroup extends AuditFields {
  id?: number;
  name: string;
  description: string;
  certificates?: Certificate[];
}

export type CertificateGroupFormGroup = FormGroup<{
  id: FormControl<number | undefined>;
  name: FormControl<string | undefined>;
  description: FormControl<string | undefined>;
}>;
