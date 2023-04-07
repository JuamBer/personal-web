import { Certificate } from '../../certificates/models/certificate.model';

export interface CertificateGroup {
  id?: number;
  name: string;
  description: string;
  certificates?: Certificate[];
}
