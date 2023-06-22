import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AuditFields } from '@app/backoffice/tables/certificate-group/models/certificate-group.model';
import { ModalMode } from '@app/shared/models/modal-config/modal-mode';

@Component({
  selector: 'app-entity-modal-audit',
  templateUrl: './entity-modal-audit.component.html',
  styleUrls: ['./entity-modal-audit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EntityModalAuditComponent<T extends AuditFields> {
  @Input() loading: boolean = false;
  @Input() modalMode: ModalMode;
  @Input() entity: T;

  get ModalMode() {
    return ModalMode;
  }
}
