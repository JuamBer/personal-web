import { Observable, map, tap } from 'rxjs';
import { Resource } from '../../models/resource.model';

export enum ActionType {
  COUNT = 'COUNT',
  LOAD_ONE = 'LOAD_ONE',
  LOAD_MANY = 'LOAD_MANY',
  CREATE_ONE = 'CREATE_ONE',
  UPDATE_ONE = 'UPDATE_ONE',
  DELETE_ONE = 'DELETE_ONE',
}
export enum ActionStatus {
  PENDING = 'PENDING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
}
export interface Action<T extends Resource> {
  id: string;
  type: ActionType;
  status: ActionStatus;
  feedback: Set<ActionStatus>;
  entity?: T;
}
export class CommonState<T extends Resource> {
  entities: T[] = [];
  selectedId: string | undefined;
  count: number = 0;
  action: Action<T> | undefined;
}

export function hasPendingActions<T extends Resource>(
  action$: Observable<Action<T> | undefined>,
  actionTypes?: ActionType[],
): Observable<boolean> {
  const actionTypesToCheck = actionTypes || Object.values(ActionType);
  const pendingActions = new Map<ActionType, Set<string>>();

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
    map(() => {
      const pendingActionsToCheck = new Map<ActionType, Set<string>>();

      pendingActions.forEach((value, key) => {
        if (actionTypesToCheck.includes(key)) {
          pendingActionsToCheck.set(key, value);
        }
      });

      return Array.from(pendingActionsToCheck.values()).some((set) => set.size > 0);
    }),
  );
}
