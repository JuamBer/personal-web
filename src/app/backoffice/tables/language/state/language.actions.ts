import { CommonAction } from 'src/app/shared/state/common/common.actions';
import { Naming, NumberMode } from 'src/app/shared/state/common/common.names';
import { Language } from '../models/language.model';
import { languageNames } from './language.names';

class LanguageActions extends CommonAction<Language> {
  private static instance: LanguageActions;

  private constructor() {
    super(languageNames.name(Naming.KEBAB_CASE, NumberMode.PLURAL));
  }

  public static getInstance(): LanguageActions {
    if (!LanguageActions.instance) {
      LanguageActions.instance = new LanguageActions();
    }
    return LanguageActions.instance;
  }
}

export const languageActions: LanguageActions = LanguageActions.getInstance();
