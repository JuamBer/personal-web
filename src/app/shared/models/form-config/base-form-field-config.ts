import { AbstractControlOptions, ValidatorFn } from '@angular/forms';
import { FieldType } from '@app/shared/components/base-form/base-form-container/base-form-container.component';

export interface BaseFormFieldConfig {
  name: string;
  formControlName?: string;
  title?: string;
  data?: any;
  value?: any;
  size?: string;
  type?: FieldType;
  width?: string;
  error?: string;
  info?: string;
  validators?: ValidatorFn | ValidatorFn[] | AbstractControlOptions;
}
