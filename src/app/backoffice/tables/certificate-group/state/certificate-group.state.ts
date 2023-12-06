import { CommonState } from 'src/app/shared/state/common/common-state';
import { CertificateGroup } from '../models/certificate-group.model';

export class CertificateGroupState extends CommonState<CertificateGroup> {
  constructor() {
    super();
  }
}
