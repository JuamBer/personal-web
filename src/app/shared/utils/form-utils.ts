import { AbstractControl, FormArray, FormControl, FormGroup } from '@angular/forms';

export class FormUtils {
  static markAllAsDirtyAndTouched(abstractControl: AbstractControl) {
    if (abstractControl instanceof FormControl) {
      abstractControl.markAsTouched();
      abstractControl.markAsDirty();
      abstractControl.updateValueAndValidity();
    }

    if (abstractControl instanceof FormGroup) {
      Object.entries(abstractControl.controls).forEach(([, abstractControl]) => {
        FormUtils.markAllAsDirtyAndTouched(abstractControl);
      });
    }

    if (abstractControl instanceof FormArray) {
      abstractControl.controls.forEach((abstractControl) => {
        FormUtils.markAllAsDirtyAndTouched(abstractControl);
      });
    }
  }

  static disableAllControls(abstractControl: AbstractControl) {
    abstractControl.disable();
    abstractControl.updateValueAndValidity();

    if (abstractControl instanceof FormControl) {
      abstractControl.disable();
    }

    if (abstractControl instanceof FormGroup) {
      abstractControl.disable();
      Object.entries(abstractControl.controls).forEach(([, abstractControl]) => {
        FormUtils.markAllAsDirtyAndTouched(abstractControl);
      });
    }

    if (abstractControl instanceof FormArray) {
      abstractControl.disable();
      abstractControl.controls.forEach((abstractControl) => {
        FormUtils.markAllAsDirtyAndTouched(abstractControl);
      });
    }
  }
}
