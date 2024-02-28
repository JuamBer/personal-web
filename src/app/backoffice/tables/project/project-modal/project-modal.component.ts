import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot, ResolveFn, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Subject, combineLatest, from } from 'rxjs';
import { filter, map, skip, switchMap, take, takeUntil } from 'rxjs/operators';
import { appRootTitle } from 'src/app/app.component';
import { InputTranslationsType } from 'src/app/shared/components/input-translations/models/input-translations.models';
import { EntityModal } from 'src/app/shared/models/entity-modal.model';
import { ModalMode } from 'src/app/shared/models/modal-mode.model';
import { ModalParams } from 'src/app/shared/models/modal-params.model';
import { TranslationProvider } from 'src/app/shared/models/translation-provider.model';
import { TranslationFormGroup } from 'src/app/shared/models/translation.model';
import { ActionStatus, ActionType, hasPendingActions } from 'src/app/shared/state/common/common-state';
import { addActionId } from 'src/app/shared/state/common/common.actions';
import { Naming, NumberMode } from 'src/app/shared/state/common/common.names';
import { publicLanguageReducer } from 'src/app/shared/state/languages/public-language.reducer';
import { FormUtils } from 'src/app/shared/utils/form-utils';
import { RouterUtils } from 'src/app/shared/utils/router.utils';
import { Company } from '../../company/models/company.model';
import { companyActions } from '../../company/state/company.actions';
import { companyReducer } from '../../company/state/company.reducer';
import { Project, ProjectFormGroup } from '../models/project.model';
import { ProjectService } from '../services/project.service';
import { projectActions } from '../state/project.actions';
import { projectNames } from '../state/project.names';
import { projectReducer } from '../state/project.reducer';

export const projectModalTitleResolver: ResolveFn<string> = (route: ActivatedRouteSnapshot) => {
  const store = inject(Store);
  const projectSrv = inject(ProjectService);
  const translateSrv = inject(TranslateService);
  return store.select(publicLanguageReducer.getOne).pipe(
    filter((i) => !!i),
    switchMap(() =>
      translateSrv
        .get(`tables.${projectNames.name(Naming.CAMEL_CASE, NumberMode.SINGULAR)}.singular`)
        .pipe(
          !route.paramMap.get('id')
            ? map((table) => `${appRootTitle} | ${table} | ${translateSrv.instant('buttons.new', { name: '' })}`)
            : switchMap((table) =>
                from(projectSrv.getTitle(route.paramMap.get('id')!)).pipe(
                  map((selected) => `${appRootTitle} | ${table} | ${selected.name}`),
                ),
              ),
        ),
    ),
  );
};

@Component({
  selector: 'app-project-modal',
  templateUrl: './project-modal.component.html',
  styleUrls: ['./project-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectModalComponent extends TranslationProvider implements OnInit, OnDestroy, EntityModal<Project> {
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private store = inject(Store);
  private fb = inject(FormBuilder);

  visible = true;
  form: ProjectFormGroup = this.fb.nonNullable.group({
    name: this.fb.nonNullable.control<string | undefined>(undefined, [Validators.required]),
    logo: this.fb.nonNullable.control<string | undefined>(undefined),
    descriptionTranslations: this.fb.nonNullable.array<TranslationFormGroup>([]),
    date: this.fb.nonNullable.control<Date | undefined>(undefined),
    company: this.fb.nonNullable.control<Company | undefined>(undefined),
    technologies: this.fb.nonNullable.control<string[]>([]),
    urls: this.fb.nonNullable.group({
      web: this.fb.nonNullable.control<string | undefined>(undefined),
      playStore: this.fb.nonNullable.control<string | undefined>(undefined),
      appStore: this.fb.nonNullable.control<string | undefined>(undefined),
      microsoftStore: this.fb.nonNullable.control<string | undefined>(undefined),
      github: this.fb.nonNullable.control<string | undefined>(undefined),
    }),
  });

  destroy$ = new Subject<void>();

  params$ = this.route.params.pipe(map((params) => params as ModalParams));

  loading$ = hasPendingActions(this.store.select(projectReducer.getAction), [
    ActionType.LOAD_ONE,
    ActionType.CREATE_ONE,
    ActionType.UPDATE_ONE,
  ]);
  loading = toSignal(this.loading$, {
    initialValue: false,
  });

  modalMode$ = this.params$.pipe(map((params) => ModalMode[params.modalMode]));
  modalMode = toSignal(this.modalMode$, {
    initialValue: ModalMode.VIEW,
  });

  entity$ = this.store.select(projectReducer.getOne).pipe(filter((entity) => !!entity));
  entity = toSignal(this.entity$);

  action$ = this.store.select(projectReducer.getAction).pipe(
    skip(1),
    filter(
      (action) =>
        !!action &&
        (action.type === ActionType.CREATE_ONE || action.type === ActionType.UPDATE_ONE) &&
        action.status === ActionStatus.SUCCESS,
    ),
  );

  showErrors$ = new BehaviorSubject<boolean>(false);

  language$ = this.store.select(publicLanguageReducer.getOne);
  language = toSignal(this.language$);

  companies$ = this.store.select(companyReducer.getAll);
  companies = toSignal(this.companies$, {
    initialValue: [],
  });

  ngOnInit() {
    this.handleLoadData();
    this.handleParams();
    this.handleEntity();
    this.handleAction();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    this.store.dispatch(projectActions.unload());
  }

  handleLoadData() {
    this.store.dispatch(companyActions.loadAll(addActionId({ feedback: new Set([ActionStatus.ERROR]) })));
  }

  handleParams() {
    this.params$
      .pipe(
        takeUntil(this.destroy$),
        filter((params) => !!params.id),
      )
      .subscribe((params) => {
        if (!params.id) return;
        this.store.dispatch(
          projectActions.loadOne(
            addActionId({
              feedback: new Set([ActionStatus.ERROR]),
              id: params.id,
            }),
          ),
        );
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
      this.showErrors$.next(true);
    } else {
      this.modalMode$.pipe(take(1)).subscribe((modalMode) => {
        switch (modalMode) {
          case ModalMode.CREATE:
            this.store.dispatch(
              projectActions.create(
                addActionId({
                  feedback: new Set([ActionStatus.PENDING, ActionStatus.SUCCESS, ActionStatus.ERROR]),
                  payload: this.form.value as Project,
                }),
              ),
            );
            break;
          case ModalMode.UPDATE:
            this.store.dispatch(
              projectActions.update(
                addActionId({
                  feedback: new Set([ActionStatus.PENDING, ActionStatus.SUCCESS, ActionStatus.ERROR]),
                  payload: this.form.value as Project,
                }),
              ),
            );
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
    return projectNames;
  }
  get ModalMode() {
    return ModalMode;
  }
  get InputTranslationsType() {
    return InputTranslationsType;
  }
}
