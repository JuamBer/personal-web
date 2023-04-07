import { CommonAction } from '@app/shared/state/common/common.actions';
import { Skill } from '../models/skill.model';
import { skillNames } from './skill.names';

export class SkillActions extends CommonAction<Skill> {
  private static instance: SkillActions;

  private constructor() {
    super(skillNames.upperCamelCase.singular);
  }

  public static getInstance(): SkillActions {
    if (!SkillActions.instance) {
      SkillActions.instance = new SkillActions();
    }
    return SkillActions.instance;
  }
}
export const skillActions: SkillActions = SkillActions.getInstance();
