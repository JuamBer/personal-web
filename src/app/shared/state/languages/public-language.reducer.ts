import { ReducerTypes, on } from '@ngrx/store';
import { Language } from 'src/app/backoffice/tables/language/models/language.model';
import { CommonReducer } from 'src/app/shared/state/common/common.reducer';
import { v4 as uuidv4 } from 'uuid';
import { ActionStatus, ActionType, defaultCommonState } from '../common/common-state';
import { Naming, NumberMode } from '../common/common.names';
import { publicLanguageActions } from './public-language.actions';
import { publicLanguageNames } from './public-language.names';
import { PublicLanguageState } from './public-language.state';

const englishId = uuidv4();

export const initialState: PublicLanguageState = {
  ...(defaultCommonState as PublicLanguageState),
  entities: [
    {
      id: uuidv4(),
      acronym: 'de',
      nativeName: '',
      name: '',
      active: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: englishId,
      acronym: 'en',
      nativeName: '',
      name: '',
      active: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),
      acronym: 'es',
      nativeName: '',
      name: '',
      active: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),
      acronym: 'fr',
      nativeName: '',
      name: '',
      active: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),
      acronym: 'it',
      nativeName: '',
      name: '',
      active: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),
      acronym: 'nl',
      nativeName: '',
      name: '',
      active: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),
      acronym: 'no',
      nativeName: '',
      name: '',
      active: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),
      acronym: 'pt',
      nativeName: '',
      name: '',
      active: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ],
  selectedId: englishId,
};
const otherReducers: ReducerTypes<any, any>[] = [
  on(publicLanguageActions.loadOneByAcronym, (state, { acronym }) => {
    const selectedId = state.entities.find((language) => language.acronym === acronym)?.id;
    return {
      ...state,
      loading: false,
      selectedId,
      action: {
        type: ActionType.LOAD_ONE,
        status: selectedId ? ActionStatus.SUCCESS : ActionStatus.ERROR,
      },
    };
  }),
];
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
