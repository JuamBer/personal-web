import { CommonReducer } from '@app/shared/state/common/common.reducer';
import { ReducerTypes } from '@ngrx/store';
import { SkillType } from '../models/skill-type.model';
import { skillTypeActions } from './skill-type.actions';
import { skillTypeNames } from './skill-type.names';
import { SkillTypeState } from './skill-type.state';

const initialState: SkillTypeState = {
  entities: [],
  selectedId: null,
  count: 0,
  loading: false,
  message: null,
};

const otherReducers: ReducerTypes<any, any>[] = [];

class SkillTypeReducer extends CommonReducer<SkillType, SkillTypeState> {
  private static instance: SkillTypeReducer;

  private constructor() {
    super(
      skillTypeNames.kebabCase.plural.normal,
      skillTypeActions,
      initialState,
      otherReducers,
    );
  }

  public static getInstance(): SkillTypeReducer {
    if (!SkillTypeReducer.instance) {
      SkillTypeReducer.instance = new SkillTypeReducer();
    }
    return SkillTypeReducer.instance;
  }
}
export const skillTypeReducer: SkillTypeReducer =
  SkillTypeReducer.getInstance();
