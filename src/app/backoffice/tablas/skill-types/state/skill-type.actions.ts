import { CommonAction } from '@app/shared/state/common/common.actions';
import { SkillType } from '../models/skill-type.model';
import { skillTypeNames } from './skill-type.names';

export class SkillTypeActions extends CommonAction<SkillType> {
  private static instance: SkillTypeActions;

  private constructor() {
    super(skillTypeNames.upperCamelCase.singular);
  }

  public static getInstance(): SkillTypeActions {
    if (!SkillTypeActions.instance) {
      SkillTypeActions.instance = new SkillTypeActions();
    }
    return SkillTypeActions.instance;
  }
}
export const skillTypeActions: SkillTypeActions =
  SkillTypeActions.getInstance();
