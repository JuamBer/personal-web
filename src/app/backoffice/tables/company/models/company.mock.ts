import { faker } from '@faker-js/faker';
import { Translation } from 'src/app/shared/models/translation.model';
import { CompanyType } from './company-type.model';
import { Company } from './company.model';

export const generateMockTranslations = (): Translation[] => {
  const acronyms = ['de', 'en', 'es', 'fr', 'it', 'nl', 'no', 'pt'];
  const translations: Translation[] = [];

  acronyms.forEach((acronym) => {
    translations.push({
      language: acronym,
      value: faker.lorem.sentence(),
    });
  });

  return [...translations];
};

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

export const generateManyMockCompanies = (size: number = 10): Company[] => {
  const companies: Company[] = [];

  for (let index = 0; index < size; index++) {
    companies.push(generateOneMockCompany());
  }

  return [...companies];
};
