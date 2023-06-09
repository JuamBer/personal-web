import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { CommonEffect } from 'src/app/shared/state/common/common.effects';
import { CertificateType } from '../models/certificate-type.model';
import { CertificateTypeService } from '../services/certificate-type.service';
import { certificateTypeActions } from './certificate-type.actions';

@Injectable()
export class CertificateTypeEffect extends CommonEffect<CertificateType> {
  constructor(protected override actions$: Actions, private certificateTypeSrv: CertificateTypeService) {
    super(actions$, certificateTypeActions, certificateTypeSrv);
  }
}
