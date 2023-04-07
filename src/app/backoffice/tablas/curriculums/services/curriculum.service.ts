import { Injectable } from '@angular/core';
import { RequestFilter } from '@app/shared/models/request-filter';
import { CommonService } from '@app/shared/services/common.service';
import { snakeCaseToCamelCase } from '@app/shared/utils/SupabaseUtils';
import { environment } from '@env/environment';
import { createClient } from '@supabase/supabase-js';
import { Curriculum } from '../models/curriculum.model';
import { curriculumNames } from '../state/curriculum.names';
@Injectable({
  providedIn: 'root',
})
export class CurriculumService extends CommonService<Curriculum> {
  constructor() {
    super(
      createClient(environment.apiUrl, environment.apiKey),
      curriculumNames.snakeCase.plural.normal,
    );
  }

  override async getAll(requestFilter: RequestFilter) {
    let { data, error } = await this.supabase
      .from(this.table)
      .select('*, "language": "languages" ( * )');
    return error ? error : snakeCaseToCamelCase(data);
  }

  override async getOne(id: number): Promise<Curriculum> {
    let { data, error } = await this.supabase
      .from(this.table)
      .select('*, "language": "languages" ( * )')
      .match({ id })
      .single();

    return error ? error : snakeCaseToCamelCase(data);
  }
}
