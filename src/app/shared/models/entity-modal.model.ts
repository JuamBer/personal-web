import { Signal } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { ModalMode } from 'src/app/shared/models/modal-mode.model';
import { ModalParams } from 'src/app/shared/models/modal-params.model';
import { CommonNames, Naming, NumberMode } from 'src/app/shared/state/common/common.names';
import { Resource } from './resource.model';

export interface EntityModal<T extends Resource> {
  visible: boolean;
  form: FormGroup;

  params$: Observable<ModalParams>;

  modalMode$: Observable<ModalMode>;
  modalMode: Signal<ModalMode | undefined>;

  entity$: Observable<T | undefined>;
  entity: Signal<T | undefined>;

  loading$: Observable<boolean>;
  loading: Signal<boolean | undefined>;

  handleLoadData(): void;
  handleParams(): void;
  handleEntity(): void;
  handleAction(): void;

  hide: () => void;
  send: () => void;

  get NumberMode(): typeof NumberMode;
  get Naming(): typeof Naming;
  get names(): CommonNames;
}
