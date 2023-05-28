import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ModalMode } from '@app/shared/models/modal-config/modal-mode';

@Component({
  selector: 'app-entity-modal-buttons',
  templateUrl: './entity-modal-buttons.component.html',
  styleUrls: ['./entity-modal-buttons.component.scss'],
})
export class EntityModalButtonsComponent {
  @Input() form: FormGroup;
  @Input() name: string;
  @Input() modalMode: ModalMode;
  @Output() cancel = new EventEmitter();
}
