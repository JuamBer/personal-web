/* eslint-disable @typescript-eslint/no-explicit-any */

export const snakeCaseToCamelCase = (o: any): any => {
  if (isObject(o) && !(o instanceof Date)) {
    const n: any = {};

    Object.keys(o).forEach((k) => {
      n[toCamelCase(k)] = snakeCaseToCamelCase(o[k]);
    });

    return n;
  } else if (Array.isArray(o)) {
    return o.map((i: any) => {
      return snakeCaseToCamelCase(i);
    });
  }

  return o;
};

export const camelCaseToSnakeCase = (o: any): any => {
  if (isObject(o) && !(o instanceof Date)) {
    const n: any = {};

    Object.keys(o).forEach((k) => {
      n[toSnakeCase(k)] = camelCaseToSnakeCase(o[k]);
    });

    return n;
  } else if (Array.isArray(o)) {
    return o.map((i: any) => {
      return camelCaseToSnakeCase(i);
    });
  }

  return o;
};

export const flatObjectsById = (o: any) => {
  if (isObject(o) && !(o instanceof Date)) {
    const n: any = {};

    Object.keys(o).forEach((key) => {
      if (isObject(o[key]) && 'id' in o[key]) {
        n[key + '_id'] = o[key].id;
      } else {
        n[key] = o[key];
      }
    });

    return n;
  } else if (Array.isArray(o)) {
    return o.map((i) => {
      return snakeCaseToCamelCase(i);
    });
  }

  return o;
};

export const transformDates = (o: any) => {
  if (isObject(o)) {
    const n: any = {};

    Object.keys(o).forEach((key) => {
      if (o[key] instanceof Date) {
        n[key] = (o[key] as Date).getTime();
      } else {
        n[key] = o[key];
      }
    });

    return n;
  } else if (Array.isArray(o)) {
    return o.map((i) => {
      return snakeCaseToCamelCase(i);
    });
  }

  return o;
};

const isObject = function (o: any) {
  return o === Object(o) && !Array.isArray(o) && typeof o !== 'function';
};

export const toCamelCase = (s: string) => {
  return s.replace(/([-_][a-z])/gi, ($1: string) => {
    return $1.toUpperCase().replace('-', '').replace('_', '');
  });
};

export const toSnakeCase = (s: string) => {
  return s.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
};
