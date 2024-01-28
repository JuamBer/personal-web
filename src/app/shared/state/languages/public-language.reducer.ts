import { ReducerTypes, on } from '@ngrx/store';
import { Language } from 'src/app/backoffice/tables/language/models/language.model';
import { CommonReducer } from 'src/app/shared/state/common/common.reducer';
import { ActionStatus, ActionType } from '../common/common-state';
import { Naming, NumberMode } from '../common/common.names';
import { publicLanguageActions } from './public-language.actions';
import { publicLanguageNames } from './public-language.names';
import { PublicLanguageState } from './public-language.state';

export const initialState = new PublicLanguageState();

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const otherReducers: ReducerTypes<any, any>[] = [
  on(publicLanguageActions.loadOneByAcronym, (state, { acronym }) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const selectedId = state.entities.find((language: any) => language.acronym === acronym)?.id;
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
