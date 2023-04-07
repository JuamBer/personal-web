import { ToastMessageType } from '@app/shared/models/toast-message';
import {
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
  ReducerTypes,
} from '@ngrx/store';
import * as fromRoot from '../../../shared/state/app-state';
import { CommonState } from './common-state';

export class CommonReducer<T, S extends CommonState<T>> {
  constructor(
    private name: string,
    private actions: any,
    private initialState: S,
    private reducers: ReducerTypes<any, any>[],
  ) {}

  public reducer = createReducer(
    this.initialState,

    //LOAD ONE REDUCERS
    on(this.actions.loadOne, (state) => ({
      ...state,
      loading: true,
    })),
    on(this.actions.loadOneSuccess, (state, { payload }) => {
      return {
        ...state,
        loading: false,
        selectedId: payload.id,
        entities: state.entities.map((entity: any) => {
          if (entity.id === payload.id) {
            return payload;
          } else {
            return entity;
          }
        }),
        message: {
          type: ToastMessageType.LOAD_ONE,
          error: null,
        },
      };
    }),
    on(this.actions.loadOneFail, (state, error) => ({
      ...state,
      loading: false,
      message: {
        type: ToastMessageType.ERROR,
        error: error,
      },
    })),

    //LOAD ALL REDUCERS
    on(this.actions.loadAll, (state) => ({
      ...state,
      loading: true,
    })),
    on(this.actions.loadAllSuccess, (state, { payload }) => {
      return {
        ...state,
        loading: false,
        entities: payload,
        count: payload.length,
        message: {
          type: ToastMessageType.LOAD_ALL,
          error: null,
        },
      };
    }),
    on(this.actions.loadAllFail, (state, error) => ({
      ...state,
      loading: false,
      message: {
        type: ToastMessageType.ERROR,
        error: error,
      },
    })),

    //CREATE REDUCERS
    on(this.actions.create, (state) => ({
      ...state,
      loading: true,
    })),
    on(this.actions.createSuccess, (state, { payload }) => {
      return {
        ...state,
        loading: false,
        entities: [...state.entities, payload],
        count: state.count + 1,
        message: {
          type: ToastMessageType.CREATED,
          error: null,
        },
      };
    }),
    on(this.actions.createFail, (state, error) => ({
      ...state,
      loading: false,
      message: {
        type: ToastMessageType.ERROR,
        error: error,
      },
    })),

    //UPDATE REDUCERS
    on(this.actions.update, (state) => ({
      ...state,
      loading: true,
    })),
    on(this.actions.updateSuccess, (state, { payload }) => {
      return {
        ...state,
        loading: false,
        entities: state.entities.map((i: any) => {
          if (i.id === payload.id) {
            return payload;
          } else {
            return i;
          }
        }),
        message: {
          type: ToastMessageType.UPDATED,
          error: null,
        },
      };
    }),
    on(this.actions.createFail, (state, error) => ({
      ...state,
      loading: false,
      message: {
        type: ToastMessageType.ERROR,
        error: error,
      },
    })),

    //DELETE REDUCERS
    on(this.actions.delete, (state) => ({
      ...state,
      loading: true,
    })),
    on(this.actions.deleteSuccess, (state, { id }) => {
      return {
        ...state,
        loading: false,
        count: state.count - 1,
        entities: state.entities.filter((i: any) => {
          if (i.id === id) {
            return false;
          } else {
            return true;
          }
        }),
        message: {
          type: ToastMessageType.DELETED,
          error: null,
        },
      };
    }),
    on(this.actions.deleteFail, (state, error) => ({
      ...state,
      loading: false,
      message: {
        type: ToastMessageType.ERROR,
        error: error,
      },
    })),

    //COUNT REDUCERS
    on(this.actions.count, (state) => ({
      ...state,
      loading: true,
    })),
    on(this.actions.countSuccess, (state, { payload }) => {
      return {
        ...state,
        loading: false,
        count: payload,
        message: {
          type: ToastMessageType.COUNT,
          error: null,
        },
      };
    }),
    on(this.actions.countFail, (state, error) => ({
      ...state,
      loading: false,
      message: {
        type: ToastMessageType.ERROR,
        error: error,
      },
    })),

    //UNLOAD
    on(this.actions.unload, (state) => ({
      ...state,
      selectedId: null,
    })),

    ...this.reducers,
  );

  public getCommonFetureState = createFeatureSelector<S>(this.name);
  public getAll = createSelector(
    this.getCommonFetureState,
    (state: S) => state.entities,
  );
  public getOne = createSelector(this.getCommonFetureState, (state: S) =>
    state.entities?.find((i: any) => i?.id === state.selectedId),
  );
  public getCount = createSelector(
    this.getCommonFetureState,
    (state: S) => state.count,
  );
  public getLoading = createSelector(
    this.getCommonFetureState,
    (state: S) => state.loading,
  );
  public getMessage = createSelector(
    this.getCommonFetureState,
    (state: S) => state.message,
  );
}
namespace CommonReducer {
  export interface AppState extends fromRoot.AppState {
    tags: CommonState<any>;
  }
}
