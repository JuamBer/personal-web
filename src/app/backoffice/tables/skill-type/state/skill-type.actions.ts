import { CommonAction } from 'src/app/shared/state/common/common.actions';
import { Naming, NumberMode } from 'src/app/shared/state/common/common.names';
import { SkillType } from '../models/skill-type.model';
import { skillTypeNames } from './skill-type.names';

export class SkillTypeActions extends CommonAction<SkillType> {
  private static instance: SkillTypeActions;

  private constructor() {
    super(skillTypeNames.name(Naming.KEBAB_CASE, NumberMode.PLURAL));
  }

  public static getInstance(): SkillTypeActions {
    if (!SkillTypeActions.instance) {
      SkillTypeActions.instance = new SkillTypeActions();
    }
    return SkillTypeActions.instance;
  }
}
export const skillTypeActions: SkillTypeActions = SkillTypeActions.getInstance();
