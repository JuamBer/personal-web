import { Injectable } from '@angular/core';
import { CommonService } from '@app/shared/services/common.service';
import { environment } from '@env/environment';
import { createClient } from '@supabase/supabase-js';
import { SkillType } from '../models/skill-type.model';
import { skillTypeNames } from '../state/skill-type.names';
@Injectable({
  providedIn: 'root',
})
export class SkillTypeService extends CommonService<SkillType> {
  constructor() {
    super(
      createClient(environment.apiUrl, environment.apiKey),
      skillTypeNames.snakeCase.plural.normal,
    );
  }
}
