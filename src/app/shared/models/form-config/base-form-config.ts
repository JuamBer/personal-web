import { ButtonConfig } from '../table-config/button-config';
import { BaseFormContainer } from './base-form-container';

export interface BaseFormConfig {
  containers: BaseFormContainer[];
  buttons: ButtonConfig[];
}
