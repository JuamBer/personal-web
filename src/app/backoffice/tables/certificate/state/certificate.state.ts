import { CommonState } from 'src/app/shared/state/common/common-state';
import { Certificate } from '../models/certificate.model';

export class CertificateState extends CommonState<Certificate> {
  constructor() {
    super();
  }
}
