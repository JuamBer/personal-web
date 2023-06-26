import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import * as fromRoot from 'src/app/shared/state/app-state';
import { Naming, NumberMode } from '../common/common.names';
import { AccountActions } from './account.actions';
import { accountNames } from './account.names';

export interface AccountState {
  user: any;
  loaded: boolean;
  loading: boolean;
  error: any;
}

export interface AppState extends fromRoot.AppState {
  account: AccountState;
}

export const initialState: AccountState = {
  user: null,
  loading: false,
  loaded: false,
  error: null,
};

export const accountReducer = createReducer(
  initialState,

  on(AccountActions.loadUsuario, (state) => ({
    ...state,
    loading: true,
    loaded: false,
  })),
  on(AccountActions.loadUsuarioSuccess, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: true,
    user: payload,
  })),
  on(AccountActions.loadUsuarioFail, (state, { error }) => ({
    ...state,
    loading: false,
    loaded: false,
    usuario: null,
    error: error,
  })),
);

const getAccountFetureState = createFeatureSelector<AccountState>(
  accountNames.name(Naming.KEBAB_CASE, NumberMode.PLURAL),
);

export const getUsuario = createSelector(getAccountFetureState, (state: AccountState) => state.user);

export const isLoaded = createSelector(getAccountFetureState, (state: AccountState) => state.loaded);

export const isLoading = createSelector(getAccountFetureState, (state: AccountState) => state.loading);

export const getError = createSelector(getAccountFetureState, (state: AccountState) => state.error);
