import { Resource } from '../../models/resource.model';

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
export class CommonState<T extends Resource> {
  entities: T[] = [];
  selectedId: string | undefined;
  count: number = 0;
  loading: boolean = false;
  action: Action | undefined;
}
