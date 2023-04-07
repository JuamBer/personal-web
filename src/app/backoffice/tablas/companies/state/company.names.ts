import { CommonNames } from '@app/shared/state/common/common.names';

export const companyNames: CommonNames = {
  camelCase: {
    singular: 'company',
    plural: 'companies',
  },
  upperCamelCase: {
    singular: 'Company',
    plural: 'Companies',
  },
  snakeCase: {
    singular: {
      normal: 'company',
      screaming: 'COMPANY',
    },
    plural: {
      normal: 'companies',
      screaming: 'COMPANIES',
    },
  },
  kebabCase: {
    singular: {
      normal: 'company',
      screaming: 'COMPANY',
    },
    plural: {
      normal: 'companies',
      screaming: 'COMPANIES',
    },
  },
};
