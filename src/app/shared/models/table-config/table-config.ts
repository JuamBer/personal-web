import { ButtonConfig } from './button-config';
import { FieldConfig } from './field-config';
import { SubTableConfig } from './subtable-config';
import { TableSelectionMode } from './table-selection-mode';

export interface TableConfig {
  lazy?: boolean;
  selectionMode?: TableSelectionMode;
  dataKey?: string;
  fieldConfig: FieldConfig[];
  expandedConfig?: SubTableConfig;
  optionButtons?: ButtonConfig[];
  lowButtons?: ButtonConfig[];
  topButtons?: ButtonConfig[];
}
