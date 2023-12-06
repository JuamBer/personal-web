import { CommonState } from 'src/app/shared/state/common/common-state';
import { Skill } from '../models/skill.model';

export class SkillState extends CommonState<Skill> {
  constructor() {
    super();
  }
}
