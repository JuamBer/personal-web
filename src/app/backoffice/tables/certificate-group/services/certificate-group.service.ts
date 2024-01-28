import { Injectable } from '@angular/core';
import { CommonService } from 'src/app/shared/services/common.service';

import { supabaseClient } from 'src/app/shared/services/auth.service';
import { Naming, NumberMode } from 'src/app/shared/state/common/common.names';
import { CertificateGroup } from '../models/certificate-group.model';
import { certificateGroupNames } from '../state/certificate-group.names';
@Injectable({
  providedIn: 'root',
})
export class CertificateGroupService extends CommonService<CertificateGroup> {
  constructor() {
    super(
      CertificateGroup,
      supabaseClient,
      certificateGroupNames.name(Naming.SNAKE_CASE, NumberMode.PLURAL),
      'id, name_translations, description_translations, "certificates": "certificates" ( * )',
      '*, "certificates": "certificates" ( * )',
      'name_translations',
    );
  }
}
