import { FormControl, FormGroup } from '@angular/forms';
import { AuditFields } from 'src/app/shared/models/audit-fields.model';
import { Certificate } from '../../certificate/models/certificate.model';

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
