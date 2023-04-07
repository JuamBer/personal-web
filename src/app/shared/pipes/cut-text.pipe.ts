import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'cutText',
})
export class CutTextPipe implements PipeTransform {
  transform(text: string, max: number): string {
    if (text.length > max) {
      return text.slice(0, max).concat('...');
    } else {
      return text;
    }
  }
}
