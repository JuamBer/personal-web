import { defaultCommonState } from '@app/shared/state/common/common-state';
import { Naming, NumberMode } from '@app/shared/state/common/common.names';
import { CommonReducer } from '@app/shared/state/common/common.reducer';
import { ReducerTypes } from '@ngrx/store';
import { Language } from '../models/language.model';
import { languageActions } from './language.actions';
import { languageNames } from './language.names';
import { LanguageState } from './language.state';

const initialState: LanguageState = {
  ...(defaultCommonState as LanguageState),
};
const otherReducers: ReducerTypes<any, any>[] = [];
class LanguageReducer extends CommonReducer<Language, LanguageState> {
  private static instance: LanguageReducer;

  private constructor() {
    super(languageNames.name(Naming.KEBAB_CASE, NumberMode.PLURAL), languageActions, initialState, otherReducers);
  }

  public static getInstance(): LanguageReducer {
    if (!LanguageReducer.instance) {
      LanguageReducer.instance = new LanguageReducer();
    }
    return LanguageReducer.instance;
  }
}
export const languageReducer: LanguageReducer = LanguageReducer.getInstance();
