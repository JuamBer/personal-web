import { ButtonConfig } from './button-config';
import { FieldConfig } from './field-config';
export interface SubTableConfig {
  dataPath: string;
  fieldConfig: FieldConfig[];
  optionButtons?: ButtonConfig[];
}
