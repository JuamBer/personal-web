import { CommonState } from 'src/app/shared/state/common/common-state';
import { CertificateType } from '../models/certificate-type.model';

export class CertificateTypeState extends CommonState<CertificateType> {
  constructor() {
    super();
  }
}
