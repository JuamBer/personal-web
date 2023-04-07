import { CommonReducer } from '@app/shared/state/common/common.reducer';
import { ReducerTypes } from '@ngrx/store';
import { Language } from '../models/language.model';
import { languageActions } from './language.actions';
import { languageNames } from './language.names';
import { LanguageState } from './language.state';

const initialState: LanguageState = {
  entities: [],
  selectedId: null,
  count: 0,
  loading: false,
  message: null,
};
const otherReducers: ReducerTypes<any, any>[] = [];
class LanguageReducer extends CommonReducer<Language, LanguageState> {
  private static instance: LanguageReducer;

  private constructor() {
    super(
      languageNames.kebabCase.plural.normal,
      languageActions,
      initialState,
      otherReducers,
    );
  }

  public static getInstance(): LanguageReducer {
    if (!LanguageReducer.instance) {
      LanguageReducer.instance = new LanguageReducer();
    }
    return LanguageReducer.instance;
  }
}
export const languageReducer: LanguageReducer = LanguageReducer.getInstance();
