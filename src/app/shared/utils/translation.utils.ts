import { Translation } from '../models/translation.model';

export class TranslationUtils {
  public static getTranslation(language: string | undefined, translations: Translation[]): string | undefined {
    if (!language) return undefined;

    const translation = translations.find((t) => t.language === language);
    return translation?.value;
  }
}
