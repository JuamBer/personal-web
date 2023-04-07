import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { TextContent } from '../models/text-content.model';

export function textContentValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value: TextContent = control.value;

    if (!value) {
      return null;
    }

    let valid = true;

    value.translations.forEach((t) =>
      !t.translation ? (valid = false) : null,
    );
    return !valid ? { textContentValidator: true } : null;
  };
}
