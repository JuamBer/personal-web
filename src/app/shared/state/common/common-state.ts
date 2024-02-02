import { Observable, map, tap } from 'rxjs';
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
  id: string;
  type: ActionType;
  status: ActionStatus;
}
export class CommonState<T extends Resource> {
  entities: T[] = [];
  selectedId: string | undefined;
  count: number = 0;
  action: Action | undefined;
}

export function hasPendingActions(action$: Observable<Action | undefined>): Observable<boolean> {
  const pendingActions = new Map<string, Set<string>>();

  return action$.pipe(
    tap((action) => {
      if (!action) return;

      if (!pendingActions.has(action.type)) {
        pendingActions.set(action.type, new Set());
      }

      const actionSet = pendingActions.get(action.type);

      if (actionSet) {
        if (action.status === ActionStatus.PENDING) {
          actionSet.add(action.id);
        } else if (action.status === ActionStatus.SUCCESS || action.status === ActionStatus.ERROR) {
          actionSet.delete(action.id);
        }

        if (actionSet.size === 0) {
          pendingActions.delete(action.type);
        }
      }
    }),
    map(() => Array.from(pendingActions.values()).some((set) => set.size > 0)),
  );
}
