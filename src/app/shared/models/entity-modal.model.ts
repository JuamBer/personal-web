import { FormGroup } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { ModalMode } from 'src/app/shared/models/modal-mode.model';
import { ModalParams } from 'src/app/shared/models/modal-params.model';
import { CommonNames, Naming, NumberMode } from 'src/app/shared/state/common/common.names';

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
  get names(): CommonNames;
}
