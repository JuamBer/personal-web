import { Language } from '@app/backoffice/tables/languages/models/language.model';

export interface Translation {
  id: number;
  translation: string;
  language: Language;
}
export interface TextContent {
  id: number;
  translations: Translation[];
}
