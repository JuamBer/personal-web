import { Pipe, PipeTransform } from '@angular/core';
import { AbstractControl, Validators } from '@angular/forms';

@Pipe({
  name: 'isRequired',
})
export class IsRequiredPipe implements PipeTransform {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  transform(control: AbstractControl | any): string {
    if (!control) {
      return '';
    }

    if (control.hasValidator(Validators.required) && (!control.hasError('required') || !control.dirty)) {
      return '*';
    }
    return '';
  }
}
