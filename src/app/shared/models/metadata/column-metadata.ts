export interface ColumnMetadata {
  name: string;
  type: string;
  relation: Relation;
  validators: Validator | null;
}

export interface Validator {
  name: string;
  unique: boolean;
  nullable: boolean;
  insertable: boolean;
  updatable: boolean;
  columnDefinition: string;
  table: string;
  length: number | null;
  precision: number | null;
  scale: number | null;
}

export enum Relation {
  COLUMN,
  MANY_TO_MANY,
  MANY_TO_ONE,
}
