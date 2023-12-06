/* eslint-disable @typescript-eslint/no-explicit-any */
import { createFeatureSelector, createReducer, createSelector, on, ReducerTypes } from '@ngrx/store';
import * as fromRoot from '../../../shared/state/app-state';
import { Resource } from '../../models/resource.model';
import { ActionStatus, ActionType, CommonState } from './common-state';
import { CommonAction } from './common.actions';

export class CommonReducer<T extends Resource, S extends CommonState<T>> {
  constructor(
    private name: string,
    private actions: CommonAction<T>,
    private initialState: S,
    private reducers: ReducerTypes<S, any>[],
  ) {}

  public reducer = createReducer(
    this.initialState,

    //LOAD ONE REDUCERS
    on(this.actions.loadOne, (state): any => ({
      ...(state as any),
      loading: true,
      action: {
        type: ActionType.LOAD_ONE,
        status: ActionStatus.PENDING,
      },
    })),
    on(this.actions.loadOneSuccess, (state, { payload }) => {
      const entities = [...state.entities];
      const index = entities.findIndex((entity) => entity.id === payload.id);
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
        action: {
          type: ActionType.LOAD_ONE,
          status: ActionStatus.SUCCESS,
        },
      };
    }),
    on(this.actions.loadOneFail, (state): any => ({
      ...state,
      loading: false,
      action: {
        type: ActionType.LOAD_ONE,
        status: ActionStatus.ERROR,
      },
    })),

    //LOAD ALL REDUCERS
    on(this.actions.loadAll, (state): any => ({
      ...state,
      loading: true,
      action: {
        type: ActionType.LOAD_MANY,
        status: ActionStatus.PENDING,
      },
    })),
    on(this.actions.loadAllSuccess, (state, { payload }) => {
      const selected = state.entities.find((entity) => entity.id === state.selectedId);

      return {
        ...state,
        loading: false,
        entities: payload.map((entity) => {
          if (entity.id === state.selectedId && selected) {
            return {
              ...selected,
              ...entity,
            };
          } else {
            return entity;
          }
        }),
        action: {
          type: ActionType.LOAD_MANY,
          status: ActionStatus.SUCCESS,
        },
      };
    }),
    on(this.actions.loadAllFail, (state): any => ({
      ...state,
      loading: false,
      action: {
        type: ActionType.LOAD_MANY,
        status: ActionStatus.ERROR,
      },
    })),

    //LOAD MORE REDUCERS
    on(this.actions.loadMore, (state): any => ({
      ...state,
      loading: true,
      action: {
        type: ActionType.LOAD_MANY,
        status: ActionStatus.PENDING,
      },
    })),
    on(this.actions.loadMoreSuccess, (state, { payload }): any => {
      return {
        ...state,
        loading: false,
        entities: [...state.entities, ...payload],
        action: {
          type: ActionType.LOAD_MANY,
          status: ActionStatus.SUCCESS,
        },
      };
    }),
    on(this.actions.loadMoreFail, (state): any => ({
      ...state,
      loading: false,
      action: {
        type: ActionType.LOAD_MANY,
        status: ActionStatus.ERROR,
      },
    })),

    //CREATE REDUCERS
    on(this.actions.create, (state): any => ({
      ...state,
      loading: true,
      action: {
        type: ActionType.CREATE_ONE,
        status: ActionStatus.PENDING,
      },
    })),
    on(this.actions.createSuccess, (state, { payload }): any => {
      return {
        ...state,
        loading: false,
        entities: [...state.entities, payload],
        count: state.count + 1,
        action: {
          type: ActionType.CREATE_ONE,
          status: ActionStatus.SUCCESS,
        },
      };
    }),
    on(this.actions.createFail, (state): any => ({
      ...state,
      loading: false,
      action: {
        type: ActionType.CREATE_ONE,
        status: ActionStatus.ERROR,
      },
    })),

    //UPDATE REDUCERS
    on(this.actions.update, (state): any => ({
      ...state,
      loading: true,
      action: {
        type: ActionType.UPDATE_ONE,
        status: ActionStatus.PENDING,
      },
    })),
    on(this.actions.updateSuccess, (state, { payload }): any => ({
      ...state,
      loading: false,
      entities: state.entities.map((entity) => {
        if (entity.id === payload.id) {
          return payload;
        } else {
          return entity;
        }
      }),
      action: {
        type: ActionType.UPDATE_ONE,
        status: ActionStatus.SUCCESS,
      },
    })),
    on(this.actions.createFail, (state): any => ({
      ...state,
      loading: false,
      action: {
        type: ActionType.UPDATE_ONE,
        status: ActionStatus.ERROR,
      },
    })),

    //DELETE REDUCERS
    on(this.actions.delete, (state): any => ({
      ...state,
      loading: true,
      action: {
        type: ActionType.DELETE_ONE,
        status: ActionStatus.PENDING,
      },
    })),
    on(this.actions.deleteSuccess, (state, { id }): any => ({
      ...state,
      loading: false,
      count: state.count - 1,
      entities: state.entities.filter((entity) => {
        if (entity.id === id) {
          return false;
        } else {
          return true;
        }
      }),
      action: {
        type: ActionType.DELETE_ONE,
        status: ActionStatus.SUCCESS,
      },
    })),
    on(this.actions.deleteFail, (state): any => ({
      ...state,
      loading: false,
      action: {
        type: ActionType.DELETE_ONE,
        status: ActionStatus.ERROR,
      },
    })),

    //COUNT REDUCERS
    on(this.actions.count, (state): any => ({
      ...state,
      loading: true,
      action: {
        type: ActionType.COUNT,
        status: ActionStatus.PENDING,
      },
    })),
    on(this.actions.countSuccess, (state, { payload }): any => {
      return {
        ...state,
        loading: false,
        count: payload,
        action: {
          type: ActionType.COUNT,
          status: ActionStatus.SUCCESS,
        },
      };
    }),
    on(this.actions.countFail, (state): any => ({
      ...state,
      loading: false,
      action: {
        type: ActionType.COUNT,
        status: ActionStatus.ERROR,
      },
    })),

    //UNLOAD
    on(this.actions.unload, (state): any => ({
      ...state,
      selectedId: null,
    })),

    //UNLOAD
    on(this.actions.unloadAll, (state): any => ({
      ...state,
      entities: [],
      selectedId: null,
    })),

    ...this.reducers,
  );

  public getCommonFeatureState = createFeatureSelector<S>(this.name);
  public getAll = createSelector(this.getCommonFeatureState, (state: S) => state.entities);
  public getOne = createSelector(this.getCommonFeatureState, (state: S) =>
    state.entities?.find((i: any) => i?.id === state.selectedId),
  );
  public getCount = createSelector(this.getCommonFeatureState, (state: S) => state.count);
  public getAction = createSelector(this.getCommonFeatureState, (state: S) => state.action);
  public getLoading = createSelector(this.getCommonFeatureState, (state: S) => state.loading);
}
// eslint-disable-next-line @typescript-eslint/no-namespace
namespace CommonReducer {
  export interface AppState extends fromRoot.AppState {
    tags: CommonState<any>;
  }
}
