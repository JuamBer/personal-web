import { Injectable } from '@angular/core';
import { CommonService } from 'src/app/shared/services/common.service';

import { supabaseClient } from 'src/app/shared/services/auth.service';
import { Naming, NumberMode } from 'src/app/shared/state/common/common.names';
import { Skill } from '../models/skill.model';
import { skillNames } from '../state/skill.names';
@Injectable({
  providedIn: 'root',
})
export class SkillService extends CommonService<Skill> {
  constructor() {
    super(
      supabaseClient,
      skillNames.name(Naming.SNAKE_CASE, NumberMode.PLURAL),
      '*, skill_type: "skill_types" ( * )',
      '*, skill_type: "skill_types" ( * )',
    );
  }
}
