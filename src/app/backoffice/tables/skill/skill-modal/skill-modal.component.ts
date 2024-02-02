import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot, ResolveFn, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { Subject, combineLatest, from } from 'rxjs';
import { filter, map, skip, switchMap, take, takeUntil } from 'rxjs/operators';
import { appRootTitle } from 'src/app/app.component';
import { EntityModal } from 'src/app/shared/models/entity-modal.model';
import { ModalMode } from 'src/app/shared/models/modal-mode.model';
import { ModalParams } from 'src/app/shared/models/modal-params.model';
import { TranslationProvider } from 'src/app/shared/models/translation-provider.model';
import { ActionStatus, ActionType, hasPendingActions } from 'src/app/shared/state/common/common-state';
import { addActionId } from 'src/app/shared/state/common/common.actions';
import { Naming, NumberMode } from 'src/app/shared/state/common/common.names';
import { publicLanguageReducer } from 'src/app/shared/state/languages/public-language.reducer';
import { FormUtils } from 'src/app/shared/utils/form-utils';
import { RouterUtils } from 'src/app/shared/utils/router.utils';
import { SkillType } from '../../skill-type/models/skill-type.model';
import { skillTypeActions } from '../../skill-type/state/skill-type.actions';
import { skillTypeReducer } from '../../skill-type/state/skill-type.reducer';
import { Skill, SkillFormGroup } from '../models/skill.model';
import { SkillService } from '../services/skill.service';
import { skillActions } from '../state/skill.actions';
import { skillNames } from '../state/skill.names';
import { skillReducer } from '../state/skill.reducer';

export const skillModalTitleResolver: ResolveFn<string> = (route: ActivatedRouteSnapshot) => {
  const store = inject(Store);
  const skillSrv = inject(SkillService);
  const translateSrv = inject(TranslateService);
  return store.select(publicLanguageReducer.getOne).pipe(
    filter((i) => !!i),
    switchMap(() =>
      translateSrv
        .get(`tables.${skillNames.name(Naming.CAMEL_CASE, NumberMode.SINGULAR)}.singular`)
        .pipe(
          !route.paramMap.get('id')
            ? map((table) => `${appRootTitle} | ${table} | ${translateSrv.instant('buttons.new', { name: '' })}`)
            : switchMap((table) =>
                from(skillSrv.getTitle(route.paramMap.get('id')!)).pipe(
                  map((selected) => `${appRootTitle} | ${table} | ${selected.name}`),
                ),
              ),
        ),
    ),
  );
};

@Component({
  selector: 'app-skill-modal',
  templateUrl: './skill-modal.component.html',
  styleUrls: ['./skill-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillModalComponent extends TranslationProvider implements OnInit, OnDestroy, EntityModal<Skill> {
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private store = inject(Store);
  private fb = inject(FormBuilder);

  visible = true;
  form: SkillFormGroup = this.fb.nonNullable.group({
    name: this.fb.nonNullable.control<string | undefined | null>(undefined, [Validators.required]),
    skillType: this.fb.nonNullable.control<SkillType | undefined | null>(undefined, [Validators.required]),
    percentage: this.fb.nonNullable.control<number | null>(0, [Validators.required]),
  });

  destroy$ = new Subject<void>();
  params$ = this.route.params.pipe(map((params) => params as ModalParams));

  loading$ = hasPendingActions(this.store.select(skillReducer.getAction));
  loading = toSignal(this.loading$, {
    initialValue: false,
  });

  modalMode$ = this.params$.pipe(map((params) => ModalMode[params.modalMode]));
  modalMode = toSignal(this.modalMode$, {
    initialValue: ModalMode.VIEW,
  });

  entity$ = this.store.select(skillReducer.getOne).pipe(filter((entity) => !!entity));
  entity = toSignal(this.entity$);

  action$ = this.store.select(skillReducer.getAction).pipe(
    skip(1),
    filter(
      (action) =>
        !!action &&
        (action.type === ActionType.CREATE_ONE || action.type === ActionType.UPDATE_ONE) &&
        action.status === ActionStatus.SUCCESS,
    ),
  );

  skillTypes$ = this.store.select(skillTypeReducer.getAll);

  language$ = this.store.select(publicLanguageReducer.getOne);
  language = toSignal(this.language$);

  ngOnInit() {
    this.handleLoadData();
    this.handleParams();
    this.handleEntity();
    this.handleAction();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    this.store.dispatch(skillActions.unload());
  }

  handleLoadData() {
    this.store.dispatch(skillTypeActions.loadAll(addActionId({})));
  }

  handleParams() {
    this.params$
      .pipe(
        takeUntil(this.destroy$),
        filter((params) => !!params.id),
      )
      .subscribe((params) => {
        if (!params.id) return;
        this.store.dispatch(skillActions.loadOne(addActionId({ id: params.id })));
      });
  }

  handleEntity() {
    combineLatest([this.entity$, this.modalMode$])
      .pipe(takeUntil(this.destroy$))
      .subscribe(([entity, modalMode]) => {
        if (!entity || !modalMode) return;

        if (!this.form.controls.id) {
          this.form.addControl('id', this.fb.nonNullable.control<string>(entity.id, [Validators.required]));
        }

        this.form.patchValue(entity);

        if (modalMode === ModalMode.VIEW) {
          this.form.disable();
        }
      });
  }

  handleAction() {
    this.action$.pipe(takeUntil(this.destroy$)).subscribe((action) => {
      if (!action) return;
      this.hide();
    });
  }

  hide() {
    this.visible = false;
    this.modalMode$.pipe(take(1)).subscribe((modalMode) => {
      if (modalMode === ModalMode.CREATE) {
        this.router.navigate([RouterUtils.getParentRoute(this.router.url, 1)]);
      } else {
        this.router.navigate([RouterUtils.getParentRoute(this.router.url, 2)]);
      }
    });
  }

  send() {
    if (this.form.invalid) {
      FormUtils.markAllAsDirtyAndTouched(this.form);
    } else {
      this.modalMode$.pipe(take(1)).subscribe((modalMode) => {
        switch (modalMode) {
          case ModalMode.CREATE:
            this.store.dispatch(skillActions.create(addActionId({ payload: this.form.value as Skill })));
            break;
          case ModalMode.UPDATE:
            this.store.dispatch(skillActions.update(addActionId({ payload: this.form.value as Skill })));
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
