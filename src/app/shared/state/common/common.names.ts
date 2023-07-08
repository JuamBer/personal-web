import { NamingUtils } from '../../utils/naming.utils';

export enum NumberMode {
  SINGULAR = 'SINGULAR',
  PLURAL = 'PLURAL',
}
export enum Naming {
  CAMEL_CASE = 'CAMEL_CASE',
  SNAKE_CASE = 'SNAKE_CASE',
  KEBAB_CASE = 'KEBAB_CASE',
  PASCAL_CASE = 'PASCAL_CASE',
}
export class CommonNames {
  constructor(private singularKebabCase: string, private pluralKebabCase: string) {}

  name(naming: Naming, number: NumberMode): string {
    let result = '';

    switch (number) {
      case NumberMode.SINGULAR:
        result = this.singularKebabCase;
        break;
      case NumberMode.PLURAL:
        result = this.pluralKebabCase;
        break;
    }

    switch (naming) {
      case Naming.CAMEL_CASE:
        result = NamingUtils.kebabCaseToCamelCase(result);
        break;
      case Naming.KEBAB_CASE:
        result = result;
        break;
      case Naming.PASCAL_CASE:
        result = NamingUtils.kebabCaseToPascalCase(result);
        break;
      case Naming.SNAKE_CASE:
        result = NamingUtils.kebabCaseToSnakeCase(result);
        break;
    }

    return result;
  }
}
