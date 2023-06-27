export class ObjectUtils {
  public static areObjectEquals<T>(obj1: T, obj2: T): boolean {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
  }

  public static removeNullAndUndefinedAttributes(obj: any) {
    if (typeof obj === 'object') {
      Object.entries(obj).forEach(([k, v]) => {
        if (v === null || v === undefined) {
          delete obj[k];
        } else if (typeof v === 'object') {
          ObjectUtils.removeNullAndUndefinedAttributes(v);
        }
      });
    }
  }
}
