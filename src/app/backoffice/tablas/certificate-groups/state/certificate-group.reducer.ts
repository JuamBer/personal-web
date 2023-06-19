import { Injectable } from '@angular/core';
import { defaultCommonState } from '@app/shared/state/common/common-state';
import { Naming, NumberMode } from '@app/shared/state/common/common.names';
import { CommonReducer } from '@app/shared/state/common/common.reducer';
import { ReducerTypes } from '@ngrx/store';
import { CertificateGroup } from '../models/certificate-group.model';
import { CertificateGroupActions, certificateGroupActions } from './certificate-group.actions';
import { certificateGroupNames } from './certificate-group.names';
import { CertificateGroupState } from './certificate-group.state';

const initialState: CertificateGroupState = {
  ...(defaultCommonState as CertificateGroupState),
};

const otherReducers: ReducerTypes<any, any>[] = [];

@Injectable({
  providedIn: 'root',
})
export class CertificateGroupReducer extends CommonReducer<CertificateGroup, CertificateGroupState> {
  private static instance: CertificateGroupReducer;

  constructor(private certificateGroupActions: CertificateGroupActions) {
    super(
      certificateGroupNames.name(Naming.KEBAB_CASE, NumberMode.PLURAL),
      certificateGroupActions,
      initialState,
      otherReducers,
    );
  }

  public static getInstance(): CertificateGroupReducer {
    if (!CertificateGroupReducer.instance) {
      CertificateGroupReducer.instance = new CertificateGroupReducer(certificateGroupActions);
    }
    return CertificateGroupReducer.instance;
  }
}
export const certificateGroupReducer: CertificateGroupReducer = CertificateGroupReducer.getInstance();
