import { CommonAction } from '@app/shared/state/common/common.actions';
import { CertificateGroup } from '../models/certificate-group.model';
import { certificateGroupNames } from './certificate-group.names';

export class CertificateGroupActions extends CommonAction<CertificateGroup> {
  private static instance: CertificateGroupActions;

  private constructor() {
    super(certificateGroupNames.upperCamelCase.singular);
  }

  public static getInstance(): CertificateGroupActions {
    if (!CertificateGroupActions.instance) {
      CertificateGroupActions.instance = new CertificateGroupActions();
    }
    return CertificateGroupActions.instance;
  }
}
export const certificateGroupActions: CertificateGroupActions =
  CertificateGroupActions.getInstance();
