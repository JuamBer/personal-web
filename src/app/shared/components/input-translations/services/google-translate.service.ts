import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GoogleObj } from './input-translations.service';

@Injectable({
  providedIn: 'root',
})
export class GoogleTranslateService {
  url = 'https://translation.googleapis.com/language/translate/v2?key=';
  key = '';

  constructor(private http: HttpClient) {}

  translate(obj: GoogleObj) {
    return this.http.post(this.url + this.key, obj);
  }
}
