import { Injectable } from '@angular/core';
import { CommonEffect } from '@app/shared/state/common/common.effects';
import { Actions } from '@ngrx/effects';
import { Skill } from '../models/skill.model';
import { SkillService } from '../services/skill.service';
import { skillActions } from './skill.actions';

@Injectable()
export class SkillEffect extends CommonEffect<Skill> {
  constructor(
    protected override actions$: Actions,
    private skillSrv: SkillService,
  ) {
    super(actions$, skillActions, skillSrv);
  }
}
