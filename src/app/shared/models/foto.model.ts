export interface Foto {
  id: number;
  url: string;
  nombre: string;
  orden: number;
}

export interface CreateFotoDto {
  datos: any;
  nombre: string;
  orden: number;
}

export interface UpdateFotoDto {
  id: number;
  url: string;
  nombre: string;
  orden: number;
}
