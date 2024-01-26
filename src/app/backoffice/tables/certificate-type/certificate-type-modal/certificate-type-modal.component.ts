import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot, ResolveFn, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Observable, Subject, combineLatest, from } from 'rxjs';
import { filter, map, skip, startWith, switchMap, take } from 'rxjs/operators';
import { appRootTitle } from 'src/app/app.component';
import { InputTranslationsType } from 'src/app/shared/components/input-translations/models/input-translations.models';
import { EntityModal } from 'src/app/shared/models/entity-modal.model';
import { ModalMode } from 'src/app/shared/models/modal-mode.model';
import { ModalParams } from 'src/app/shared/models/modal-params.model';
import { TranslationProvider } from 'src/app/shared/models/translation-provider.model';
import { Translation, TranslationFormGroup } from 'src/app/shared/models/translation.model';
import { Action, ActionStatus, ActionType } from 'src/app/shared/state/common/common-state';
import { Naming, NumberMode } from 'src/app/shared/state/common/common.names';
import { publicLanguageReducer } from 'src/app/shared/state/languages/public-language.reducer';
import { FormUtils } from 'src/app/shared/utils/form-utils';
import { RouterUtils } from 'src/app/shared/utils/router.utils';
import { Language } from '../../language/models/language.model';
import { CertificateType, CertificateTypeFormGroup } from '../models/certificate-type.model';
import { CertificateTypeService } from '../services/certificate-type.service';
import { certificateTypeActions } from '../state/certificate-type.actions';
import { certificateTypeNames } from '../state/certificate-type.names';
import { certificateTypeReducer } from '../state/certificate-type.reducer';

export const certificateTypeModalTitleResolver: ResolveFn<string> = (route: ActivatedRouteSnapshot) => {
  const store = inject(Store);
  const certificateTypeSrv = inject(CertificateTypeService);
  const translateSrv = inject(TranslateService);

  return store.select(publicLanguageReducer.getOne).pipe(
    filter((i) => !!i),
    switchMap((language) =>
      translateSrv
        .get(`tables.${certificateTypeNames.name(Naming.CAMEL_CASE, NumberMode.SINGULAR)}.singular`)
        .pipe(
          !route.paramMap.get('id')
            ? map((table) => `${appRootTitle} | ${table} | ${translateSrv.instant('buttons.new', { name: '' })}`)
            : switchMap((table) =>
                from(certificateTypeSrv.getTitle(route.paramMap.get('id')!)).pipe(
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
  selector: 'app-certificate-type-modal',
  templateUrl: './certificate-type-modal.component.html',
  styleUrls: ['./certificate-type-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CertificateTypeModalComponent
  extends TranslationProvider
  implements OnInit, OnDestroy, EntityModal<CertificateType>
{
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private store = inject(Store);
  private fb = inject(FormBuilder);

  visible = true;
  form: CertificateTypeFormGroup = this.fb.nonNullable.group({
    nameTranslations: this.fb.nonNullable.array<TranslationFormGroup>([]),
    descriptionTranslations: this.fb.nonNullable.array<TranslationFormGroup>([]),
  });

  unsubscribe$ = new Subject<void>();
  params$: Observable<ModalParams> = this.route.params.pipe(map((params) => params as ModalParams));

  loading$: Observable<boolean> = this.store.select(certificateTypeReducer.getLoading);
  loading$$ = toSignal(this.loading$, {
    initialValue: false,
  });

  modalMode$: Observable<ModalMode> = this.params$.pipe(map((params) => ModalMode[params.modalMode]));
  modalMode$$ = toSignal(this.modalMode$, {
    initialValue: ModalMode.VIEW,
  });

  entity$: Observable<CertificateType | undefined> = this.store
    .select(certificateTypeReducer.getOne)
    .pipe(filter((entity) => !!entity));
  entity$$ = toSignal(this.entity$);

  action$: Observable<Action | undefined> = this.store.select(certificateTypeReducer.getAction).pipe(
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

  ngOnInit(): void {
    this.action$.subscribe(() => {
      this.hide();
    });

    this.params$.pipe(filter((params) => !!params.id)).subscribe((params) => {
      if (!params.id) return;
      this.store.dispatch(certificateTypeActions.loadOne({ id: params.id }));
    });

    combineLatest([this.modalMode$, this.form.valueChanges.pipe(startWith(this.form.value))])
      .pipe(
        filter(([modalMode]) => modalMode === ModalMode.VIEW),
        take(1),
      )
      .subscribe(() => {
        this.form.disable();
        FormUtils.disableAllControls(this.form);
      });

    this.entity$.subscribe((entity) => {
      if (!entity) return;

      if (!this.form.controls.id) {
        this.form.addControl('id', this.fb.nonNullable.control<string>(entity.id, [Validators.required]));
      }

      this.form.patchValue({
        id: entity.id,
        nameTranslations: entity.nameTranslations,
        descriptionTranslations: entity.descriptionTranslations,
      });
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
    this.store.dispatch(certificateTypeActions.unload());
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
            this.store.dispatch(certificateTypeActions.create({ payload: this.form.value as CertificateType }));
            break;
          case ModalMode.UPDATE:
            this.store.dispatch(certificateTypeActions.update({ payload: this.form.value as CertificateType }));
            break;
        }
      });
    }
  }
  get ModalMode() {
    return ModalMode;
  }
  get NumberMode() {
    return NumberMode;
  }
  get Naming() {
    return Naming;
  }
  get names() {
    return certificateTypeNames;
  }
  get InputTranslationsType() {
    return InputTranslationsType;
  }
}
