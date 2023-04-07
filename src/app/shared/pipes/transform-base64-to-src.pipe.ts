import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformBase64ToSrc',
})
export class TransformBase64ToSrc implements PipeTransform {
  transform(B64: string) {
    return 'data:image/png;base64,' + B64;
  }
}
