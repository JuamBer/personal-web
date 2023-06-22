import { LazyLoadEvent } from 'primeng/api';

export enum GenericFieldType {
  TEXT = 'TEXT',
  NUMBER = 'NUMBER',
  PERCENTAGE = 'PERCENTAGE',
  DATE = 'DATE',
  TIME = 'TIME',
  DATETIME = 'DATETIME',
  CURRENCY = 'CURRENCY',
  OBJECT = 'OBJECT',
  ARRAY = 'ARRAY',
  BOOLEAN = 'BOOLEAN',
  IMAGE = 'IMAGE',
}

export enum FilterType {
  START_WITH = 'START_WITH',
  ENDS_WITH = 'ENDS_WITH',
  CONTAINS = 'CONTAINS',
  NOT_CONTAINS = 'NOT_CONTAINS',
  EQUAL = 'EQUAL',
  NOT_EQUAL = 'NOT_EQUAL',
}

export interface GenericFieldConfig<T> {
  type: GenericFieldType;
  field: string;
  label: string;
  filter: boolean;
  sort: boolean;
  fieldConfig?: GenericFieldConfig<T>;
  tooltip?: (item: T) => string;
}

export interface GenericTableButton {
  type?: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'help' | 'danger';
  style?: 'rounded' | 'raised' | 'outlined';
  label?: string;
  icon: string;
  ariaLabel?: string;
  tooltip?: string;
  event: TableEventType;
}

export interface GenericTableConfig<T> {
  dataKey: string;
  rowsPerPageOptions: number[];
  showCurrentPageReport: boolean;
  paginator: boolean;
  size: 'small' | 'normal' | 'large';
  fields: GenericFieldConfig<T>[];
  buttons: {
    top: GenericTableButton[];
    start: GenericTableButton[];
    end: GenericTableButton[];
  };
}

export enum TableEventType {
  CREATE = 'CREATE',
  UPDATE = 'UPDATE',
  DELETE = 'DELETE',
  VIEW = 'VIEW',
  DUPLICATE = 'DUPLICATE',
}
export interface TableEvent<T> {
  type: TableEventType;
  value: T;
}
export interface FilterEvent<T> {
  field: GenericFieldConfig<T>;
  filter: Filter;
}
export interface SortEvent<T> {
  field: GenericFieldConfig<T>;
  sortOrder: number;
}
export interface Filter {
  value: unknown;
  filterType: FilterType;
}
export interface RequestSpecification<T> {
  lazyLoadEvent: LazyLoadEvent;
  filters: FilterEvent<T>[];
}
