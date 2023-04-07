import { CommonReducer } from '@app/shared/state/common/common.reducer';
import { ReducerTypes } from '@ngrx/store';
import { CertificateGroup } from '../models/certificate-group.model';
import { certificateGroupActions } from './certificate-group.actions';
import { certificateGroupNames } from './certificate-group.names';
import { CertificateGroupState } from './certificate-group.state';

const initialState: CertificateGroupState = {
  entities: [],
  selectedId: null,
  count: 0,
  loading: false,
  message: null,
};

const otherReducers: ReducerTypes<any, any>[] = [];

class CertificateGroupReducer extends CommonReducer<
  CertificateGroup,
  CertificateGroupState
> {
  private static instance: CertificateGroupReducer;

  private constructor() {
    super(
      certificateGroupNames.kebabCase.plural.normal,
      certificateGroupActions,
      initialState,
      otherReducers,
    );
  }

  public static getInstance(): CertificateGroupReducer {
    if (!CertificateGroupReducer.instance) {
      CertificateGroupReducer.instance = new CertificateGroupReducer();
    }
    return CertificateGroupReducer.instance;
  }
}
export const certificateGroupReducer: CertificateGroupReducer =
  CertificateGroupReducer.getInstance();
