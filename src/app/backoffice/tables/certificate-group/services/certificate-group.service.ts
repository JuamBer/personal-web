import { Injectable } from '@angular/core';
import { CommonService } from 'src/app/shared/services/common.service';

import { environment } from '@env/environment';
import { createClient } from '@supabase/supabase-js';
import { Naming, NumberMode } from 'src/app/shared/state/common/common.names';
import { CertificateGroup } from '../models/certificate-group.model';
import { certificateGroupNames } from '../state/certificate-group.names';
@Injectable({
  providedIn: 'root',
})
export class CertificateGroupService extends CommonService<CertificateGroup> {
  constructor() {
    super(
      createClient(environment.apiUrl, environment.apiKey),
      certificateGroupNames.name(Naming.SNAKE_CASE, NumberMode.PLURAL),
      'id, name, description',
      '*, "certificates": "certificates" ( * )',
    );
  }
}
