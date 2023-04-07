import { Language } from '@app/backoffice/tablas/languages/models/language.model';
import { CommonReducer } from '@app/shared/state/common/common.reducer';
import { ReducerTypes } from '@ngrx/store';
import { publicLanguageActions } from './public-language.actions';
import { publicLanguageNames } from './public-language.names';
import { PublicLanguageState } from './public-language.state';

export const initialState: PublicLanguageState = {
  entities: [
    {
      id: 1,
      nativeName: 'Español',
      name: 'Spanish',
      acronym: 'es',
      active: true,
    },
    {
      id: 2,
      nativeName: 'English',
      name: 'English',
      acronym: 'en',
      active: true,
    },
  ],
  selectedId: 1,
  count: 0,
  loading: false,
  message: null,
};
const otherReducers: ReducerTypes<any, any>[] = [];
class PublicLanguageReducer extends CommonReducer<
  Language,
  PublicLanguageState
> {
  private static instance: PublicLanguageReducer;

  private constructor() {
    super(
      publicLanguageNames.kebabCase.plural.normal,
      publicLanguageActions,
      initialState,
      otherReducers,
    );
  }

  public static getInstance(): PublicLanguageReducer {
    if (!PublicLanguageReducer.instance) {
      PublicLanguageReducer.instance = new PublicLanguageReducer();
    }
    return PublicLanguageReducer.instance;
  }
}
export const publicLanguageReducer: PublicLanguageReducer =
  PublicLanguageReducer.getInstance();
