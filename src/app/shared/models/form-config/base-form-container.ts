import { BaseFormFieldConfig } from './base-form-field-config';

export interface BaseFormContainer {
  title: string;
  name?: string;
  formControlName?: string;
  data?: any;
  info?: string;
  code: string;
  width?: string;
  type?: string;
  size?: string;
  content: (BaseFormFieldConfig | BaseFormContainer)[];
}
