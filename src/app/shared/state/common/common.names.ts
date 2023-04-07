interface CaseType {
  singular: string;
  plural: string;
}
interface ScreamingCaseType {
  singular: {
    normal: string;
    screaming: string;
  };
  plural: {
    normal: string;
    screaming: string;
  };
}
export interface CommonNames {
  camelCase: CaseType;
  upperCamelCase: CaseType;
  snakeCase: ScreamingCaseType;
  kebabCase: ScreamingCaseType;
}
