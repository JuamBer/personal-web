import { faker } from '@faker-js/faker';
import { mockTranslations } from 'src/app/shared/models/translation.mock';
import { mockCertificateGroup } from '../../certificate-group/models/certificate-group.mock';
import { mockCertificateType } from '../../certificate-type/models/certificate-type.mock';
import { mockCompany } from '../../company/models/company.mock';
import { Certificate } from './certificate.model';

export const mockCertificate = (): Certificate => ({
  id: faker.string.uuid(),
  nameTranslations: mockTranslations(),
  descriptionTranslations: mockTranslations(),
  url: faker.internet.url(),
  image: faker.image.url(),
  github: faker.internet.url(),
  pdf: faker.internet.url(),
  date: faker.date.past(),
  web: faker.internet.url(),
  playStore: faker.internet.url(),
  microsoftStore: faker.internet.url(),
  company: mockCompany(),
  certificateGroup: mockCertificateGroup(),
  certificateType: mockCertificateType(),
  createdAt: faker.date.past(),
  updatedAt: new Date(),
});
