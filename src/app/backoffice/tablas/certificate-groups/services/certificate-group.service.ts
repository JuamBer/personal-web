import { Injectable } from '@angular/core';
import {
  Filter,
  FilterType,
  RequestSpecification,
} from '@app/shared/components/generic-table/models/generic-table.models';
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
    super(createClient(environment.apiUrl, environment.apiKey), certificateGroupNames.snakeCase.plural.normal);
  }

  override async getAll(requestSpecification: RequestSpecification<CertificateGroup>) {
    console.log(requestSpecification);

    let request = this.supabase.from(this.table).select('*, "certificates": "certificates" ( * )');

    if (requestSpecification.lazyLoadEvent.sortField && requestSpecification.lazyLoadEvent.sortOrder) {
      request = request.order(requestSpecification.lazyLoadEvent.sortField, {
        ascending: requestSpecification.lazyLoadEvent.sortOrder === 1,
      });
    }
    if (requestSpecification.lazyLoadEvent.filters) {
      Object.entries(requestSpecification.lazyLoadEvent.filters).forEach(([key, filterMetadata]) => {
        const field = key;
        const value = (filterMetadata.value as Filter).value;
        if (value) {
          switch ((filterMetadata.value as Filter).filterType) {
            case FilterType.START_WITH:
              request = request.ilike(field, `${value}%`);
              break;
            case FilterType.ENDS_WITH:
              request = request.ilike(field, `%${value}`);
              break;
            case FilterType.EQUAL:
              request = request.eq(field, value);
              break;
            case FilterType.NOT_EQUAL:
              request = request.not(field, 'eq', value);
              break;
            case FilterType.CONTAINS:
              request = request.ilike(field, `%${value}%`);
              break;
            case FilterType.NOT_CONTAINS:
              request = request.not(field, 'like', `%${value}%`);
              break;
            default:
              request = request.ilike(field, `%${value}%`);
              break;
          }
        }
      });
    }

    const { data, error } = await request;
    return error ? error : snakeCaseToCamelCase(data);
  }
}
