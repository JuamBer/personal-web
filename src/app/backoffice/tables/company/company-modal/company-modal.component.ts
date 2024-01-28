import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot, ResolveFn, Router } from '@angular/router';
import { Action, Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Observable, Subject, combineLatest, from } from 'rxjs';
import { filter, map, skip, startWith, switchMap, take, takeUntil } from 'rxjs/operators';
import { appRootTitle } from 'src/app/app.component';
import { InputTranslationsType } from 'src/app/shared/components/input-translations/models/input-translations.models';
import { EntityModal } from 'src/app/shared/models/entity-modal.model';
import { ModalMode } from 'src/app/shared/models/modal-mode.model';
import { ModalParams } from 'src/app/shared/models/modal-params.model';
import { SelectOption } from 'src/app/shared/models/select-option.model';
import { TranslationProvider } from 'src/app/shared/models/translation-provider.model';
import { TranslationFormGroup } from 'src/app/shared/models/translation.model';
import { ActionStatus, ActionType } from 'src/app/shared/state/common/common-state';
import { Naming, NumberMode } from 'src/app/shared/state/common/common.names';
import { publicLanguageReducer } from 'src/app/shared/state/languages/public-language.reducer';
import { FormUtils } from 'src/app/shared/utils/form-utils';
import { RouterUtils } from 'src/app/shared/utils/router.utils';
import { Language } from '../../language/models/language.model';
import { CompanyType } from '../models/company-type.model';
import { Company, CompanyFormGroup } from '../models/company.model';
import { CompanyService } from '../services/company.service';
import { companyActions } from '../state/company.actions';
import { companyNames } from '../state/company.names';
import { companyReducer } from '../state/company.reducer';

export const companyModalTitleResolver: ResolveFn<string> = (route: ActivatedRouteSnapshot) => {
  const store = inject(Store);
  const companyService = inject(CompanyService);
  const translateSrv = inject(TranslateService);

  return store.select(publicLanguageReducer.getOne).pipe(
    filter((i) => !!i),
    switchMap(() =>
      translateSrv
        .get(`tables.${companyNames.name(Naming.CAMEL_CASE, NumberMode.SINGULAR)}.singular`)
        .pipe(
          !route.paramMap.get('id')
            ? map((table) => `${appRootTitle} | ${table} | ${translateSrv.instant('buttons.new', { name: '' })}`)
            : switchMap((table) =>
                from(companyService.getTitle(route.paramMap.get('id')!)).pipe(
                  map((selected) => `${appRootTitle} | ${table} | ${selected.name}`),
                ),
              ),
        ),
    ),
  );
};

@Component({
  selector: 'app-company-modal',
  templateUrl: './company-modal.component.html',
  styleUrls: ['./company-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompanyModalComponent extends TranslationProvider implements OnInit, OnDestroy, EntityModal<Company> {
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private store = inject(Store);
  private translateSrv = inject(TranslateService);
  private fb = inject(FormBuilder);

  visible = true;
  form: CompanyFormGroup = this.fb.nonNullable.group({
    name: this.fb.nonNullable.control<string | undefined>(undefined, [Validators.required]),
    descriptionTranslations: this.fb.nonNullable.array<TranslationFormGroup>([]),
    location: this.fb.nonNullable.control<string | undefined>(undefined, [Validators.required]),
    type: this.fb.nonNullable.control<CompanyType>(CompanyType.COMPANY, [Validators.required]),
    url: this.fb.nonNullable.control<string | undefined>(undefined, [
      Validators.required,
      Validators.pattern(/^(http|https):\/\//),
    ]),
  });

  destroy$ = new Subject<void>();
  params$: Observable<ModalParams> = this.route.params.pipe(map((params) => params as ModalParams));

  loading$: Observable<boolean> = this.store.select(companyReducer.getLoading);
  loading = toSignal(this.loading$, {
    initialValue: false,
  });

  modalMode$: Observable<ModalMode> = this.params$.pipe(map((params) => ModalMode[params.modalMode]));
  modalMode = toSignal(this.modalMode$, {
    initialValue: ModalMode.VIEW,
  });

  entity$: Observable<Company | undefined> = this.store
    .select(companyReducer.getOne)
    .pipe(filter((entity) => !!entity));
  entity = toSignal(this.entity$);

  action$: Observable<Action | undefined> = this.store.select(companyReducer.getAction).pipe(
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
  language = toSignal(this.language$);

  types$: Observable<SelectOption<CompanyType>[]> = this.translateSrv.onLangChange.pipe(
    startWith(undefined),
    map(() => [
      {
        label: this.translateSrv.instant('enums.companyType.company'),
        value: CompanyType.COMPANY,
      },
      {
        label: this.translateSrv.instant('enums.companyType.school'),
        value: CompanyType.SCHOOL,
      },
    ]),
  );

  ngOnInit(): void {
    this.handleLoadData();
    this.handleParams();
    this.handleEntity();
    this.handleAction();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    this.store.dispatch(companyActions.unload());
  }

  handleLoadData() {}

  handleParams() {
    this.params$
      .pipe(
        takeUntil(this.destroy$),
        filter((params) => !!params.id),
      )
      .subscribe((params) => {
        if (!params.id) return;
        this.store.dispatch(companyActions.loadOne({ id: params.id }));
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

        this.form.patchValue({
          id: entity.id,
          location: entity.location,
          name: entity.name,
          descriptionTranslations: entity.descriptionTranslations,
          type: entity.type,
          url: entity.url,
        });

        if (modalMode === ModalMode.VIEW) {
          this.form.disable();
        }
      });
  }

  handleAction() {
    this.action$.pipe(takeUntil(this.destroy$)).subscribe(() => {
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
            this.store.dispatch(companyActions.create({ payload: this.form.value as Company }));
            break;
          case ModalMode.UPDATE:
            this.store.dispatch(companyActions.update({ payload: this.form.value as Company }));
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
    return companyNames;
  }

  get InputTranslationsType() {
    return InputTranslationsType;
  }

  get ModalMode() {
    return ModalMode;
  }
}
