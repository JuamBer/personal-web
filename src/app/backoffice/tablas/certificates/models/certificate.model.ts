import { FormControl, FormGroup } from '@angular/forms';
import { AuditFields, CertificateGroup } from '../../certificate-groups/models/certificate-group.model';
import { CertificateType } from '../../certificate-types/models/certificate-type.model';
import { Company } from '../../companies/models/company.model';

export interface Certificate extends AuditFields {
  id?: number;
  name: string;
  description: string;
  url: string;
  image: string;
  github: string;
  pdf: string;
  date: Date;
  web: string;
  playStore: string;
  microsoftStore: string;
  company: Company;
  certificateGroup: CertificateGroup;
  certificateType: CertificateType;
}
export type CertificateFormGroup = FormGroup<{
  id: FormControl<number | undefined>;
  name: FormControl<string | undefined>;
  description: FormControl<string | undefined>;
  image: FormControl<string | undefined>;
  pdf: FormControl<string | undefined>;
  url: FormControl<string | undefined>;
  date: FormControl<Date>;
  github: FormControl<string | undefined>;
  web: FormControl<string | undefined>;
  microsoftStore: FormControl<string | undefined>;
  playStore: FormControl<string | undefined>;
  company: FormControl<Company | undefined>;
  certificateGroup: FormControl<CertificateGroup | undefined>;
  certificateType: FormControl<CertificateType | undefined>;
}>;
