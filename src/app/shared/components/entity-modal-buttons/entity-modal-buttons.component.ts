import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  EventEmitter,
  inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject, map, skip, take } from 'rxjs';
import { ModalMode } from '../../models/modal-mode.model';

@Component({
  selector: 'app-entity-modal-buttons',
  templateUrl: './entity-modal-buttons.component.html',
  styleUrls: ['./entity-modal-buttons.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EntityModalButtonsComponent<T> implements OnInit {
  private destroyRef = inject(DestroyRef);

  @Input({
    required: true,
  })
  loading: boolean = false;
  @Input({
    required: true,
  })
  name!: string;
  @Input({
    required: true,
  })
  modalMode!: ModalMode;
  @Input({
    required: true,
  })
  form!: FormGroup;
  @Output() cancel = new EventEmitter();
  @Output() submitForm = new EventEmitter();

  pendingChanges$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  pendingChanges = toSignal(this.pendingChanges$, {
    initialValue: false,
  });
  firstFormValue!: T;

  ngOnInit(): void {
    this.form.valueChanges.pipe(skip(1), take(1), takeUntilDestroyed(this.destroyRef)).subscribe((firstFormValue) => {
      this.firstFormValue = firstFormValue;
    });

    this.form.valueChanges
      .pipe(
        skip(2),
        takeUntilDestroyed(this.destroyRef),
        map((v) => JSON.stringify(v) !== JSON.stringify(this.firstFormValue)),
      )
      .subscribe((pendingChanges) => {
        this.pendingChanges$.next(pendingChanges);
      });
  }

  get ModalMode() {
    return ModalMode;
  }
}
