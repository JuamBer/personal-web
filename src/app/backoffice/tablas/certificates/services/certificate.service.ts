import { Injectable } from '@angular/core';
import { CommonService } from '@app/shared/services/common.service';
import { Naming, NumberMode } from '@app/shared/state/common/common.names';
import { environment } from '@env/environment';
import { createClient } from '@supabase/supabase-js';
import { Certificate } from '../models/certificate.model';
import { certificateNames } from '../state/certificate.names';
@Injectable({
  providedIn: 'root',
})
export class CertificateService extends CommonService<Certificate> {
  constructor() {
    super(
      createClient(environment.apiUrl, environment.apiKey),
      certificateNames.name(Naming.SNAKE_CASE, NumberMode.PLURAL),
      '*, "certificateType": "certificate_types" ( * ), "certificateGroup": "certificate_groups" ( * ), "company": "companies" ( * )',
      '*, "certificateType": "certificate_types" ( * ), "certificateGroup": "certificate_groups" ( * ), "company": "companies" ( * )',
    );
  }
}
