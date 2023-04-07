import { CommonNames } from '@app/shared/state/common/common.names';

export const certificateGroupNames: CommonNames = {
  camelCase: {
    singular: 'certificateGroup',
    plural: 'certificateGroups',
  },
  upperCamelCase: {
    singular: 'CertificateGroup',
    plural: 'CertificateGroups',
  },
  snakeCase: {
    singular: {
      normal: 'certificate_group',
      screaming: 'CERTIFICATE_GROUP',
    },
    plural: {
      normal: 'certificate_groups',
      screaming: 'CERTIFICATE_GROUPS',
    },
  },
  kebabCase: {
    singular: {
      normal: 'certificate-group',
      screaming: 'CERTIFICATE-GROUP',
    },
    plural: {
      normal: 'certificate-groups',
      screaming: 'CERTIFICATE-GROUPS',
    },
  },
};
