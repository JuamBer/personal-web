import { Pipe, PipeTransform } from '@angular/core';
import { of } from 'rxjs';
import { Language } from 'src/app/backoffice/tables/language/models/language.model';

@Pipe({ name: 'translate' })
export class TranslatePipeStub implements PipeTransform {
  transform(value: string): string {
    return value;
  }
}

export class TranslateServiceStub {
  public get(key: string) {
    return of(key);
  }
}

export const englishLanguage = {
  id: '1',
  name: 'English',
  nativeName: 'English',
  acronym: 'en',
  active: true,
  createdAt: new Date(),
  updatedAt: new Date(),
} as Language;
