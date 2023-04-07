import { CommonAction } from '@app/shared/state/common/common.actions';
import { Language } from '../models/language.model';
import { languageNames } from './language.names';

class LanguageActions extends CommonAction<Language> {
  private static instance: LanguageActions;

  private constructor() {
    super(languageNames.upperCamelCase.singular);
  }

  public static getInstance(): LanguageActions {
    if (!LanguageActions.instance) {
      LanguageActions.instance = new LanguageActions();
    }
    return LanguageActions.instance;
  }
}

export const languageActions: LanguageActions = LanguageActions.getInstance();
