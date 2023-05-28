import { defaultCommonState } from '@app/shared/state/common/common-state';
import { CommonReducer } from '@app/shared/state/common/common.reducer';
import { ReducerTypes } from '@ngrx/store';
import { Skill } from '../models/skill.model';
import { skillActions } from './skill.actions';
import { skillNames } from './skill.names';
import { SkillState } from './skill.state';

const initialState: SkillState = {
  ...(defaultCommonState as SkillState),
};

const otherReducers: ReducerTypes<any, any>[] = [];

class SkillReducer extends CommonReducer<Skill, SkillState> {
  private static instance: SkillReducer;

  private constructor() {
    super(skillNames.kebabCase.plural.normal, skillActions, initialState, otherReducers);
  }

  public static getInstance(): SkillReducer {
    if (!SkillReducer.instance) {
      SkillReducer.instance = new SkillReducer();
    }
    return SkillReducer.instance;
  }
}
export const skillReducer: SkillReducer = SkillReducer.getInstance();
