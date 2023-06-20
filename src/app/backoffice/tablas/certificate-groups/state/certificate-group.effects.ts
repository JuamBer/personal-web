import { Injectable } from '@angular/core';
import { CommonEffect } from '@app/shared/state/common/common.effects';
import { Actions } from '@ngrx/effects';
import { CertificateGroup } from '../models/certificate-group.model';
import { CertificateGroupService } from '../services/certificate-group.service';
import { certificateGroupActions } from './certificate-group.actions';

@Injectable()
export class CertificateGroupEffect extends CommonEffect<CertificateGroup> {
  constructor(protected override actions$: Actions, private certificateGroupSrv: CertificateGroupService) {
    super(actions$, certificateGroupActions, certificateGroupSrv);
  }
}
