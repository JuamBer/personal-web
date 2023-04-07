import { Language } from '../../languages/models/language.model';

export interface Curriculum {
  id?: number;
  date: Date;
  language: Language;
  pdf: string;
}
