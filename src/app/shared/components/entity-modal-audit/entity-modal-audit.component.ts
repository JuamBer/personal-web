import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Store } from '@ngrx/store';
import { AuditFields } from 'src/app/shared/models/audit-fields.model';
import { ModalMode } from '../../models/modal-mode.model';
import { publicLanguageReducer } from '../../state/languages/public-language.reducer';

@Component({
  selector: 'app-entity-modal-audit',
  templateUrl: './entity-modal-audit.component.html',
  styleUrls: ['./entity-modal-audit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EntityModalAuditComponent<T extends AuditFields> {
  private store = inject(Store);

  @Input({
    required: true,
  })
  loading: boolean = false;
  @Input({
    required: true,
  })
  modalMode!: ModalMode;
  @Input({
    required: true,
  })
  entity!: T | undefined;

  language$ = this.store.select(publicLanguageReducer.getOne);
  language = toSignal(this.language$);

  get ModalMode() {
    return ModalMode;
  }
}
