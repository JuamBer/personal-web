import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject, Subject, map, skip, take, takeUntil } from 'rxjs';
import { ModalMode } from '../../models/modal-mode.model';

@Component({
  selector: 'app-entity-modal-buttons',
  templateUrl: './entity-modal-buttons.component.html',
  styleUrls: ['./entity-modal-buttons.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EntityModalButtonsComponent<T> implements OnInit, OnDestroy {
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

  destroy$ = new Subject<void>();
  pendingChanges$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  pendingChanges = toSignal(this.pendingChanges$, {
    initialValue: false,
  });
  firstFormValue!: T;

  ngOnInit(): void {
    this.form.valueChanges.pipe(skip(1), take(1), takeUntil(this.destroy$)).subscribe((firstFormValue) => {
      this.firstFormValue = firstFormValue;
    });

    this.form.valueChanges
      .pipe(
        skip(2),
        takeUntil(this.destroy$),
        map((v) => JSON.stringify(v) !== JSON.stringify(this.firstFormValue)),
      )
      .subscribe((pendingChanges) => {
        this.pendingChanges$.next(pendingChanges);
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  get ModalMode() {
    return ModalMode;
  }
}
