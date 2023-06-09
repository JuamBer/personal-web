import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject, Subject, map, skip, take, takeUntil } from 'rxjs';
import { ModalMode } from '../../models/modal-mode';

@Component({
  selector: 'app-entity-modal-buttons',
  templateUrl: './entity-modal-buttons.component.html',
  styleUrls: ['./entity-modal-buttons.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EntityModalButtonsComponent<T> implements OnInit, OnDestroy {
  @Input() loading: boolean = false;
  @Input() name: string;
  @Input() modalMode: ModalMode;
  @Input() form: FormGroup;
  @Output() cancel = new EventEmitter();
  @Output() submit = new EventEmitter();

  unsubscribe$: Subject<boolean> = new Subject();
  pendingChanges$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  firstFormValue: T;

  ngOnInit(): void {
    this.form.valueChanges.pipe(skip(1), take(1), takeUntil(this.unsubscribe$)).subscribe((firstFormValue) => {
      this.firstFormValue = firstFormValue;
    });

    this.form.valueChanges
      .pipe(
        skip(2),
        takeUntil(this.unsubscribe$),
        map((v) => JSON.stringify(v) !== JSON.stringify(this.firstFormValue)),
      )
      .subscribe((pendingChanges) => {
        this.pendingChanges$.next(pendingChanges);
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }

  get ModalMode() {
    return ModalMode;
  }
}
