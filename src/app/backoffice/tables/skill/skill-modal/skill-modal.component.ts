import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot, ResolveFn, Router, RouterStateSnapshot } from '@angular/router';
import { EntityModal } from '@app/backoffice/models/entity-modal.model';
import { ModalMode, ModalParams } from '@app/shared/models/modal-config/modal-mode';
import { ToastMessage } from '@app/shared/models/toast-message';
import { ActionStatus, ActionType } from '@app/shared/state/common/common-state';
import { Naming, NumberMode } from '@app/shared/state/common/common.names';
import { FormUtils } from '@app/shared/utils/FormUtils';
import { RouterUtils } from '@app/shared/utils/router.utils';
import { Action, Store } from '@ngrx/store';
import { Observable, Subject, from } from 'rxjs';
import { filter, map, skip, take, takeUntil } from 'rxjs/operators';
import { SkillType } from '../../skill-type/models/skill-type.model';
import { skillTypeActions } from '../../skill-type/state/skill-type.actions';
import { skillTypeReducer } from '../../skill-type/state/skill-type.reducer';
import { Skill, SkillFormGroup } from '../models/skill.model';
import { SkillService } from '../services/skill.service';
import { skillActions } from '../state/skill.actions';
import { skillNames } from '../state/skill.names';
import { skillReducer } from '../state/skill.reducer';

export const skillModalTitleResolver: ResolveFn<string> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  return from(inject(SkillService).getTitle(route.paramMap.get('id'))).pipe(
    map((selected) => 'Juan Sáez García | Skills | ' + selected.name),
  );
};

@Component({
  selector: 'app-skill-modal',
  templateUrl: './skill-modal.component.html',
  styleUrls: ['./skill-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillModalComponent implements OnInit, EntityModal<Skill> {
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private store = inject(Store);
  private fb = inject(FormBuilder);

  visible = true;
  form: SkillFormGroup = this.fb.group({
    name: this.fb.control<string | undefined>(undefined, [Validators.required]),
    skillType: this.fb.control<SkillType | undefined>(undefined, [Validators.required]),
    percentage: this.fb.control<number>(0, [Validators.required]),
  });

  unsubscribe$: Subject<boolean> = new Subject();
  params$: Observable<ModalParams> = this.route.params.pipe(
    takeUntil(this.unsubscribe$),
    map((params) => params as ModalParams),
  );
  loading$: Observable<boolean> = this.store.select(skillReducer.getLoading).pipe(takeUntil(this.unsubscribe$));
  modalMode$: Observable<ModalMode> = this.params$.pipe(
    takeUntil(this.unsubscribe$),
    map((params) => ModalMode[params.modalMode]),
  );
  entity$: Observable<Skill> = this.store.select(skillReducer.getOne).pipe(
    takeUntil(this.unsubscribe$),
    filter((entity) => !!entity),
  );
  message$: Observable<ToastMessage> = this.store.select(skillReducer.getMessage).pipe(
    takeUntil(this.unsubscribe$),
    filter((i) => !!i),
  );
  action$: Observable<Action> = this.store.select(skillReducer.getAction).pipe(
    takeUntil(this.unsubscribe$),
    skip(1),
    filter((action) => action.type === ActionType.CREATE_ONE && action.status === ActionStatus.SUCCESS),
  );
  skillTypes$: Observable<SkillType[]> = this.store.select(skillTypeReducer.getAll);

  ngOnInit(): void {
    this.store.dispatch(skillTypeActions.loadAll({}));

    this.params$
      .pipe(filter((params) => !!params.id))
      .subscribe((params) => this.store.dispatch(skillActions.loadOne({ id: params.id })));
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
        skillType: entity.skillType,
        percentage: entity.percentage,
      });
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }

  hide() {
    this.store.dispatch(skillActions.unload());
    this.router.navigate([RouterUtils.getParentRoute(this.router.url, 1)]);
  }

  send() {
    if (this.form.invalid) {
      FormUtils.markAllAsDirtyAndTouched(this.form);
    } else {
      this.modalMode$.pipe(take(1)).subscribe((modalMode) => {
        switch (modalMode) {
          case ModalMode.CREATE:
            this.store.dispatch(skillActions.create({ payload: this.form.value }));
            break;
          case ModalMode.UPDATE:
            this.store.dispatch(skillActions.update({ payload: this.form.value }));
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
    return skillNames;
  }
}