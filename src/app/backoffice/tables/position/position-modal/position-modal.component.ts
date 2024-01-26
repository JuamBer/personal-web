import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot, ResolveFn, Router } from '@angular/router';
import { Action, Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Observable, Subject, from } from 'rxjs';
import { filter, map, skip, switchMap, take, takeUntil } from 'rxjs/operators';
import { appRootTitle } from 'src/app/app.component';
import { InputTranslationsType } from 'src/app/shared/components/input-translations/models/input-translations.models';
import { EntityModal } from 'src/app/shared/models/entity-modal.model';
import { ModalMode } from 'src/app/shared/models/modal-mode.model';
import { ModalParams } from 'src/app/shared/models/modal-params.model';
import { Translation, TranslationFormGroup } from 'src/app/shared/models/translation.model';
import { ActionStatus, ActionType } from 'src/app/shared/state/common/common-state';
import { Naming, NumberMode } from 'src/app/shared/state/common/common.names';
import { publicLanguageReducer } from 'src/app/shared/state/languages/public-language.reducer';
import { FormUtils } from 'src/app/shared/utils/form-utils';
import { RouterUtils } from 'src/app/shared/utils/router.utils';
import { Company } from '../../company/models/company.model';
import { companyActions } from '../../company/state/company.actions';
import { companyReducer } from '../../company/state/company.reducer';
import { Position, PositionFormGroup } from '../models/position.model';
import { PositionService } from '../services/position.service';
import { positionActions } from '../state/position.actions';
import { positionNames } from '../state/position.names';
import { positionReducer } from '../state/position.reducer';

export const positionModalTitleResolver: ResolveFn<string> = (route: ActivatedRouteSnapshot) => {
  const store = inject(Store);
  const positionSrv = inject(PositionService);
  const translateSrv = inject(TranslateService);
  return store.select(publicLanguageReducer.getOne).pipe(
    filter((i) => !!i),
    switchMap((language) =>
      translateSrv
        .get(`tables.${positionNames.name(Naming.CAMEL_CASE, NumberMode.SINGULAR)}.singular`)
        .pipe(
          !route.paramMap.get('id')
            ? map((table) => `${appRootTitle} | ${table} | ${translateSrv.instant('buttons.new', { name: '' })}`)
            : switchMap((table) =>
                from(positionSrv.getTitle(route.paramMap.get('id')!)).pipe(
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
  selector: 'app-position-modal',
  templateUrl: './position-modal.component.html',
  styleUrls: ['./position-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PositionModalComponent implements OnInit, OnDestroy, EntityModal<Position> {
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private store = inject(Store);
  private fb = inject(FormBuilder);

  visible = true;
  form: PositionFormGroup = this.fb.nonNullable.group({
    nameTranslations: this.fb.nonNullable.array<TranslationFormGroup>([]),
    descriptionTranslations: this.fb.nonNullable.array<TranslationFormGroup>([]),
    company: this.fb.nonNullable.control<Company | undefined>(undefined, [Validators.required]),
    importance: this.fb.nonNullable.control<number>(0, [Validators.required, Validators.min(0), Validators.max(5)]),
    dateFrom: this.fb.nonNullable.control<Date | undefined>(undefined, [Validators.required]),
    dateTo: this.fb.nonNullable.control<Date | undefined>(undefined),
  });

  unsubscribe$: Subject<void> = new Subject();
  params$: Observable<ModalParams> = this.route.params.pipe(
    takeUntil(this.unsubscribe$),
    map((params) => params as ModalParams),
  );
  loading$: Observable<boolean> = this.store.select(positionReducer.getLoading).pipe(takeUntil(this.unsubscribe$));
  modalMode$: Observable<ModalMode> = this.params$.pipe(
    takeUntil(this.unsubscribe$),
    map((params) => ModalMode[params.modalMode]),
  );
  entity$: Observable<Position | undefined> = this.store.select(positionReducer.getOne).pipe(
    takeUntil(this.unsubscribe$),
    filter((entity) => !!entity),
  );
  action$: Observable<Action | undefined> = this.store.select(positionReducer.getAction).pipe(
    takeUntil(this.unsubscribe$),
    skip(1),
    filter(
      (action) =>
        !!action &&
        (action.type === ActionType.CREATE_ONE || action.type === ActionType.UPDATE_ONE) &&
        action.status === ActionStatus.SUCCESS,
    ),
  );
  showErrors$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  companies$: Observable<Company[]> = this.store.select(companyReducer.getAll);

  ngOnInit(): void {
    this.store.dispatch(companyActions.loadAll({}));

    this.action$.subscribe(() => {
      this.hide();
    });

    this.params$.pipe(filter((params) => !!params.id)).subscribe((params) => {
      if (!params.id) return;
      this.store.dispatch(positionActions.loadOne({ id: params.id }));
    });

    this.modalMode$.pipe(filter((modalMode) => modalMode === ModalMode.VIEW)).subscribe(() => {
      this.form.disable();
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
        importance: entity.importance,
        dateFrom: new Date(entity.dateFrom),
        dateTo: new Date(entity.dateTo),
        company: entity.company,
      });
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
    this.store.dispatch(positionActions.unload());
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
            this.store.dispatch(positionActions.create({ payload: this.form.value as Position }));
            break;
          case ModalMode.UPDATE:
            this.store.dispatch(positionActions.update({ payload: this.form.value as Position }));
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
    return positionNames;
  }
  get ModalMode() {
    return ModalMode;
  }
  get InputTranslationsType() {
    return InputTranslationsType;
  }
}
