import { Injectable } from '@angular/core';
import { CommonService } from '@app/shared/services/common.service';
import { environment } from '@env/environment';
import { createClient } from '@supabase/supabase-js';
import { CertificateType } from '../models/certificate-type.model';
import { certificateTypeNames } from '../state/certificate-type.names';
@Injectable({
  providedIn: 'root',
})
export class CertificateTypeService extends CommonService<CertificateType> {
  constructor() {
    super(
      createClient(environment.apiUrl, environment.apiKey),
      certificateTypeNames.snakeCase.plural.normal,
    );
  }
}
