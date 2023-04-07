import { CommonAction } from '@app/shared/state/common/common.actions';
import { Certificate } from '../models/certificate.model';
import { certificateNames } from './certificate.names';

export class CertificateActions extends CommonAction<Certificate> {
  private static instance: CertificateActions;

  private constructor() {
    super(certificateNames.upperCamelCase.singular);
  }

  public static getInstance(): CertificateActions {
    if (!CertificateActions.instance) {
      CertificateActions.instance = new CertificateActions();
    }
    return CertificateActions.instance;
  }
}
export const certificateActions: CertificateActions =
  CertificateActions.getInstance();
