import { ReducerTypes } from '@ngrx/store';
import { defaultCommonState } from 'src/app/shared/state/common/common-state';
import { Naming, NumberMode } from 'src/app/shared/state/common/common.names';
import { CommonReducer } from 'src/app/shared/state/common/common.reducer';
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
    super(skillNames.name(Naming.KEBAB_CASE, NumberMode.PLURAL), skillActions, initialState, otherReducers);
  }

  public static getInstance(): SkillReducer {
    if (!SkillReducer.instance) {
      SkillReducer.instance = new SkillReducer();
    }
    return SkillReducer.instance;
  }
}
export const skillReducer: SkillReducer = SkillReducer.getInstance();
