import { ReducerTypes } from '@ngrx/store';
import { Language } from 'src/app/backoffice/tables/language/models/language.model';
import { CommonReducer } from 'src/app/shared/state/common/common.reducer';
import { defaultCommonState } from '../common/common-state';
import { Naming, NumberMode } from '../common/common.names';
import { publicLanguageActions } from './public-language.actions';
import { publicLanguageNames } from './public-language.names';
import { PublicLanguageState } from './public-language.state';

export const initialState: PublicLanguageState = {
  ...(defaultCommonState as PublicLanguageState),
  entities: [
    {
      id: '3f6c8b38-cf14-4305-9450-2286a1d0c777',
      nativeName: 'Español',
      name: 'Spanish',
      acronym: 'es',
      active: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '6e69d213-dc8f-447e-80c5-ba99bcc4c809',
      nativeName: 'English',
      name: 'English',
      acronym: 'en',
      active: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ],
  selectedId: '3f6c8b38-cf14-4305-9450-2286a1d0c777',
};
const otherReducers: ReducerTypes<any, any>[] = [];
class PublicLanguageReducer extends CommonReducer<Language, PublicLanguageState> {
  private static instance: PublicLanguageReducer;

  private constructor() {
    super(
      publicLanguageNames.name(Naming.KEBAB_CASE, NumberMode.PLURAL),
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
export const publicLanguageReducer: PublicLanguageReducer = PublicLanguageReducer.getInstance();
