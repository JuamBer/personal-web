import { Injectable } from '@angular/core';
import { supabaseClient } from '@app/shared/services/auth.service';
import { CommonService } from '@app/shared/services/common.service';
import { Naming, NumberMode } from '@app/shared/state/common/common.names';
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
      '*, skillType: "skill_types" ( * )',
      '*, skillType: "skill_types" ( * )',
    );
  }
}
