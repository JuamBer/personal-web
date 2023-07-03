import { AbstractControl, FormArray, FormControl, FormGroup } from '@angular/forms';

export class FormUtils {
  static markAllAsDirtyAndTouched(asbtractControl: AbstractControl) {
    if (asbtractControl instanceof FormControl) {
      asbtractControl.markAsTouched();
      asbtractControl.markAsDirty();
      asbtractControl.updateValueAndValidity();
    }

    if (asbtractControl instanceof FormGroup) {
      Object.entries(asbtractControl.controls).forEach(([key, asbtractControl]) => {
        FormUtils.markAllAsDirtyAndTouched(asbtractControl);
      });
    }

    if (asbtractControl instanceof FormArray) {
      asbtractControl.controls.forEach((asbtractControl) => {
        FormUtils.markAllAsDirtyAndTouched(asbtractControl);
      });
    }
  }

  static disableAllControls(asbtractControl: AbstractControl) {
    asbtractControl.disable();
    asbtractControl.updateValueAndValidity();

    if (asbtractControl instanceof FormControl) {
      asbtractControl.disable();
    }

    if (asbtractControl instanceof FormGroup) {
      asbtractControl.disable();
      Object.entries(asbtractControl.controls).forEach(([key, asbtractControl]) => {
        FormUtils.markAllAsDirtyAndTouched(asbtractControl);
      });
    }

    if (asbtractControl instanceof FormArray) {
      asbtractControl.disable();
      asbtractControl.controls.forEach((asbtractControl) => {
        FormUtils.markAllAsDirtyAndTouched(asbtractControl);
      });
    }
  }
}
