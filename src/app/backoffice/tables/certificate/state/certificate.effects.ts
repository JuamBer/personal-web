import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { CommonEffect } from 'src/app/shared/state/common/common.effects';
import { Certificate } from '../models/certificate.model';
import { CertificateService } from '../services/certificate.service';
import { certificateActions } from './certificate.actions';

@Injectable()
export class CertificateEffect extends CommonEffect<Certificate> {
  constructor(protected override actions$: Actions, private certificateSrv: CertificateService) {
    super(actions$, certificateActions, certificateSrv);
  }
}
