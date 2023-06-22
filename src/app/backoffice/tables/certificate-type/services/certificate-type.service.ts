import { Injectable } from '@angular/core';
import { supabaseClient } from '@app/shared/services/auth.service';
import { CommonService } from '@app/shared/services/common.service';
import { Naming, NumberMode } from '@app/shared/state/common/common.names';
import { CertificateType } from '../models/certificate-type.model';
import { certificateTypeNames } from '../state/certificate-type.names';
@Injectable({
  providedIn: 'root',
})
export class CertificateTypeService extends CommonService<CertificateType> {
  constructor() {
    super(
      supabaseClient,
      certificateTypeNames.name(Naming.SNAKE_CASE, NumberMode.PLURAL),
      'id, name, description',
      '*, "certificates": "certificates" ( * )',
    );
  }
}
