import { createAction, props } from '@ngrx/store';
import { Language } from 'src/app/backoffice/tables/language/models/language.model';
import { CommonAction } from 'src/app/shared/state/common/common.actions';
import { Naming, NumberMode } from '../common/common.names';
import { publicLanguageNames } from './public-language.names';

class PublicLanguageActions extends CommonAction<Language> {
  private static instance: PublicLanguageActions;

  private constructor() {
    super(publicLanguageNames.name(Naming.KEBAB_CASE, NumberMode.PLURAL));
  }

  public static getInstance(): PublicLanguageActions {
    if (!PublicLanguageActions.instance) {
      PublicLanguageActions.instance = new PublicLanguageActions();
    }
    return PublicLanguageActions.instance;
  }

  public loadOneByAcronym = createAction('[' + this.entityName + '] Load One By Acronym', props<{ acronym: string }>());
}

export const publicLanguageActions: PublicLanguageActions = PublicLanguageActions.getInstance();
