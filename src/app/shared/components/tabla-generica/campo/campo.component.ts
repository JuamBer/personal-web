import { Component, Input, OnInit } from '@angular/core';

export enum Tipo {
  TEXTO = 'TEXTO',
  FECHA = 'FECHA',
  FECHA_HORA = 'FECHA_HORA',
  ACTIVO = 'ACTIVO',
  MONEDA = 'MONEDA',
  IMAGENES = 'IMAGENES',
  OBJECTO = 'OBJECTO',
  OBJECTO_ARRAY = 'OBJECTO_ARRAY',
  ICONO = 'ICONO',
}

@Component({
  selector: 'app-campo',
  templateUrl: './campo.component.html',
  styleUrls: ['./campo.component.scss'],
})
export class CampoComponent implements OnInit {
  @Input() dato: any;
  @Input() tipo: Tipo | string;
  @Input() propiedadParaTipoImagen: string;
  @Input() propiedadParaTipoObjecto: string;
  objectName: string = '';

  tipos = Tipo;
  constructor() {}

  ngOnInit(): void {
    if (this.dato?.[this.propiedadParaTipoObjecto]) {
      this.objectName = this.dato?.[this.propiedadParaTipoObjecto];
    }
  }
}
