import { CertificateGroup } from '../../certificate-groups/models/certificate-group.model';
import { CertificateType } from '../../certificate-types/models/certificate-type.model';
import { Company } from '../../companies/models/company.model';

export interface Certificate {
  id?: number;
  name: string;
  description: string;
  url: string;
  image: string;
  github: string;
  pdf: string;
  company: Company;
  certificateGroup: CertificateGroup;
  certificateType: CertificateType;
  date: Date;
  web: string;
  playStore: string;
  microsoftStore: string;
}
