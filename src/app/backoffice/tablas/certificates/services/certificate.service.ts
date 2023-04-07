import { Injectable } from '@angular/core';
import { RequestFilter } from '@app/shared/models/request-filter';
import { CommonService } from '@app/shared/services/common.service';
import { snakeCaseToCamelCase } from '@app/shared/utils/SupabaseUtils';
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
      certificateNames.snakeCase.plural.normal,
    );
  }

  override async getAll(requestFilter: RequestFilter) {
    let { data, error } = await this.supabase
      .from(this.table)
      .select(
        '*, "certificateType": "certificate_types" ( * ), "certificateGroup": "certificate_groups" ( * ), "company": "companies" ( * )',
      );
    return error ? error : snakeCaseToCamelCase(data);
  }

  override async getOne(id: number): Promise<Certificate> {
    let { data, error } = await this.supabase
      .from(this.table)
      .select(
        '*, "certificateType": "certificate_types" ( * ), "certificateGroup": "certificate_groups" ( * ), "company": "companies" ( * )',
      )
      .match({ id })
      .single();

    return error ? error : snakeCaseToCamelCase(data);
  }
}
