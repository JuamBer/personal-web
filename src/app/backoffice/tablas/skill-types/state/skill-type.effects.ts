import { Injectable } from '@angular/core';
import { CommonEffect } from '@app/shared/state/common/common.effects';
import { Actions } from '@ngrx/effects';
import { SkillType } from '../models/skill-type.model';
import { SkillTypeService } from '../services/skill-type.service';
import { skillTypeActions } from './skill-type.actions';

@Injectable()
export class SkillTypeEffect extends CommonEffect<SkillType> {
  constructor(
    protected override actions$: Actions,
    private skillTypeSrv: SkillTypeService,
  ) {
    super(actions$, skillTypeActions, skillTypeSrv);
  }
}
