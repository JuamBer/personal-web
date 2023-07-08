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

export const positionModalTitleResolver: ResolveFn<string> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  const store = inject(Store);
  const positionSrbv = inject(PositionService);
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
                from(positionSrbv.getTitle(route.paramMap.get('id'))).pipe(
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
  selector: 'app-position-modal',
  templateUrl: './position-modal.component.html',
  styleUrls: ['./position-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PositionModalComponent implements OnInit, EntityModal<Position> {
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private store = inject(Store);
  private fb = inject(FormBuilder);

  visible = true;
  form: PositionFormGroup = this.fb.group({
    nameTranslations: this.fb.array<TranslationFormGroup>([]),
    descriptionTranslations: this.fb.array<TranslationFormGroup>([]),
    company: this.fb.control<Company | undefined>(undefined, [Validators.required]),
    importance: this.fb.control<number>(0, [Validators.required, Validators.min(0), Validators.max(5)]),
    dateFrom: this.fb.control<Date | undefined>(undefined, [Validators.required]),
    dateTo: this.fb.control<Date | undefined>(undefined),
  });

  unsubscribe$: Subject<boolean> = new Subject();
  params$: Observable<ModalParams> = this.route.params.pipe(
    takeUntil(this.unsubscribe$),
    map((params) => params as ModalParams),
  );
  loading$: Observable<boolean> = this.store.select(positionReducer.getLoading).pipe(takeUntil(this.unsubscribe$));
  modalMode$: Observable<ModalMode> = this.params$.pipe(
    takeUntil(this.unsubscribe$),
    map((params) => ModalMode[params.modalMode]),
  );
  entity$: Observable<Position> = this.store.select(positionReducer.getOne).pipe(
    takeUntil(this.unsubscribe$),
    filter((entity) => !!entity),
  );
  action$: Observable<Action> = this.store.select(positionReducer.getAction).pipe(
    takeUntil(this.unsubscribe$),
    skip(1),
    filter((action) => action.type === ActionType.CREATE_ONE && action.status === ActionStatus.SUCCESS),
  );
  showErrors$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  companies$: Observable<Company[]> = this.store.select(companyReducer.getAll);

  ngOnInit(): void {
    this.store.dispatch(companyActions.loadAll({}));

    this.params$
      .pipe(filter((params) => !!params.id))
      .subscribe((params) => this.store.dispatch(positionActions.loadOne({ id: params.id })));
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
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }

  hide() {
    this.visible = false;
    this.store.dispatch(positionActions.unload());
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
            this.store.dispatch(positionActions.create({ payload: this.form.value }));
            break;
          case ModalMode.UPDATE:
            this.store.dispatch(positionActions.update({ payload: this.form.value }));
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
