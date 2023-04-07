import { CommonReducer } from '@app/shared/state/common/common.reducer';
import { ReducerTypes } from '@ngrx/store';
import { Curriculum } from '../models/curriculum.model';
import { curriculumActions } from './curriculum.actions';
import { curriculumNames } from './curriculum.names';
import { CurriculumState } from './curriculum.state';

const initialState: CurriculumState = {
  entities: [],
  selectedId: null,
  count: 0,
  loading: false,
  message: null,
};

const otherReducers: ReducerTypes<any, any>[] = [];

class CurriculumReducer extends CommonReducer<Curriculum, CurriculumState> {
  private static instance: CurriculumReducer;

  private constructor() {
    super(
      curriculumNames.kebabCase.plural.normal,
      curriculumActions,
      initialState,
      otherReducers,
    );
  }

  public static getInstance(): CurriculumReducer {
    if (!CurriculumReducer.instance) {
      CurriculumReducer.instance = new CurriculumReducer();
    }
    return CurriculumReducer.instance;
  }
}
export const curriculumReducer: CurriculumReducer =
  CurriculumReducer.getInstance();
