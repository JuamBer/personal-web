import { CommonNames } from '@app/shared/state/common/common.names';

export const certificateTypeNames: CommonNames = {
  camelCase: {
    singular: 'certificateType',
    plural: 'certificateTypes',
  },
  upperCamelCase: {
    singular: 'CertificateType',
    plural: 'CertificateTypes',
  },
  snakeCase: {
    singular: {
      normal: 'certificate_type',
      screaming: 'CERTIFICATE_TYPE',
    },
    plural: {
      normal: 'certificate_types',
      screaming: 'CERTIFICATE_TYPES',
    },
  },
  kebabCase: {
    singular: {
      normal: 'certificate-type',
      screaming: 'CERTIFICATE-TYPE',
    },
    plural: {
      normal: 'certificate-types',
      screaming: 'CERTIFICATE-TYPES',
    },
  },
};
