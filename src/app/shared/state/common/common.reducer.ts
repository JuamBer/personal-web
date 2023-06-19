import { ToastMessageType } from '@app/shared/models/toast-message';
import { createFeatureSelector, createReducer, createSelector, on, ReducerTypes } from '@ngrx/store';
import * as fromRoot from '../../../shared/state/app-state';
import { ActionStatus, ActionType, CommonState } from './common-state';

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
      action: {
        type: ActionType.LOAD_ONE,
        status: ActionStatus.PENDING,
      },
    })),
    on(this.actions.loadOneSuccess, (state, { payload }) => {
      const entities = [...state.entities];
      const index = entities.findIndex((i: any) => i.id === payload.id);
      if (index >= 0) {
        entities[index] = payload;
      } else {
        entities.push(payload);
      }

      return {
        ...state,
        loading: false,
        selectedId: payload.id,
        entities: entities,
        message: {
          type: ToastMessageType.LOAD_ONE,
          error: null,
        },
        action: {
          type: ActionType.LOAD_ONE,
          status: ActionStatus.SUCCESS,
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
      action: {
        type: ActionType.LOAD_ONE,
        status: ActionStatus.ERROR,
      },
    })),

    //LOAD ALL REDUCERS
    on(this.actions.loadAll, (state) => ({
      ...state,
      loading: true,
      action: {
        type: ActionType.LOAD_MANY,
        status: ActionStatus.PENDING,
      },
    })),
    on(this.actions.loadAllSuccess, (state, { payload }) => {
      const selected = state.entities.find((i: any) => i.id === state.selectedId);

      return {
        ...state,
        loading: false,
        entities: payload.map((entity) => {
          if (entity.id === state.selectedId && selected) {
            return {
              ...selected,
              // ...entity,
            };
          } else {
            return entity;
          }
        }),
        message: {
          type: ToastMessageType.LOAD_ALL,
          error: null,
        },
        action: {
          type: ActionType.LOAD_MANY,
          status: ActionStatus.SUCCESS,
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
      action: {
        type: ActionType.LOAD_MANY,
        status: ActionStatus.ERROR,
      },
    })),

    //CREATE REDUCERS
    on(this.actions.create, (state) => ({
      ...state,
      loading: true,
      action: {
        type: ActionType.CREATE_ONE,
        status: ActionStatus.PENDING,
      },
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
        action: {
          type: ActionType.CREATE_ONE,
          status: ActionStatus.SUCCESS,
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
      action: {
        type: ActionType.CREATE_ONE,
        status: ActionStatus.ERROR,
      },
    })),

    //UPDATE REDUCERS
    on(this.actions.update, (state) => ({
      ...state,
      loading: true,
      action: {
        type: ActionType.UPDATE_ONE,
        status: ActionStatus.PENDING,
      },
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
        action: {
          type: ActionType.UPDATE_ONE,
          status: ActionStatus.SUCCESS,
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
      action: {
        type: ActionType.UPDATE_ONE,
        status: ActionStatus.ERROR,
      },
    })),

    //DELETE REDUCERS
    on(this.actions.delete, (state) => ({
      ...state,
      loading: true,
      action: {
        type: ActionType.DELETE_ONE,
        status: ActionStatus.PENDING,
      },
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
        action: {
          type: ActionType.DELETE_ONE,
          status: ActionStatus.SUCCESS,
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
      action: {
        type: ActionType.DELETE_ONE,
        status: ActionStatus.ERROR,
      },
    })),

    //COUNT REDUCERS
    on(this.actions.count, (state) => ({
      ...state,
      loading: true,
      action: {
        type: ActionType.COUNT,
        status: ActionStatus.PENDING,
      },
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
        action: {
          type: ActionType.COUNT,
          status: ActionStatus.SUCCESS,
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
      action: {
        type: ActionType.COUNT,
        status: ActionStatus.ERROR,
      },
    })),

    //UNLOAD
    on(this.actions.unload, (state) => ({
      ...state,
      selectedId: null,
    })),

    on(this.actions.requestFilterChange, (state, requestFilter) => ({
      ...state,
      requestFilter,
    })),

    ...this.reducers,
  );

  public getCommonFetureState = createFeatureSelector<S>(this.name);
  public getAll = createSelector(this.getCommonFetureState, (state: S) => state.entities);
  public getOne = createSelector(this.getCommonFetureState, (state: S) =>
    state.entities?.find((i: any) => i?.id === state.selectedId),
  );
  public getCount = createSelector(this.getCommonFetureState, (state: S) => state.count);
  public getAction = createSelector(this.getCommonFetureState, (state: S) => state.action);
  public getLoading = createSelector(this.getCommonFetureState, (state: S) => state.loading);
  public getMessage = createSelector(this.getCommonFetureState, (state: S) => state.message);
  public getRequestFilter = createSelector(this.getCommonFetureState, (state: S) => state.requestFilter);
}
namespace CommonReducer {
  export interface AppState extends fromRoot.AppState {
    tags: CommonState<any>;
  }
}
