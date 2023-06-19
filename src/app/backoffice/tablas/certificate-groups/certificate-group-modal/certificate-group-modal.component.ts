import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot, ResolveFn, Router, RouterStateSnapshot } from '@angular/router';
//CERTIFICATEGROUP
import { EntityModal } from '@app/backoffice/models/entity-modal.model';
import { ModalMode, ModalParams } from '@app/shared/models/modal-config/modal-mode';
import { ToastMessage } from '@app/shared/models/toast-message';
import { Action, ActionStatus, ActionType } from '@app/shared/state/common/common-state';
import { Naming, NumberMode } from '@app/shared/state/common/common.names';
import { FormUtils } from '@app/shared/utils/FormUtils';
import { RouterUtils } from '@app/shared/utils/router.utils';
import { Store } from '@ngrx/store';
import { Observable, Subject, from } from 'rxjs';
import { filter, map, skip, take, takeUntil } from 'rxjs/operators';
import { CertificateGroup, CertificateGroupFormGroup } from '../models/certificate-group.model';
import { CertificateGroupService } from '../services/certificate-group.service';
import { CertificateGroupActions } from '../state/certificate-group.actions';
import { certificateGroupNames } from '../state/certificate-group.names';
import { CertificateGroupReducer } from '../state/certificate-group.reducer';

export const certificateGroupModalTitleResolver: ResolveFn<string> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  return from(inject(CertificateGroupService).getTitle(Number(route.paramMap.get('id')))).pipe(
    map((selected) => 'Juan Sáez García | Certificate Groups | ' + selected.name),
  );
};

@Component({
  selector: 'app-certificate-group-modal',
  templateUrl: './certificate-group-modal.component.html',
  styleUrls: ['./certificate-group-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CertificateGroupModalComponent implements OnInit, EntityModal<CertificateGroup> {
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private store = inject(Store);
  private fb = inject(FormBuilder);
  private certificateGroupActions = inject(CertificateGroupActions);
  private certificateGroupReducer = inject(CertificateGroupReducer);

  visible = true;
  form: CertificateGroupFormGroup = this.fb.group({
    id: this.fb.control<number | undefined>(new Date().getTime()),
    name: this.fb.control<string | undefined>(undefined, [Validators.required]),
    description: this.fb.control<string | undefined>(undefined, [Validators.required]),
  });

  unsubscribe$: Subject<boolean> = new Subject();
  params$: Observable<ModalParams> = this.route.params.pipe(
    takeUntil(this.unsubscribe$),
    map((params) => params as ModalParams),
  );
  loading$: Observable<boolean> = this.store
    .select(this.certificateGroupReducer.getLoading)
    .pipe(takeUntil(this.unsubscribe$));
  modalMode$: Observable<ModalMode> = this.params$.pipe(
    takeUntil(this.unsubscribe$),
    map((params) => ModalMode[params.modalMode]),
  );
  entity$: Observable<CertificateGroup> = this.store.select(this.certificateGroupReducer.getOne).pipe(
    takeUntil(this.unsubscribe$),
    filter((entity) => !!entity),
  );
  message$: Observable<ToastMessage> = this.store.select(this.certificateGroupReducer.getMessage).pipe(
    takeUntil(this.unsubscribe$),
    filter((i) => !!i),
  );
  action$: Observable<Action> = this.store.select(this.certificateGroupReducer.getAction).pipe(
    takeUntil(this.unsubscribe$),
    skip(1),
    filter((action) => action.type === ActionType.CREATE_ONE && action.status === ActionStatus.SUCCESS),
  );

  ngOnInit(): void {
    this.params$.subscribe((params) =>
      this.store.dispatch(this.certificateGroupActions.loadOne({ id: Number(params.id) })),
    );
    this.action$.subscribe(() => {
      this.hide();
    });
    this.modalMode$.pipe(filter((modalMode) => modalMode === ModalMode.VIEW)).subscribe(() => {
      this.form.disable();
    });
    this.entity$.subscribe((entity) => {
      this.form.patchValue({
        id: entity.id,
        name: entity.name,
        description: entity.description,
      });
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }

  hide() {
    this.store.dispatch(this.certificateGroupActions.unload());
    this.router.navigate([RouterUtils.getParentRoute(this.router.url, 1)]);
  }

  send() {
    if (this.form.invalid) {
      FormUtils.markAllAsDirtyAndTouched(this.form);
    } else {
      this.modalMode$.pipe(take(1)).subscribe((modalMode) => {
        switch (modalMode) {
          case ModalMode.CREATE:
            this.store.dispatch(this.certificateGroupActions.create({ payload: this.form.value }));
            break;
          case ModalMode.UPDATE:
            this.store.dispatch(this.certificateGroupActions.update({ payload: this.form.value }));
            break;
        }
      });
    }
  }

  get NumberMode() {
    return NumberMode;
  }
  get Naming() {
    return Naming;
  }
  get names() {
    return certificateGroupNames;
  }
}
