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
        result = CommonNames.toCamelCase(result);
        break;
      case Naming.KEBAB_CASE:
        result = result;
        break;
      case Naming.PASCAL_CASE:
        result = CommonNames.toPascalCase(result);
        break;
      case Naming.SNAKE_CASE:
        result = CommonNames.toSnakeCase(result);
        break;
    }

    return result;
  }

  static toPascalCase(str: string): string {
    let arr = str.split('-');
    let last = arr[arr.length - 1];
    str = str.replace(/-\w/g, (x) => `${x[1].toUpperCase()}`);
    str = str[0].toUpperCase() + str.substring(1, str.length - last.length) + last.toUpperCase();
    return str;
  }
  static toCamelCase(str: string): string {
    return str.replace(/-\w/g, (x) => `${x[1].toUpperCase()}`);
  }
  static toSnakeCase(str: string): string {
    return str.replace('-', '_');
  }
}
