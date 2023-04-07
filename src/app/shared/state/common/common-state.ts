import { ToastMessage } from '@app/shared/models/toast-message';

export interface CommonState<T> {
  entities: T[];
  selectedId: number;
  count: number;
  loading: boolean;
  message: ToastMessage | null | undefined;
}
