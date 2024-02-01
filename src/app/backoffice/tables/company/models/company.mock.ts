import { faker } from '@faker-js/faker';
import { mockTranslations } from 'src/app/shared/models/translation.mock';
import { CompanyType } from './company-type.model';
import { Company } from './company.model';

export const mockCompany = (): Company => ({
  id: faker.string.uuid(),
  location: faker.location.streetAddress(),
  name: faker.company.name(),
  descriptionTranslations: mockTranslations(),
  type: faker.helpers.enumValue(CompanyType),
  url: faker.internet.url(),
  createdAt: faker.date.past(),
  updatedAt: new Date(),
});
