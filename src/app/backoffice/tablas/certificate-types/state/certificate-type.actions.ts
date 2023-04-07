import { CommonAction } from '@app/shared/state/common/common.actions';
import { CertificateType } from '../models/certificate-type.model';
import { certificateTypeNames } from './certificate-type.names';

export class CertificateTypeActions extends CommonAction<CertificateType> {
  private static instance: CertificateTypeActions;

  private constructor() {
    super(certificateTypeNames.upperCamelCase.singular);
  }

  public static getInstance(): CertificateTypeActions {
    if (!CertificateTypeActions.instance) {
      CertificateTypeActions.instance = new CertificateTypeActions();
    }
    return CertificateTypeActions.instance;
  }
}
export const certificateTypeActions: CertificateTypeActions =
  CertificateTypeActions.getInstance();
