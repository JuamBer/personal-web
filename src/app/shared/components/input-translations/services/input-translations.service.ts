import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';

export interface GoogleObj {
  q: string[];
  target: string;
  source?: string;
}
export interface GoogleTranslation {
  translatedText: string;
}
export interface GoogleObjRes {
  data: {
    translations: GoogleTranslation[];
  };
}
@Injectable({
  providedIn: 'root',
})
export class InputTranslationsService {
  private http = inject(HttpClient);

  url = 'https://translation.googleapis.com/language/translate/v2?key=';
  key = environment.googleCloudApiKey;

  translate(obj: GoogleObj): Observable<GoogleObjRes> {
    return this.http.post<GoogleObjRes>(this.url + this.key, obj);
  }
}
