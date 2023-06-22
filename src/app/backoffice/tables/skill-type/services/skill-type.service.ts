import { Injectable } from '@angular/core';
import { supabaseClient } from '@app/shared/services/auth.service';
import { CommonService } from '@app/shared/services/common.service';
import { Naming, NumberMode } from '@app/shared/state/common/common.names';
import { SkillType } from '../models/skill-type.model';
import { skillTypeNames } from '../state/skill-type.names';

@Injectable({
  providedIn: 'root',
})
export class SkillTypeService extends CommonService<SkillType> {
  constructor() {
    super(supabaseClient, skillTypeNames.name(Naming.SNAKE_CASE, NumberMode.PLURAL));
  }
}
