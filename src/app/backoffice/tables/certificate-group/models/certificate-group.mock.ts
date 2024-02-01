import { faker } from '@faker-js/faker';
import { generateMockTranslations } from 'src/app/shared/models/translation.mock';
import { CertificateGroup } from './certificate-group.model';

export const generateOneMockCertificateGroup = (): CertificateGroup => ({
  id: faker.string.uuid(),
  nameTranslations: generateMockTranslations(),
  descriptionTranslations: generateMockTranslations(),
  createdAt: faker.date.past(),
  updatedAt: new Date(),
});
