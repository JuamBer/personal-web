import { Pipe, PipeTransform } from '@angular/core';
import { AbstractControl, Validators } from '@angular/forms';

@Pipe({
  name: 'isRequired',
})
export class IsRequiredPipe implements PipeTransform {
  transform(control: AbstractControl): string {
    if (control.hasValidator(Validators.required) && (!control.hasError('required') || !control.dirty)) {
      return '*';
    }
    return '';
  }

  //   transform(control: AbstractControl): Observable<string> {
  //     return control.valueChanges.pipe(
  //       startWith(control.value),
  //       map(() => {
  //         if (control.hasValidator(Validators.required) && (!control.hasError('required') || !control.dirty)) {
  //           return '*';
  //         }
  //         return '';
  //       }),
  //     );
  //   }
}
