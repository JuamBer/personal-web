import { ModalMode } from '@app/shared/models/modal-config/modal-mode';
import { Observable } from 'rxjs';

export interface EntityModal<T> {
  entity$: Observable<T>;
  loading$: Observable<boolean>;
  visible: boolean;
  modalMode: ModalMode;
  createForm: () => void;
  patchFormValue: (value: T) => void;
  show: () => void;
  hide: () => void;
  send: () => void;
}
