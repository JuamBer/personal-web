import { faker } from '@faker-js/faker';
import { generateMockTranslations } from 'src/app/shared/models/translation.mock';
import { CertificateType } from './certificate-type.model';

export const generateOneMockCertificateType = (): CertificateType => ({
  id: faker.string.uuid(),
  nameTranslations: generateMockTranslations(),
  descriptionTranslations: generateMockTranslations(),
  createdAt: faker.date.past(),
  updatedAt: new Date(),
});
