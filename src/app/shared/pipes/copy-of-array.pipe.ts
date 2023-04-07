import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'copyOfArray',
})
export class CopyOfArrayPipe implements PipeTransform {
  transform(array: any[]): any[] {
    return [...array];
  }
}
