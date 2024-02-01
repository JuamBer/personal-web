import { faker } from '@faker-js/faker';
import { generateMockTranslations } from 'src/app/shared/models/translation.mock';
import { generateOneMockCertificateGroup } from '../../certificate-group/models/certificate-group.mock';
import { generateOneMockCertificateType } from '../../certificate-type/models/certificate-type.mock';
import { generateOneMockCompany } from '../../company/models/company.mock';
import { Certificate } from './certificate.model';

export const generateOneMockCertificate = (): Certificate => ({
  id: faker.string.uuid(),
  nameTranslations: generateMockTranslations(),
  descriptionTranslations: generateMockTranslations(),
  url: faker.internet.url(),
  image: faker.image.url(),
  github: faker.internet.url(),
  pdf: faker.internet.url(),
  date: faker.date.past(),
  web: faker.internet.url(),
  playStore: faker.internet.url(),
  microsoftStore: faker.internet.url(),
  company: generateOneMockCompany(),
  certificateGroup: generateOneMockCertificateGroup(),
  certificateType: generateOneMockCertificateType(),
  createdAt: faker.date.past(),
  updatedAt: new Date(),
});
