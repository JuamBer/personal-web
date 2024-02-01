import { faker } from '@faker-js/faker';
import { generateOneMockSkillType } from '../../skill-type/models/skill-type.mock';
import { Skill } from './skill.model';

export const generateOneMockSkill = (): Skill => ({
  id: faker.string.uuid(),
  name: faker.company.name(),
  percentage: faker.number.int({ min: 0, max: 100 }),
  skillType: generateOneMockSkillType(),
  createdAt: faker.date.past(),
  updatedAt: new Date(),
});
