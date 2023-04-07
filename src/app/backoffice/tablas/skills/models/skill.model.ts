import { SkillType } from '../../skill-types/models/skill-type.model';

export interface Skill {
  id?: number;
  name: string;
  percentage: number;
  skillType: SkillType;
}
