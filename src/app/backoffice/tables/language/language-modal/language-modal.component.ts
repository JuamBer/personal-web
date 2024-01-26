import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot, ResolveFn, Router } from '@angular/router';
import { Action, Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { Observable, Subject, from } from 'rxjs';
import { filter, map, skip, switchMap, take } from 'rxjs/operators';
import { appRootTitle } from 'src/app/app.component';
import { EntityModal } from 'src/app/shared/models/entity-modal.model';
import { ModalMode } from 'src/app/shared/models/modal-mode.model';
import { ModalParams } from 'src/app/shared/models/modal-params.model';
import { ActionStatus, ActionType } from 'src/app/shared/state/common/common-state';
import { Naming, NumberMode } from 'src/app/shared/state/common/common.names';
import { publicLanguageReducer } from 'src/app/shared/state/languages/public-language.reducer';
import { FormUtils } from 'src/app/shared/utils/form-utils';
import { RouterUtils } from 'src/app/shared/utils/router.utils';
import { Language, LanguageFormGroup } from '../models/language.model';
import { LanguageService } from '../services/language.service';
import { languageActions } from '../state/language.actions';
import { languageNames } from '../state/language.names';
import { languageReducer } from '../state/language.reducer';

export const languageModalTitleResolver: ResolveFn<string> = (route: ActivatedRouteSnapshot) => {
  const store = inject(Store);
  const languageSrv = inject(LanguageService);
  const translateSrv = inject(TranslateService);
  return store.select(publicLanguageReducer.getOne).pipe(
    filter((i) => !!i),
    switchMap(() =>
      translateSrv
        .get(`tables.${languageNames.name(Naming.CAMEL_CASE, NumberMode.SINGULAR)}.singular`)
        .pipe(
          !route.paramMap.get('id')
            ? map((table) => `${appRootTitle} | ${table} | ${translateSrv.instant('buttons.new', { name: '' })}`)
            : switchMap((table) =>
                from(languageSrv.getTitle(route.paramMap.get('id')!)).pipe(
                  map((selected) => `${appRootTitle} | ${table} | ${selected.nativeName}`),
                ),
              ),
        ),
    ),
  );
};

@Component({
  selector: 'app-language-modal',
  templateUrl: './language-modal.component.html',
  styleUrls: ['./language-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguageModalComponent implements OnInit, OnDestroy, EntityModal<Language> {
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private store = inject(Store);
  private fb = inject(FormBuilder);

  visible = true;
  form: LanguageFormGroup = this.fb.nonNullable.group({
    name: this.fb.nonNullable.control<string | undefined>(undefined, [Validators.required]),
    nativeName: this.fb.nonNullable.control<string | undefined>(undefined, [Validators.required]),
    acronym: this.fb.nonNullable.control<string | undefined>(undefined, [Validators.required]),
    active: this.fb.nonNullable.control<boolean>(true, [Validators.required]),
  });

  unsubscribe$ = new Subject<void>();
  params$: Observable<ModalParams> = this.route.params.pipe(map((params) => params as ModalParams));

  loading$: Observable<boolean> = this.store.select(languageReducer.getLoading);
  loading$$ = toSignal(this.loading$, {
    initialValue: false,
  });

  modalMode$: Observable<ModalMode> = this.params$.pipe(map((params) => ModalMode[params.modalMode]));
  modalMode$$ = toSignal(this.modalMode$, {
    initialValue: ModalMode.VIEW,
  });

  entity$: Observable<Language | undefined> = this.store
    .select(languageReducer.getOne)
    .pipe(filter((entity) => !!entity));
  entity$$ = toSignal(this.entity$);

  action$: Observable<Action | undefined> = this.store.select(languageReducer.getAction).pipe(
    skip(1),
    filter(
      (action) =>
        !!action &&
        (action.type === ActionType.CREATE_ONE || action.type === ActionType.UPDATE_ONE) &&
        action.status === ActionStatus.SUCCESS,
    ),
  );

  ngOnInit(): void {
    this.action$.subscribe(() => {
      this.hide();
    });
    this.params$.pipe(filter((params) => !!params.id)).subscribe((params) => {
      if (!params.id) return;
      this.store.dispatch(languageActions.loadOne({ id: params.id }));
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
        name: entity.name,
        nativeName: entity.nativeName,
        acronym: entity.acronym,
        active: entity.active,
      });
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
    this.store.dispatch(languageActions.unload());
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
            this.store.dispatch(languageActions.create({ payload: this.form.value as Language }));
            break;
          case ModalMode.UPDATE:
            this.store.dispatch(languageActions.update({ payload: this.form.value as Language }));
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
    return languageNames;
  }
}
