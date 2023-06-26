import { Injectable } from '@angular/core';
import { supabaseClient } from 'src/app/shared/services/auth.service';
import { CommonService } from 'src/app/shared/services/common.service';
import { Naming, NumberMode } from 'src/app/shared/state/common/common.names';
import { Certificate } from '../models/certificate.model';
import { certificateNames } from '../state/certificate.names';
@Injectable({
  providedIn: 'root',
})
export class CertificateService extends CommonService<Certificate> {
  constructor() {
    super(
      supabaseClient,
      certificateNames.name(Naming.SNAKE_CASE, NumberMode.PLURAL),
      '*, "certificateType": "certificate_types" ( * ), "certificateGroup": "certificate_groups" ( * ), "company": "companies" ( * )',
      '*, "certificateType": "certificate_types" ( * ), "certificateGroup": "certificate_groups" ( * ), "company": "companies" ( * )',
    );
  }
}
