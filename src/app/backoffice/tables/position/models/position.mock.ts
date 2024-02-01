import { faker } from '@faker-js/faker';
import { generateMockTranslations } from 'src/app/shared/models/translation.mock';
import { generateOneMockCompany } from '../../company/models/company.mock';
import { Position } from './position.model';

export const generateOneMockPosition = (): Position => ({
  id: faker.string.uuid(),
  nameTranslations: generateMockTranslations(),
  descriptionTranslations: generateMockTranslations(),
  dateFrom: faker.date.past(),
  dateTo: faker.date.past(),
  hourlyWage: faker.number.int({ min: 1, max: 100 }),
  importance: faker.number.int({ min: 1, max: 5 }),
  company: generateOneMockCompany(),
  createdAt: faker.date.past(),
  updatedAt: new Date(),
});
