import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot, ResolveFn, Router, RouterStateSnapshot } from '@angular/router';

import { Action, Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Observable, Subject, from } from 'rxjs';
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

export const certificateModalTitleResolver: ResolveFn<string> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
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
                from(certificateSrv.getTitle(route.paramMap.get('id'))).pipe(
                  map(
                    (selected) =>
                      `${appRootTitle} | ${table} | ${
                        selected.nameTranslations.find(
                          (translation: Translation) => translation.language === language.acronym,
                        ).value
                      }`,
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
export class CertificateModalComponent extends TranslationProvider implements OnInit, EntityModal<Certificate> {
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private store = inject(Store);
  private fb = inject(FormBuilder);

  visible = true;
  form: CertificateFormGroup = this.fb.group({
    nameTranslations: this.fb.array<TranslationFormGroup>([]),
    descriptionTranslations: this.fb.array<TranslationFormGroup>([]),
    url: this.fb.control<string | undefined>(undefined),
    image: this.fb.control<string | undefined>(undefined),
    pdf: this.fb.control<string | undefined>(undefined),
    date: this.fb.control<Date>(new Date(), [Validators.required]),
    github: this.fb.control<string | undefined>(undefined),
    web: this.fb.control<string | undefined>(undefined),
    microsoftStore: this.fb.control<string | undefined>(undefined),
    playStore: this.fb.control<string | undefined>(undefined),
    company: this.fb.control<Company | undefined>(undefined, [Validators.required]),
    certificateType: this.fb.control<CertificateType | undefined>(undefined, [Validators.required]),
    certificateGroup: this.fb.control<CertificateGroup | undefined>(undefined, [Validators.required]),
  });

  unsubscribe$: Subject<boolean> = new Subject();
  params$: Observable<ModalParams> = this.route.params.pipe(
    takeUntil(this.unsubscribe$),
    map((params) => params as ModalParams),
  );
  loading$: Observable<boolean> = this.store.select(certificateReducer.getLoading).pipe(takeUntil(this.unsubscribe$));
  modalMode$: Observable<ModalMode> = this.params$.pipe(
    takeUntil(this.unsubscribe$),
    map((params) => ModalMode[params.modalMode]),
  );
  entity$: Observable<Certificate> = this.store.select(certificateReducer.getOne).pipe(
    takeUntil(this.unsubscribe$),
    filter((i) => !!i),
  );
  action$: Observable<Action> = this.store.select(certificateReducer.getAction).pipe(
    takeUntil(this.unsubscribe$),
    skip(1),
    filter(
      (action) =>
        (action.type === ActionType.CREATE_ONE || action.type === ActionType.UPDATE_ONE) &&
        action.status === ActionStatus.SUCCESS,
    ),
  );
  showErrors$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  language$: Observable<Language> = this.store.select(publicLanguageReducer.getOne);

  certificateTypes$: Observable<CertificateType[]> = this.store.select(certificateTypeReducer.getAll);
  certificateGroups$: Observable<CertificateGroup[]> = this.store.select(certificateGroupReducer.getAll);
  companies$: Observable<Company[]> = this.store.select(companyReducer.getAll);

  ngOnInit(): void {
    this.store.dispatch(certificateGroupActions.loadAll({}));
    this.store.dispatch(certificateTypeActions.loadAll({}));
    this.store.dispatch(companyActions.loadAll({}));

    this.action$.subscribe(() => {
      this.hide();
    });
    this.params$
      .pipe(filter((params) => !!params.id))
      .subscribe((params) => this.store.dispatch(certificateActions.loadOne({ id: params.id })));
    this.modalMode$.pipe(filter((modalMode) => modalMode === ModalMode.VIEW)).subscribe(() => {
      this.form.disable();
    });
    this.entity$.subscribe((entity) => {
      if (!this.form.controls.id) {
        this.form.addControl('id', this.fb.control<string>(entity.id, [Validators.required]));
      }
      this.form.patchValue({
        id: entity.id,
        nameTranslations: entity.nameTranslations,
        descriptionTranslations: entity.descriptionTranslations,
        url: entity.url,
        image: entity.image,
        pdf: entity.pdf,
        date: new Date(entity.date),
        github: entity.github,
        web: entity.web,
        microsoftStore: entity.microsoftStore,
        playStore: entity.playStore,
        company: entity.company,
        certificateType: entity.certificateType,
        certificateGroup: entity.certificateGroup,
      });
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }

  hide() {
    this.visible = false;
    this.store.dispatch(certificateActions.unload());
    this.router.navigate([RouterUtils.getParentRoute(this.router.url, 1)]);
  }

  send() {
    if (this.form.invalid) {
      FormUtils.markAllAsDirtyAndTouched(this.form);
      this.showErrors$.next(true);
    } else {
      this.modalMode$.pipe(take(1)).subscribe((modalMode) => {
        switch (modalMode) {
          case ModalMode.CREATE:
            this.store.dispatch(certificateActions.create({ payload: this.form.value }));
            break;
          case ModalMode.UPDATE:
            this.store.dispatch(certificateActions.update({ payload: this.form.value }));
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
