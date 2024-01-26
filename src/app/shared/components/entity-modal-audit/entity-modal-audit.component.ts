import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AuditFields } from 'src/app/shared/models/audit-fields.model';
import { ModalMode } from '../../models/modal-mode.model';

@Component({
  selector: 'app-entity-modal-audit',
  templateUrl: './entity-modal-audit.component.html',
  styleUrls: ['./entity-modal-audit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EntityModalAuditComponent<T extends AuditFields> {
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

  get ModalMode() {
    return ModalMode;
  }
}
