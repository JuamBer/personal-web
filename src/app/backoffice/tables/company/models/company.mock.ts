import { faker } from '@faker-js/faker';
import { generateMockTranslations } from 'src/app/shared/models/translation.mock';
import { CompanyType } from './company-type.model';
import { Company } from './company.model';

export const generateOneMockCompany = (): Company => ({
  id: faker.string.uuid(),
  location: faker.location.streetAddress(),
  name: faker.company.name(),
  descriptionTranslations: generateMockTranslations(),
  type: faker.helpers.enumValue(CompanyType),
  url: faker.internet.url(),
  createdAt: faker.date.past(),
  updatedAt: new Date(),
});
