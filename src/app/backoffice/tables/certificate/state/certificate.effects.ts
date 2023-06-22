import { Injectable } from '@angular/core';
import { CommonEffect } from '@app/shared/state/common/common.effects';
import { Actions } from '@ngrx/effects';
import { Certificate } from '../models/certificate.model';
import { CertificateService } from '../services/certificate.service';
import { certificateActions } from './certificate.actions';

@Injectable()
export class CertificateEffect extends CommonEffect<Certificate> {
  constructor(
    protected override actions$: Actions,
    private certificateSrv: CertificateService,
  ) {
    super(actions$, certificateActions, certificateSrv);
  }
}
