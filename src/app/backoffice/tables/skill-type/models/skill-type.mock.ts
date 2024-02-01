import { faker } from '@faker-js/faker';
import { generateMockTranslations } from 'src/app/shared/models/translation.mock';
import { SkillType } from './skill-type.model';

export const generateOneMockSkillType = (): SkillType => ({
  id: faker.string.uuid(),
  nameTranslations: generateMockTranslations(),
  descriptionTranslations: generateMockTranslations(),
  createdAt: faker.date.past(),
  updatedAt: new Date(),
});
