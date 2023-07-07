import { Injectable } from '@angular/core';
import { supabaseClient } from 'src/app/shared/services/auth.service';
import { CommonService } from 'src/app/shared/services/common.service';
import { Naming, NumberMode } from 'src/app/shared/state/common/common.names';
import { SkillType } from '../models/skill-type.model';
import { skillTypeNames } from '../state/skill-type.names';

@Injectable({
  providedIn: 'root',
})
export class SkillTypeService extends CommonService<SkillType> {
  constructor() {
    super(
      supabaseClient,
      skillTypeNames.name(Naming.SNAKE_CASE, NumberMode.PLURAL),
      'id, name_translations, description_translations',
      '*, "skills": "skills" ( * )',
      'name_translations',
    );
  }
}
