import { ReducerTypes } from '@ngrx/store';
import { Naming, NumberMode } from 'src/app/shared/state/common/common.names';
import { CommonReducer } from 'src/app/shared/state/common/common.reducer';
import { CertificateType } from '../models/certificate-type.model';
import { certificateTypeActions } from './certificate-type.actions';
import { certificateTypeNames } from './certificate-type.names';
import { CertificateTypeState } from './certificate-type.state';

const initialState = new CertificateTypeState();
const otherReducers: ReducerTypes<CertificateTypeState, any>[] = [];

export class CertificateTypeReducer extends CommonReducer<CertificateType, CertificateTypeState> {
  private static instance: CertificateTypeReducer;

  private constructor() {
    super(
      certificateTypeNames.name(Naming.KEBAB_CASE, NumberMode.PLURAL),
      certificateTypeActions,
      initialState,
      otherReducers,
    );
  }

  public static getInstance(): CertificateTypeReducer {
    if (!CertificateTypeReducer.instance) {
      CertificateTypeReducer.instance = new CertificateTypeReducer();
    }
    return CertificateTypeReducer.instance;
  }
}
export const certificateTypeReducer: CertificateTypeReducer = CertificateTypeReducer.getInstance();
