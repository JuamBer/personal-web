export interface FieldConfig {
  field: string;
  nombre: string;
  sort: boolean;
  filter: boolean;
  permisos?: string[];
  tipo?: string;
}
