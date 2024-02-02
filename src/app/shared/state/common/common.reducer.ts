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
    on(this.actions.loadOne, (state, { actionId }): any => ({
      ...(state as any),
      action: {
        id: actionId,
        type: ActionType.LOAD_ONE,
        status: ActionStatus.PENDING,
      },
    })),
    on(this.actions.loadOneSuccess, (state, { actionId, payload }) => {
      const entities = [...state.entities];
      const index = entities.findIndex((entity) => entity.id === payload.id);
      if (index >= 0) {
        entities[index] = payload;
      } else {
        entities.push(payload);
      }

      return {
        ...state,
        selectedId: payload.id,
        entities: entities,
        action: {
          id: actionId,
          type: ActionType.LOAD_ONE,
          status: ActionStatus.SUCCESS,
        },
      };
    }),
    on(this.actions.loadOneFail, (state, { actionId }): any => ({
      ...state,
      action: {
        id: actionId,
        type: ActionType.LOAD_ONE,
        status: ActionStatus.ERROR,
      },
    })),

    //LOAD ALL REDUCERS
    on(this.actions.loadAll, (state, { actionId }): any => ({
      ...state,
      action: {
        id: actionId,
        type: ActionType.LOAD_MANY,
        status: ActionStatus.PENDING,
      },
    })),
    on(this.actions.loadAllSuccess, (state, { actionId, payload }) => {
      const selected = state.entities.find((entity) => entity.id === state.selectedId);

      return {
        ...state,
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
          id: actionId,
          type: ActionType.LOAD_MANY,
          status: ActionStatus.SUCCESS,
        },
      };
    }),
    on(this.actions.loadAllFail, (state, { actionId }): any => ({
      ...state,

      action: {
        id: actionId,
        type: ActionType.LOAD_MANY,
        status: ActionStatus.ERROR,
      },
    })),

    //LOAD MORE REDUCERS
    on(this.actions.loadMore, (state, { actionId }): any => ({
      ...state,
      action: {
        id: actionId,
        type: ActionType.LOAD_MANY,
        status: ActionStatus.PENDING,
      },
    })),
    on(this.actions.loadMoreSuccess, (state, { actionId, payload }): any => {
      return {
        ...state,
        entities: [...state.entities, ...payload],
        action: {
          id: actionId,
          type: ActionType.LOAD_MANY,
          status: ActionStatus.SUCCESS,
        },
      };
    }),
    on(this.actions.loadMoreFail, (state, { actionId }): any => ({
      ...state,
      action: {
        id: actionId,
        type: ActionType.LOAD_MANY,
        status: ActionStatus.ERROR,
      },
    })),

    //CREATE REDUCERS
    on(this.actions.create, (state, { actionId }): any => ({
      ...state,
      action: {
        id: actionId,
        type: ActionType.CREATE_ONE,
        status: ActionStatus.PENDING,
      },
    })),
    on(this.actions.createSuccess, (state, { actionId, payload }): any => {
      return {
        ...state,
        entities: [...state.entities, payload],
        count: state.count + 1,
        action: {
          id: actionId,
          type: ActionType.CREATE_ONE,
          status: ActionStatus.SUCCESS,
        },
      };
    }),
    on(this.actions.createFail, (state, { actionId }): any => ({
      ...state,
      action: {
        id: actionId,
        type: ActionType.CREATE_ONE,
        status: ActionStatus.ERROR,
      },
    })),

    //UPDATE REDUCERS
    on(this.actions.update, (state, { actionId }): any => ({
      ...state,
      action: {
        id: actionId,
        type: ActionType.UPDATE_ONE,
        status: ActionStatus.PENDING,
      },
    })),
    on(this.actions.updateSuccess, (state, { actionId, payload }): any => ({
      ...state,
      entities: state.entities.map((entity) => {
        if (entity.id === payload.id) {
          return payload;
        } else {
          return entity;
        }
      }),
      action: {
        id: actionId,
        type: ActionType.UPDATE_ONE,
        status: ActionStatus.SUCCESS,
      },
    })),
    on(this.actions.createFail, (state, { actionId }): any => ({
      ...state,
      action: {
        id: actionId,
        type: ActionType.UPDATE_ONE,
        status: ActionStatus.ERROR,
      },
    })),

    //DELETE REDUCERS
    on(this.actions.delete, (state, { actionId }): any => ({
      ...state,
      action: {
        id: actionId,
        type: ActionType.DELETE_ONE,
        status: ActionStatus.PENDING,
      },
    })),
    on(this.actions.deleteSuccess, (state, { actionId, id }): any => ({
      ...state,
      count: state.count - 1,
      entities: state.entities.filter((entity) => {
        if (entity.id === id) {
          return false;
        } else {
          return true;
        }
      }),
      action: {
        id: actionId,
        type: ActionType.DELETE_ONE,
        status: ActionStatus.SUCCESS,
      },
    })),
    on(this.actions.deleteFail, (state, { actionId }): any => ({
      ...state,
      action: {
        id: actionId,
        type: ActionType.DELETE_ONE,
        status: ActionStatus.ERROR,
      },
    })),

    //COUNT REDUCERS
    on(this.actions.count, (state, { actionId }): any => ({
      ...state,
      action: {
        id: actionId,
        type: ActionType.COUNT,
        status: ActionStatus.PENDING,
      },
    })),
    on(this.actions.countSuccess, (state, { actionId, payload }): any => {
      return {
        ...state,
        count: payload,
        action: {
          id: actionId,
          type: ActionType.COUNT,
          status: ActionStatus.SUCCESS,
        },
      };
    }),
    on(this.actions.countFail, (state, { actionId }): any => ({
      ...state,
      action: {
        id: actionId,
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
}
// eslint-disable-next-line @typescript-eslint/no-namespace
namespace CommonReducer {
  export interface AppState extends fromRoot.AppState {
    tags: CommonState<any>;
  }
}
