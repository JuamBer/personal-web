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
import { ModalMode } from 'src/app/shared/models/modal-mode';
import { ModalParams } from 'src/app/shared/models/modal-params';
import { TranslationFormGroup } from 'src/app/shared/models/translation.model';
import { ActionStatus, ActionType } from 'src/app/shared/state/common/common-state';
import { Naming, NumberMode } from 'src/app/shared/state/common/common.names';
import { publicLanguageReducer } from 'src/app/shared/state/languages/public-language.reducer';
import { FormUtils } from 'src/app/shared/utils/form-utils';
import { RouterUtils } from 'src/app/shared/utils/router.utils';
import { TranslationUtils } from 'src/app/shared/utils/translation.utils';
import { Language } from '../../language/models/language.model';
import { Company, CompanyFormGroup } from '../models/company.model';
import { CompanyService } from '../services/company.service';
import { companyActions } from '../state/company.actions';
import { companyNames } from '../state/company.names';
import { companyReducer } from '../state/company.reducer';

export const companyModalTitleResolver: ResolveFn<string> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  const store = inject(Store);
  const companyService = inject(CompanyService);
  const translateSrv = inject(TranslateService);

  return store.select(publicLanguageReducer.getOne).pipe(
    filter((i) => !!i),
    switchMap((language) =>
      translateSrv
        .get(`tables.${companyNames.name(Naming.CAMEL_CASE, NumberMode.SINGULAR)}.singular`)
        .pipe(
          !route.paramMap.get('id')
            ? map((table) => `${appRootTitle} | ${table} | ${translateSrv.instant('buttons.new', { name: '' })}`)
            : switchMap((table) =>
                from(companyService.getTitle(route.paramMap.get('id'))).pipe(
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
export class CompanyModalComponent implements OnInit, EntityModal<Company> {
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private store = inject(Store);
  private fb = inject(FormBuilder);

  visible = true;
  form: CompanyFormGroup = this.fb.group({
    name: this.fb.control<string | undefined>(undefined, [Validators.required]),
    descriptionTranslations: this.fb.array<TranslationFormGroup>([]),
    location: this.fb.control<string | undefined>(undefined, [Validators.required]),
  });

  unsubscribe$: Subject<boolean> = new Subject();
  params$: Observable<ModalParams> = this.route.params.pipe(
    takeUntil(this.unsubscribe$),
    map((params) => params as ModalParams),
  );
  loading$: Observable<boolean> = this.store.select(companyReducer.getLoading).pipe(takeUntil(this.unsubscribe$));
  modalMode$: Observable<ModalMode> = this.params$.pipe(
    takeUntil(this.unsubscribe$),
    map((params) => ModalMode[params.modalMode]),
  );
  entity$: Observable<Company> = this.store.select(companyReducer.getOne).pipe(
    takeUntil(this.unsubscribe$),
    filter((entity) => !!entity),
  );
  action$: Observable<Action> = this.store.select(companyReducer.getAction).pipe(
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

  ngOnInit(): void {
    this.action$.subscribe(() => {
      this.hide();
    });
    this.params$
      .pipe(filter((params) => !!params.id))
      .subscribe((params) => this.store.dispatch(companyActions.loadOne({ id: params.id })));
    this.modalMode$.pipe(filter((modalMode) => modalMode === ModalMode.VIEW)).subscribe(() => {
      this.form.disable();
    });
    this.entity$.subscribe((entity) => {
      if (!this.form.controls.id) {
        this.form.addControl('id', this.fb.control<string>(entity.id, [Validators.required]));
      }
      this.form.patchValue({
        id: entity.id,
        location: entity.location,
        name: entity.name,
        descriptionTranslations: entity.descriptionTranslations,
      });
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }

  hide() {
    this.visible = false;
    this.store.dispatch(companyActions.unload());
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
            this.store.dispatch(companyActions.create({ payload: this.form.value }));
            break;
          case ModalMode.UPDATE:
            this.store.dispatch(companyActions.update({ payload: this.form.value }));
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
  get getTranslation() {
    return TranslationUtils.getTranslation;
  }
}
