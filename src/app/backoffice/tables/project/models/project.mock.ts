/* eslint-disable @typescript-eslint/no-unused-vars */
import { faker } from '@faker-js/faker';
import { mockTranslations } from 'src/app/shared/models/translation.mock';
import { Project } from './project.model';

export const mockProject = (): Project => ({
  id: faker.string.uuid(),
  name: faker.company.name(),
  logo: faker.image.url(),
  descriptionTranslations: mockTranslations(),
  date: faker.date.past(),
  company: undefined,
  technologies: [],
  urls: {
    web: faker.internet.url(),
    playStore: faker.internet.url(),
    appStore: faker.internet.url(),
    microsoftStore: faker.internet.url(),
    github: faker.internet.url(),
  },
  createdAt: faker.date.past(),
  updatedAt: faker.date.past(),
  getDisplayName: (acronym: string) => '',
});
