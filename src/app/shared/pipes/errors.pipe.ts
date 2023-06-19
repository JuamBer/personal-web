import { Pipe, PipeTransform } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { Observable, map, startWith } from 'rxjs';

@Pipe({
  name: 'errors',
})
export class ErrorsPipe implements PipeTransform {
  errorsIds: string[] = ['required'];

  constructor(private translateService: TranslateService) {}

  transform(control: AbstractControl): Observable<string> {
    return control.valueChanges.pipe(
      startWith(control.value),
      map(() => {
        let error = '';

        this.errorsIds.forEach((errorId) => {
          if (control.errors && errorId in control.errors && control.dirty) {
            error = this.translateService.instant(`form.errors.${errorId}`);
          }
        });

        if (control.errors === null) {
          error = '';
        }
        return error;
      }),
    );
  }
}
