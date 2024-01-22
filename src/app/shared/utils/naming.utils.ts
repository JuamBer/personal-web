export class NamingUtils {
  static kebabCaseToPascalCase(str: string): string {
    const arr = str.split('-');
    const last = arr[arr.length - 1];
    str = str.replace(/-\w/g, (x) => `${x[1].toUpperCase()}`);
    str = str[0].toUpperCase() + str.substring(1, str.length - last.length) + last.toUpperCase();
    return str;
  }
  static kebabCaseToCamelCase(str: string): string {
    return str.replace(/-\w/g, (x) => `${x[1].toUpperCase()}`);
  }
  static kebabCaseToSnakeCase(str: string): string {
    return str.replace('-', '_');
  }
}
