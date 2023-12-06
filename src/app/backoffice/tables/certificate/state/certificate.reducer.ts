import { ReducerTypes } from '@ngrx/store';
import { Naming, NumberMode } from 'src/app/shared/state/common/common.names';
import { CommonReducer } from 'src/app/shared/state/common/common.reducer';
import { Certificate } from '../models/certificate.model';
import { certificateActions } from './certificate.actions';
import { certificateNames } from './certificate.names';
import { CertificateState } from './certificate.state';

const initialState = new CertificateState();
const otherReducers: ReducerTypes<CertificateState, any>[] = [];

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
