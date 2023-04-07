import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'toDate',
})
export class ToDatePipe implements PipeTransform {
  transform(date: any): Date {
    return new Date(date);
  }
}
