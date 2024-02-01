import { faker } from '@faker-js/faker';
import { mockTranslations } from 'src/app/shared/models/translation.mock';
import { CertificateType } from './certificate-type.model';

export const mockCertificateType = (): CertificateType => ({
  id: faker.string.uuid(),
  nameTranslations: mockTranslations(),
  descriptionTranslations: mockTranslations(),
  createdAt: faker.date.past(),
  updatedAt: new Date(),
});
