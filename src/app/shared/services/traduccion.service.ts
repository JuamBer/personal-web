import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class TraduccionService {
  constructor(private translate: TranslateService) {}

  getTraduccion(objeto, prefijo): string {
    let result: string = '';
    switch (this.translate.currentLang) {
      case 'es': {
        result = objeto[`${prefijo}Castellano`];
        break;
      }
      case 'vlc': {
        result = objeto[`${prefijo}Valenciano`];
        if (result == '') result = objeto[`${prefijo}Castellano`];
        break;
      }
      case 'en': {
        result = objeto[`${prefijo}Ingles`];
        if (result == '') result = objeto[`${prefijo}Castellano`];
        break;
      }
      default: {
        result = objeto[`${prefijo}Castellano`];
      }
    }
    return result;
  }
}
