import { TranslationUtils } from '../utils/translation.utils';

export class TranslationProvider {
  get getTranslation() {
    return TranslationUtils.getTranslation;
  }
}
