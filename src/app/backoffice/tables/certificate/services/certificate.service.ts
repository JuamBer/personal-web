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
      Certificate,
      supabaseClient,
      certificateNames.name(Naming.SNAKE_CASE, NumberMode.PLURAL),
      '*, "certificate_type": "certificate_types" ( * ), "certificate_group": "certificate_groups" ( * ), "company": "companies" ( * )',
      '*, "certificate_type": "certificate_types" ( * ), "certificate_group": "certificate_groups" ( * ), "company": "companies" ( * )',
      'name_translations',
    );
  }
}
