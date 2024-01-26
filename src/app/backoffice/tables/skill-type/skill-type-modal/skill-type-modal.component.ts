import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot, ResolveFn, Router } from '@angular/router';

import { toSignal } from '@angular/core/rxjs-interop';
import { Action, Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Observable, Subject, combineLatest, from } from 'rxjs';
import { filter, map, skip, switchMap, take, takeUntil } from 'rxjs/operators';
import { appRootTitle } from 'src/app/app.component';
import { InputTranslationsType } from 'src/app/shared/components/input-translations/models/input-translations.models';
import { EntityModal } from 'src/app/shared/models/entity-modal.model';
import { ModalMode } from 'src/app/shared/models/modal-mode.model';
import { ModalParams } from 'src/app/shared/models/modal-params.model';
import { TranslationProvider } from 'src/app/shared/models/translation-provider.model';
import { Translation, TranslationFormGroup } from 'src/app/shared/models/translation.model';
import { ActionStatus, ActionType } from 'src/app/shared/state/common/common-state';
import { Naming, NumberMode } from 'src/app/shared/state/common/common.names';
import { publicLanguageReducer } from 'src/app/shared/state/languages/public-language.reducer';
import { FormUtils } from 'src/app/shared/utils/form-utils';
import { RouterUtils } from 'src/app/shared/utils/router.utils';
import { Language } from '../../language/models/language.model';
import { SkillType, SkillTypeFormGroup } from '../models/skill-type.model';
import { SkillTypeService } from '../services/skill-type.service';
import { skillTypeActions } from '../state/skill-type.actions';
import { skillTypeNames } from '../state/skill-type.names';
import { skillTypeReducer } from '../state/skill-type.reducer';

export const skillTypeModalTitleResolver: ResolveFn<string> = (route: ActivatedRouteSnapshot) => {
  const store = inject(Store);
  const skillTypeSrv = inject(SkillTypeService);
  const translateSrv = inject(TranslateService);

  return store.select(publicLanguageReducer.getOne).pipe(
    filter((i) => !!i),
    switchMap((language) =>
      translateSrv
        .get(`tables.${skillTypeNames.name(Naming.CAMEL_CASE, NumberMode.SINGULAR)}.singular`)
        .pipe(
          !route.paramMap.get('id')
            ? map((table) => `${appRootTitle} | ${table} | ${translateSrv.instant('buttons.new', { name: '' })}`)
            : switchMap((table) =>
                from(skillTypeSrv.getTitle(route.paramMap.get('id')!)).pipe(
                  map(
                    (selected) =>
                      `${appRootTitle} | ${table} | ${selected?.nameTranslations?.find(
                        (translation: Translation) => translation.language === language?.acronym,
                      )?.value}`,
                  ),
                ),
              ),
        ),
    ),
  );
};
@Component({
  selector: 'app-skill-type-modal',
  templateUrl: './skill-type-modal.component.html',
  styleUrls: ['./skill-type-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillTypeModalComponent extends TranslationProvider implements OnInit, OnDestroy, EntityModal<SkillType> {
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private store = inject(Store);
  private fb = inject(FormBuilder);

  visible = true;
  form: SkillTypeFormGroup = this.fb.nonNullable.group({
    nameTranslations: this.fb.nonNullable.array<TranslationFormGroup>([]),
    descriptionTranslations: this.fb.nonNullable.array<TranslationFormGroup>([]),
  });

  unsubscribe$ = new Subject<void>();
  params$: Observable<ModalParams> = this.route.params.pipe(map((params) => params as ModalParams));

  loading$: Observable<boolean> = this.store.select(skillTypeReducer.getLoading);
  loading$$ = toSignal(this.loading$, {
    initialValue: false,
  });

  modalMode$: Observable<ModalMode> = this.params$.pipe(map((params) => ModalMode[params.modalMode]));
  modalMode$$ = toSignal(this.modalMode$, {
    initialValue: ModalMode.VIEW,
  });

  entity$: Observable<SkillType | undefined> = this.store
    .select(skillTypeReducer.getOne)
    .pipe(filter((entity) => !!entity));
  entity$$ = toSignal(this.entity$);

  action$: Observable<Action | undefined> = this.store.select(skillTypeReducer.getAction).pipe(
    skip(1),
    filter(
      (action) =>
        !!action &&
        (action.type === ActionType.CREATE_ONE || action.type === ActionType.UPDATE_ONE) &&
        action.status === ActionStatus.SUCCESS,
    ),
  );
  showErrors$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  language$: Observable<Language | undefined> = this.store.select(publicLanguageReducer.getOne);
  language$$ = toSignal(this.language$);

  ngOnInit() {
    this.handleLoadData();
    this.handleParams();
    this.handleEntity();
    this.handleAction();
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
    this.store.dispatch(skillTypeActions.unload());
  }

  handleLoadData() {}

  handleParams() {
    this.params$
      .pipe(
        takeUntil(this.unsubscribe$),
        filter((params) => !!params.id),
      )
      .subscribe((params) => {
        if (!params.id) return;
        this.store.dispatch(skillTypeActions.loadOne({ id: params.id }));
      });
  }

  handleEntity() {
    combineLatest([this.entity$, this.modalMode$])
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(([entity, modalMode]) => {
        if (!entity || !modalMode) return;

        if (!this.form.controls.id) {
          this.form.addControl(
            'id',
            this.fb.nonNullable.control<string | undefined | null>(entity.id, [Validators.required]),
          );
        }

        this.form.patchValue({
          id: entity.id,
          nameTranslations: entity.nameTranslations,
          descriptionTranslations: entity.descriptionTranslations,
        });

        if (modalMode === ModalMode.VIEW) {
          this.form.disable();
        }
      });
  }

  handleAction() {
    this.action$.pipe(takeUntil(this.unsubscribe$)).subscribe(() => {
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
      this.showErrors$.next(true);
    } else {
      this.modalMode$.pipe(take(1)).subscribe((modalMode) => {
        switch (modalMode) {
          case ModalMode.CREATE:
            this.store.dispatch(skillTypeActions.create({ payload: this.form.value as SkillType }));
            break;
          case ModalMode.UPDATE:
            this.store.dispatch(skillTypeActions.update({ payload: this.form.value as SkillType }));
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
  get InputTranslationsType() {
    return InputTranslationsType;
  }
  get ModalMode() {
    return ModalMode;
  }
}
