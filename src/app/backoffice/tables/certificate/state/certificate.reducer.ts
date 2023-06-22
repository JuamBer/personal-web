import { defaultCommonState } from '@app/shared/state/common/common-state';
import { Naming, NumberMode } from '@app/shared/state/common/common.names';
import { CommonReducer } from '@app/shared/state/common/common.reducer';
import { ReducerTypes } from '@ngrx/store';
import { Certificate } from '../models/certificate.model';
import { certificateActions } from './certificate.actions';
import { certificateNames } from './certificate.names';
import { CertificateState } from './certificate.state';

const initialState: CertificateState = {
  ...(defaultCommonState as CertificateState),
};

const otherReducers: ReducerTypes<any, any>[] = [];

class CertificateReducer extends CommonReducer<Certificate, CertificateState> {
  private static instance: CertificateReducer;

  private constructor() {
    super(certificateNames.name(Naming.KEBAB_CASE, NumberMode.PLURAL), certificateActions, initialState, otherReducers);
  }

  public static getInstance(): CertificateReducer {
    if (!CertificateReducer.instance) {
      CertificateReducer.instance = new CertificateReducer();
    }
    return CertificateReducer.instance;
  }
}
export const certificateReducer: CertificateReducer = CertificateReducer.getInstance();
