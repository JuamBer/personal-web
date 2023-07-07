import { Translation } from '../models/translation.model';

export class TranslationUtils {
  public static getTranslation(language: string, translations: Translation[]): string | undefined {
    const translation = translations.find((t) => t.language === language);
    return translation?.value;
  }
}
