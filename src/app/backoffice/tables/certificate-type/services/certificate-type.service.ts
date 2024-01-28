import { Injectable } from '@angular/core';
import { CommonService } from 'src/app/shared/services/common.service';

import { supabaseClient } from 'src/app/shared/services/auth.service';
import { Naming, NumberMode } from 'src/app/shared/state/common/common.names';
import { CertificateType } from '../models/certificate-type.model';
import { certificateTypeNames } from '../state/certificate-type.names';
@Injectable({
  providedIn: 'root',
})
export class CertificateTypeService extends CommonService<CertificateType> {
  constructor() {
    super(
      CertificateType,
      supabaseClient,
      certificateTypeNames.name(Naming.SNAKE_CASE, NumberMode.PLURAL),
      'id, name_translations, description_translations',
      '*, "certificates": "certificates" ( * )',
      'name_translations',
    );
  }
}
