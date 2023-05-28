import { RequestFilter } from '@app/shared/models/request-filter';
import { ToastMessage } from '@app/shared/models/toast-message';
import { environment } from '@env/environment';

export interface CommonState<T> {
  entities: T[];
  selectedId: number;
  count: number;
  loading: boolean;
  requestFilter: RequestFilter;
  message: ToastMessage | null | undefined;
}

export const defaultCommonState: CommonState<unknown> = {
  entities: [],
  selectedId: undefined,
  count: 0,
  loading: false,
  requestFilter: environment.defaultRequestFilter,
  message: undefined,
};
