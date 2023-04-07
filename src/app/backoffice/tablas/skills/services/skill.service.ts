import { Injectable } from '@angular/core';
import { RequestFilter } from '@app/shared/models/request-filter';
import { CommonService } from '@app/shared/services/common.service';
import { snakeCaseToCamelCase } from '@app/shared/utils/SupabaseUtils';
import { environment } from '@env/environment';
import { createClient } from '@supabase/supabase-js';
import { Skill } from '../models/skill.model';
import { skillNames } from '../state/skill.names';
@Injectable({
  providedIn: 'root',
})
export class SkillService extends CommonService<Skill> {
  constructor() {
    super(
      createClient(environment.apiUrl, environment.apiKey),
      skillNames.snakeCase.plural.normal,
    );
  }

  override async getAll(requestFilter: RequestFilter) {
    let { data, error } = await this.supabase
      .from(this.table)
      .select('*, skillType: "skill_types" ( * )');
    return error ? error : snakeCaseToCamelCase(data);
  }

  override async getOne(id: number): Promise<Skill> {
    let { data, error } = await this.supabase
      .from(this.table)
      .select('*, skillType: "skill_types" ( * )')
      .match({ id })
      .single();

    return error ? error : snakeCaseToCamelCase(data);
  }
}
