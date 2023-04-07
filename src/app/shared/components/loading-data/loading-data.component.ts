import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading-data',
  templateUrl: 'loading-data.component.html',
  styleUrls: ['loading-data.component.scss'],
})
export class LoadingDataComponent implements OnInit {
  @Input() type: 'sidebar' | 'complete' = 'complete';
  @Input() title: string = 'ERROR 404';
  @Input() subtitle: string = 'Página no encontrada';
  @Input() text: string =
    'La página que estás buscando no existe o no está disponible en este momento.';
  @Input() urlText: string = 'Ir a la página principal';
  @Input() url: string = '/';

  constructor() {}

  ngOnInit(): void {}
}
