import { CommonAction } from '@app/shared/state/common/common.actions';
import { Curriculum } from '../models/curriculum.model';
import { curriculumNames } from './curriculum.names';

export class CurriculumActions extends CommonAction<Curriculum> {
  private static instance: CurriculumActions;

  private constructor() {
    super(curriculumNames.upperCamelCase.singular);
  }

  public static getInstance(): CurriculumActions {
    if (!CurriculumActions.instance) {
      CurriculumActions.instance = new CurriculumActions();
    }
    return CurriculumActions.instance;
  }
}
export const curriculumActions: CurriculumActions =
  CurriculumActions.getInstance();
