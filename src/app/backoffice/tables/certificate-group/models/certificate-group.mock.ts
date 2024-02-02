/* eslint-disable @typescript-eslint/no-unused-vars */
import { faker } from '@faker-js/faker';
import { mockTranslations } from 'src/app/shared/models/translation.mock';
import { CertificateGroup } from './certificate-group.model';

export const mockCertificateGroup = (): CertificateGroup => ({
  id: faker.string.uuid(),
  nameTranslations: mockTranslations(),
  descriptionTranslations: mockTranslations(),
  createdAt: faker.date.past(),
  updatedAt: new Date(),
  getDisplayName: (acronym: string) => '',
});
