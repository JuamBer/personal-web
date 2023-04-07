import { Directive } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';
import { textContentValidator } from './text-content-validator';

@Directive({
  selector: '[passwordStrength]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PasswordStrengthDirective,
      multi: true,
    },
  ],
})
export class PasswordStrengthDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    return textContentValidator()(control);
  }
}
