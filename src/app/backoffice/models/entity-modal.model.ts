import { FormGroup } from '@angular/forms';
import { ModalMode, ModalParams } from '@app/shared/models/modal-config/modal-mode';
import { CommonNamess, Naming, NumberMode } from '@app/shared/state/common/common.names';
import { Observable, Subject } from 'rxjs';

export interface EntityModal<T> {
  visible: boolean;
  form: FormGroup;
  unsubscribe$: Subject<boolean>;
  params$: Observable<ModalParams>;
  modalMode$: Observable<ModalMode>;
  entity$: Observable<T>;
  loading$: Observable<boolean>;
  hide: () => void;
  send: () => void;
  get NumberMode(): typeof NumberMode;
  get Naming(): typeof Naming;
  get names(): CommonNamess;
}
