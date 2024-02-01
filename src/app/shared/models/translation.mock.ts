import { faker } from '@faker-js/faker';
import { Translation } from './translation.model';

export const mockTranslations = (): Translation[] => {
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
