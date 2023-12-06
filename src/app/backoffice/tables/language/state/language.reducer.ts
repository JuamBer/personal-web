import { ReducerTypes } from '@ngrx/store';
import { Naming, NumberMode } from 'src/app/shared/state/common/common.names';
import { CommonReducer } from 'src/app/shared/state/common/common.reducer';
import { Language } from '../models/language.model';
import { languageActions } from './language.actions';
import { languageNames } from './language.names';
import { LanguageState } from './language.state';

const initialState = new LanguageState();
const otherReducers: ReducerTypes<LanguageState, any>[] = [];

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
