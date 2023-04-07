import { Injectable } from '@angular/core';
import { RequestFilter } from '@app/shared/models/request-filter';
import { CommonService } from '@app/shared/services/common.service';
import { snakeCaseToCamelCase } from '@app/shared/utils/SupabaseUtils';
import { environment } from '@env/environment';
import { createClient } from '@supabase/supabase-js';
import { CertificateGroup } from '../models/certificate-group.model';
import { certificateGroupNames } from '../state/certificate-group.names';
@Injectable({
  providedIn: 'root',
})
export class CertificateGroupService extends CommonService<CertificateGroup> {
  constructor() {
    super(
      createClient(environment.apiUrl, environment.apiKey),
      certificateGroupNames.snakeCase.plural.normal,
    );
  }

  override async getAll(requestFilter: RequestFilter) {
    let { data, error } = await this.supabase
      .from(this.table)
      .select('*, "certificates": "certificates" ( * )');
    return error ? error : snakeCaseToCamelCase(data);
  }
}
