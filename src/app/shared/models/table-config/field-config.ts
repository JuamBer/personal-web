import { Observable } from 'rxjs';

export interface FieldConfig {
  field: string;
  nombre: string;
  sort: boolean;
  filter: boolean;
  permisos?: string[];
  tipo?: string;
  propiedadParaTipoImagen?: string;
  propiedadParaTipoObjecto?: string;
  opcionesParaElTipoObjecto?: Observable<any[]>;
  width?: string;
}
