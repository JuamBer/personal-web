import { faker } from '@faker-js/faker';
import { Language } from './language.model';

export const mockLanguage = (): Language => ({
  id: faker.string.uuid(),
  nativeName: faker.lorem.word(),
  name: faker.lorem.word(),
  acronym: faker.lorem.word({ length: 2 }),
  active: faker.datatype.boolean(),
  createdAt: faker.date.past(),
  updatedAt: new Date(),
});
