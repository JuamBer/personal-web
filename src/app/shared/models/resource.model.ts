/* eslint-disable @typescript-eslint/no-unused-vars */
import { Language } from 'src/app/backoffice/tables/language/models/language.model';

export class Resource {
  id: string;

  constructor(id: string) {
    this.id = id;
  }

  getDisplayName(language: Language): string {
    return this.id;
  }
}
