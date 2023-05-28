import { defaultCommonState } from '@app/shared/state/common/common-state';
import { CommonReducer } from '@app/shared/state/common/common.reducer';
import { ReducerTypes } from '@ngrx/store';
import { CertificateType } from '../models/certificate-type.model';
import { certificateTypeActions } from './certificate-type.actions';
import { certificateTypeNames } from './certificate-type.names';
import { CertificateTypeState } from './certificate-type.state';

const initialState: CertificateTypeState = {
  ...(defaultCommonState as CertificateTypeState),
};

const otherReducers: ReducerTypes<any, any>[] = [];

class CertificateTypeReducer extends CommonReducer<CertificateType, CertificateTypeState> {
  private static instance: CertificateTypeReducer;

  private constructor() {
    super(certificateTypeNames.kebabCase.plural.normal, certificateTypeActions, initialState, otherReducers);
  }

  public static getInstance(): CertificateTypeReducer {
    if (!CertificateTypeReducer.instance) {
      CertificateTypeReducer.instance = new CertificateTypeReducer();
    }
    return CertificateTypeReducer.instance;
  }
}
export const certificateTypeReducer: CertificateTypeReducer = CertificateTypeReducer.getInstance();
