export enum ActionType {
  COUNT = 'COUNT',
  LOAD_ONE = 'LOAD_ONE',
  LOAD_MANY = 'LOAD_MANY',
  CREATE_ONE = 'CREATE_ONE',
  CREATE_MANY = 'CREATE_MANY',
  UPDATE_ONE = 'UPDATE_ONE',
  UPDATE_MANY = 'UPDATE_MANY',
  DELETE_ONE = 'DELETE_ONE',
  DELETE_MANY = 'DELETE_MANY',
}
export enum ActionStatus {
  PENDING = 'PENDING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
}
export interface Action {
  type: ActionType;
  status: ActionStatus;
}
export interface CommonState<T> {
  entities: T[];
  selectedId: string;
  count: number;
  loading: boolean;
  action: Action;
}

export const defaultCommonState: CommonState<unknown> = {
  entities: [],
  selectedId: undefined,
  count: 0,
  loading: false,
  action: undefined,
};
