/* eslint-disable @typescript-eslint/no-unused-vars */
import { faker } from '@faker-js/faker';
import { mockTranslations } from 'src/app/shared/models/translation.mock';
import { SkillType } from './skill-type.model';

export const mockSkillType = (): SkillType => ({
  id: faker.string.uuid(),
  nameTranslations: mockTranslations(),
  descriptionTranslations: mockTranslations(),
  createdAt: faker.date.past(),
  updatedAt: new Date(),
  getDisplayName: (acronym: string) => '',
});
