import { CommonAction } from '@app/shared/state/common/common.actions';
import { Naming, NumberMode } from '@app/shared/state/common/common.names';
import { Curriculum } from '../models/curriculum.model';
import { curriculumNames } from './curriculum.names';

export class CurriculumActions extends CommonAction<Curriculum> {
  private static instance: CurriculumActions;

  private constructor() {
    super(curriculumNames.name(Naming.KEBAB_CASE, NumberMode.PLURAL));
  }

  public static getInstance(): CurriculumActions {
    if (!CurriculumActions.instance) {
      CurriculumActions.instance = new CurriculumActions();
    }
    return CurriculumActions.instance;
  }
}
export const curriculumActions: CurriculumActions = CurriculumActions.getInstance();
