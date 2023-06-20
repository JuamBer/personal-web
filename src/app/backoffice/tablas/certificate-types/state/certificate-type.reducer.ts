import { defaultCommonState } from '@app/shared/state/common/common-state';
import { Naming, NumberMode } from '@app/shared/state/common/common.names';
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
