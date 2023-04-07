import { Language } from '@app/backoffice/tablas/languages/models/language.model';

export interface Translation {
  id: number;
  translation: string;
  language: Language;
}
export interface TextContent {
  id: number;
  translations: Translation[];
}
