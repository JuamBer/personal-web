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
import { CertificateGroup } from '../../certificate-group/models/certificate-group.model';
import { certificateGroupActions } from '../../certificate-group/state/certificate-group.actions';
import { certificateGroupReducer } from '../../certificate-group/state/certificate-group.reducer';
import { CertificateType } from '../../certificate-type/models/certificate-type.model';
import { certificateTypeActions } from '../../certificate-type/state/certificate-type.actions';
import { certificateTypeReducer } from '../../certificate-type/state/certificate-type.reducer';
import { Company } from '../../company/models/company.model';
import { companyActions } from '../../company/state/company.actions';
import { companyReducer } from '../../company/state/company.reducer';
import { Language } from '../../language/models/language.model';
import { Certificate, CertificateFormGroup } from '../models/certificate.model';
import { CertificateService } from '../services/certificate.service';
import { certificateActions } from '../state/certificate.actions';
import { certificateNames } from '../state/certificate.names';
import { certificateReducer } from '../state/certificate.reducer';

export const certificateModalTitleResolver: ResolveFn<string> = (route: ActivatedRouteSnapshot) => {
  const store = inject(Store);
  const certificateSrv = inject(CertificateService);
  const translateSrv = inject(TranslateService);
  return store.select(publicLanguageReducer.getOne).pipe(
    filter((i) => !!i),
    switchMap((language) =>
      translateSrv
        .get(`tables.${certificateNames.name(Naming.CAMEL_CASE, NumberMode.SINGULAR)}.singular`)
        .pipe(
          !route.paramMap.get('id')
            ? map((table) => `${appRootTitle} | ${table} | ${translateSrv.instant('buttons.new', { name: '' })}`)
            : switchMap((table) =>
                from(certificateSrv.getTitle(route.paramMap.get('id')!)).pipe(
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
  selector: 'app-certificate-modal',
  templateUrl: './certificate-modal.component.html',
  styleUrls: ['./certificate-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CertificateModalComponent
  extends TranslationProvider
  implements OnInit, OnDestroy, EntityModal<Certificate>
{
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private store = inject(Store);
  private fb = inject(FormBuilder);

  visible = true;
  form: CertificateFormGroup = this.fb.nonNullable.group({
    nameTranslations: this.fb.nonNullable.array<TranslationFormGroup>([]),
    descriptionTranslations: this.fb.nonNullable.array<TranslationFormGroup>([]),
    url: this.fb.nonNullable.control<string | undefined>(undefined),
    image: this.fb.nonNullable.control<string | undefined>(undefined),
    pdf: this.fb.nonNullable.control<string | undefined>(undefined),
    date: this.fb.nonNullable.control<Date>(new Date(), [Validators.required]),
    github: this.fb.nonNullable.control<string | undefined>(undefined),
    web: this.fb.nonNullable.control<string | undefined>(undefined),
    microsoftStore: this.fb.nonNullable.control<string | undefined>(undefined),
    playStore: this.fb.nonNullable.control<string | undefined>(undefined),
    company: this.fb.nonNullable.control<Company | undefined>(undefined, [Validators.required]),
    certificateType: this.fb.nonNullable.control<CertificateType | undefined>(undefined, [Validators.required]),
    certificateGroup: this.fb.nonNullable.control<CertificateGroup | undefined>(undefined, [Validators.required]),
  });

  destroy$ = new Subject<void>();
  params$: Observable<ModalParams> = this.route.params.pipe(map((params) => params as ModalParams));

  loading$: Observable<boolean> = this.store.select(certificateReducer.getLoading);
  loading = toSignal(this.loading$, {
    initialValue: false,
  });

  modalMode$: Observable<ModalMode> = this.params$.pipe(map((params) => ModalMode[params.modalMode]));
  modalMode = toSignal(this.modalMode$, {
    initialValue: ModalMode.VIEW,
  });

  entity$: Observable<Certificate | undefined> = this.store.select(certificateReducer.getOne).pipe(filter((i) => !!i));
  entity = toSignal(this.entity$);

  action$: Observable<Action | undefined> = this.store.select(certificateReducer.getAction).pipe(
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

  certificateTypes$: Observable<CertificateType[]> = this.store.select(certificateTypeReducer.getAll);
  certificateGroups$: Observable<CertificateGroup[]> = this.store.select(certificateGroupReducer.getAll);
  companies$: Observable<Company[]> = this.store.select(companyReducer.getAll);

  ngOnInit() {
    this.handleLoadData();
    this.handleParams();
    this.handleEntity();
    this.handleAction();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    this.store.dispatch(certificateActions.unload());
  }

  handleLoadData() {
    this.store.dispatch(certificateGroupActions.loadAll({}));
    this.store.dispatch(certificateTypeActions.loadAll({}));
    this.store.dispatch(companyActions.loadAll({}));
  }

  handleParams() {
    this.params$.pipe(takeUntil(this.destroy$)).subscribe((params) => {
      if (!params.id) return;
      this.store.dispatch(certificateActions.loadOne({ id: params.id }));
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

        if (modalMode === ModalMode.CREATE) {
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
            this.store.dispatch(certificateActions.create({ payload: this.form.value as Certificate }));
            break;
          case ModalMode.UPDATE:
            this.store.dispatch(certificateActions.update({ payload: this.form.value as Certificate }));
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
    return certificateNames;
  }
  get InputTranslationsType() {
    return InputTranslationsType;
  }
  get ModalMode() {
    return ModalMode;
  }
}
