import { Language } from '@app/backoffice/tablas/languages/models/language.model';
import { CommonAction } from '@app/shared/state/common/common.actions';
import { publicLanguageNames } from './public-language.names';

class PublicLanguageActions extends CommonAction<Language> {
  private static instance: PublicLanguageActions;

  private constructor() {
    super(publicLanguageNames.upperCamelCase.singular);
  }

  public static getInstance(): PublicLanguageActions {
    if (!PublicLanguageActions.instance) {
      PublicLanguageActions.instance = new PublicLanguageActions();
    }
    return PublicLanguageActions.instance;
  }
}

export const publicLanguageActions: PublicLanguageActions =
  PublicLanguageActions.getInstance();
