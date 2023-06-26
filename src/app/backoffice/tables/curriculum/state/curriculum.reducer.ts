import { ReducerTypes } from '@ngrx/store';
import { defaultCommonState } from 'src/app/shared/state/common/common-state';
import { Naming, NumberMode } from 'src/app/shared/state/common/common.names';
import { CommonReducer } from 'src/app/shared/state/common/common.reducer';
import { Curriculum } from '../models/curriculum.model';
import { curriculumActions } from './curriculum.actions';
import { curriculumNames } from './curriculum.names';
import { CurriculumState } from './curriculum.state';

const initialState: CurriculumState = {
  ...(defaultCommonState as CurriculumState),
};

const otherReducers: ReducerTypes<any, any>[] = [];

class CurriculumReducer extends CommonReducer<Curriculum, CurriculumState> {
  private static instance: CurriculumReducer;

  private constructor() {
    super(curriculumNames.name(Naming.KEBAB_CASE, NumberMode.PLURAL), curriculumActions, initialState, otherReducers);
  }

  public static getInstance(): CurriculumReducer {
    if (!CurriculumReducer.instance) {
      CurriculumReducer.instance = new CurriculumReducer();
    }
    return CurriculumReducer.instance;
  }
}
export const curriculumReducer: CurriculumReducer = CurriculumReducer.getInstance();
