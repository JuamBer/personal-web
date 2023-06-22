import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot, ResolveFn, Router, RouterStateSnapshot } from '@angular/router';
import { EntityModal } from '@app/backoffice/models/entity-modal.model';
import { ModalMode, ModalParams } from '@app/shared/models/modal-config/modal-mode';
import { Action, ActionStatus, ActionType } from '@app/shared/state/common/common-state';
import { Naming, NumberMode } from '@app/shared/state/common/common.names';
import { FormUtils } from '@app/shared/utils/FormUtils';
import { RouterUtils } from '@app/shared/utils/router.utils';
import { Store } from '@ngrx/store';
import { Observable, Subject, from } from 'rxjs';
import { filter, map, skip, take, takeUntil } from 'rxjs/operators';
import { SkillType, SkillTypeFormGroup } from '../models/skill-type.model';
import { SkillTypeService } from '../services/skill-type.service';
import { skillTypeActions } from '../state/skill-type.actions';
import { skillTypeNames } from '../state/skill-type.names';
import { skillTypeReducer } from '../state/skill-type.reducer';

export const skillTypeModalTitleResolver: ResolveFn<string> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  return from(inject(SkillTypeService).getTitle(route.paramMap.get('id'))).pipe(
    map((selected) => 'Juan Sáez García | Skill Types | ' + selected.name),
  );
};

@Component({
  selector: 'app-skill-type-modal',
  templateUrl: './skill-type-modal.component.html',
  styleUrls: ['./skill-type-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillTypeModalComponent implements OnInit, EntityModal<SkillType> {
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private store = inject(Store);
  private fb = inject(FormBuilder);

  visible = true;
  form: SkillTypeFormGroup = this.fb.group({
    name: this.fb.control<string | undefined>(undefined, [Validators.required]),
    description: this.fb.control<string | undefined>(undefined, [Validators.required]),
  });

  unsubscribe$: Subject<boolean> = new Subject();
  params$: Observable<ModalParams> = this.route.params.pipe(
    takeUntil(this.unsubscribe$),
    map((params) => params as ModalParams),
  );
  loading$: Observable<boolean> = this.store.select(skillTypeReducer.getLoading).pipe(takeUntil(this.unsubscribe$));
  modalMode$: Observable<ModalMode> = this.params$.pipe(
    takeUntil(this.unsubscribe$),
    map((params) => ModalMode[params.modalMode]),
  );
  entity$: Observable<SkillType> = this.store.select(skillTypeReducer.getOne).pipe(
    takeUntil(this.unsubscribe$),
    filter((entity) => !!entity),
  );
  action$: Observable<Action> = this.store.select(skillTypeReducer.getAction).pipe(
    takeUntil(this.unsubscribe$),
    skip(1),
    filter((action) => action.type === ActionType.CREATE_ONE && action.status === ActionStatus.SUCCESS),
  );

  ngOnInit(): void {
    this.params$
      .pipe(filter((params) => !!params.id))
      .subscribe((params) => this.store.dispatch(skillTypeActions.loadOne({ id: params.id })));
    this.action$.subscribe(() => {
      this.hide();
    });
    this.modalMode$.pipe(filter((modalMode) => modalMode === ModalMode.VIEW)).subscribe(() => {
      this.form.disable();
    });
    this.entity$.subscribe((entity) => {
      if (!this.form.controls.id) {
        this.form.addControl('id', this.fb.control<string>(entity.id, [Validators.required]));
      }
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
    this.store.dispatch(skillTypeActions.unload());
    this.router.navigate([RouterUtils.getParentRoute(this.router.url, 1)]);
  }

  send() {
    if (this.form.invalid) {
      FormUtils.markAllAsDirtyAndTouched(this.form);
    } else {
      this.modalMode$.pipe(take(1)).subscribe((modalMode) => {
        switch (modalMode) {
          case ModalMode.CREATE:
            this.store.dispatch(skillTypeActions.create({ payload: this.form.value }));
            break;
          case ModalMode.UPDATE:
            this.store.dispatch(skillTypeActions.update({ payload: this.form.value }));
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
    return skillTypeNames;
  }
}
