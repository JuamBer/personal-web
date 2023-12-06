import { ReducerTypes } from '@ngrx/store';
import { Naming, NumberMode } from 'src/app/shared/state/common/common.names';
import { CommonReducer } from 'src/app/shared/state/common/common.reducer';
import { SkillType } from '../models/skill-type.model';
import { skillTypeActions } from './skill-type.actions';
import { skillTypeNames } from './skill-type.names';
import { SkillTypeState } from './skill-type.state';

const initialState = new SkillTypeState();
const otherReducers: ReducerTypes<SkillTypeState, any>[] = [];

class SkillTypeReducer extends CommonReducer<SkillType, SkillTypeState> {
  private static instance: SkillTypeReducer;

  private constructor() {
    super(skillTypeNames.name(Naming.KEBAB_CASE, NumberMode.PLURAL), skillTypeActions, initialState, otherReducers);
  }

  public static getInstance(): SkillTypeReducer {
    if (!SkillTypeReducer.instance) {
      SkillTypeReducer.instance = new SkillTypeReducer();
    }
    return SkillTypeReducer.instance;
  }
}
export const skillTypeReducer: SkillTypeReducer = SkillTypeReducer.getInstance();
