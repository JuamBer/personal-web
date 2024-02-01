/* eslint-disable @typescript-eslint/no-explicit-any */
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortBy',
})
export class SortByPipe<T> implements PipeTransform {
  transform(items: any[], key: string, order: string = 'desc'): T[] {
    if (!items || !key) {
      return items;
    }

    if (order === 'asc') {
      return [...items].sort((a, b) => {
        if (a[key] < b[key]) {
          return -1;
        }

        if (a[key] > b[key]) {
          return 1;
        }

        return 0;
      });
    } else if (order === 'desc') {
      return [...items].sort((a, b) => {
        if (a[key] > b[key]) {
          return -1;
        }

        if (a[key] < b[key]) {
          return 1;
        }

        return 0;
      });
    } else {
      return items;
    }
  }
}
