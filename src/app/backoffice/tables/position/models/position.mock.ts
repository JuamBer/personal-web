/* eslint-disable @typescript-eslint/no-unused-vars */
import { faker } from '@faker-js/faker';
import { mockTranslations } from 'src/app/shared/models/translation.mock';
import { mockCompany } from '../../company/models/company.mock';
import { Language } from '../../language/models/language.model';
import { Position } from './position.model';

export const mockPosition = (): Position => ({
  id: faker.string.uuid(),
  nameTranslations: mockTranslations(),
  descriptionTranslations: mockTranslations(),
  dateFrom: faker.date.past(),
  dateTo: faker.date.past(),
  hourlyWage: faker.number.int({ min: 1, max: 100 }),
  importance: faker.number.int({ min: 1, max: 5 }),
  company: mockCompany(),
  createdAt: faker.date.past(),
  updatedAt: new Date(),
  getDisplayName: (language: Language) => '',
});
