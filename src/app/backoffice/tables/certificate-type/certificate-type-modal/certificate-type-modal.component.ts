import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot, ResolveFn, Router, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subject, combineLatest, from } from 'rxjs';
import { filter, map, skip, startWith, take, takeUntil } from 'rxjs/operators';
import { InputTranslationsType } from 'src/app/shared/components/input-translations/models/input-translations.models';
import { EntityModal } from 'src/app/shared/models/entity-modal.model';
import { ModalMode } from 'src/app/shared/models/modal-mode';
import { ModalParams } from 'src/app/shared/models/modal-params';
import { TranslationFormGroup } from 'src/app/shared/models/translation.model';
import { Action, ActionStatus, ActionType } from 'src/app/shared/state/common/common-state';
import { Naming, NumberMode } from 'src/app/shared/state/common/common.names';
import { FormUtils } from 'src/app/shared/utils/form-utils';
import { RouterUtils } from 'src/app/shared/utils/router.utils';
import { CertificateType, CertificateTypeFormGroup } from '../models/certificate-type.model';
import { CertificateTypeService } from '../services/certificate-type.service';
import { certificateTypeActions } from '../state/certificate-type.actions';
import { certificateTypeNames } from '../state/certificate-type.names';
import { certificateTypeReducer } from '../state/certificate-type.reducer';

export const certificateTypeModalTitleResolver: ResolveFn<string> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  if (!route.paramMap.get('id')) {
    return 'Juan Sáez García | Certificate Types | New';
  }
  return from(inject(CertificateTypeService).getTitle(route.paramMap.get('id'))).pipe(
    map((selected) => 'Juan Sáez García | Certificate Types | ' + selected.name),
  );
};

@Component({
  selector: 'app-certificate-type-modal',
  templateUrl: './certificate-type-modal.component.html',
  styleUrls: ['./certificate-type-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CertificateTypeModalComponent implements OnInit, EntityModal<CertificateType> {
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private store = inject(Store);
  private fb = inject(FormBuilder);

  visible = true;
  form: CertificateTypeFormGroup = this.fb.group({
    name: this.fb.control<string | undefined>(undefined, [Validators.required]),
    description: this.fb.control<string | undefined>(undefined, [Validators.required]),
    nameTranslations: this.fb.array<TranslationFormGroup>([]),
  });

  unsubscribe$: Subject<boolean> = new Subject();
  params$: Observable<ModalParams> = this.route.params.pipe(
    takeUntil(this.unsubscribe$),
    map((params) => params as ModalParams),
  );
  loading$: Observable<boolean> = this.store
    .select(certificateTypeReducer.getLoading)
    .pipe(takeUntil(this.unsubscribe$));
  modalMode$: Observable<ModalMode> = this.params$.pipe(
    takeUntil(this.unsubscribe$),
    map((params) => ModalMode[params.modalMode]),
  );
  entity$: Observable<CertificateType> = this.store.select(certificateTypeReducer.getOne).pipe(
    takeUntil(this.unsubscribe$),
    filter((entity) => !!entity),
  );
  action$: Observable<Action> = this.store.select(certificateTypeReducer.getAction).pipe(
    takeUntil(this.unsubscribe$),
    skip(1),
    filter((action) => action.type === ActionType.CREATE_ONE && action.status === ActionStatus.SUCCESS),
  );

  ngOnInit(): void {
    this.params$
      .pipe(filter((params) => !!params.id))
      .subscribe((params) => this.store.dispatch(certificateTypeActions.loadOne({ id: params.id })));
    this.action$.subscribe(() => {
      this.hide();
    });
    combineLatest([this.modalMode$, this.form.valueChanges.pipe(startWith(this.form.value))])
      .pipe(
        filter(([modalMode]) => modalMode === ModalMode.VIEW),
        take(1),
      )
      .subscribe(([a, b]) => {
        this.form.disable();
        FormUtils.disableAllControls(this.form);
      });
    this.entity$.subscribe((entity) => {
      if (!this.form.controls.id) {
        this.form.addControl('id', this.fb.control<string>(entity.id, [Validators.required]));
      }
      this.form.patchValue({
        id: entity.id,
        name: entity.name,
        description: entity.description,
        nameTranslations: entity.nameTranslations,
      });
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }

  hide() {
    this.store.dispatch(certificateTypeActions.unload());
    this.router.navigate([RouterUtils.getParentRoute(this.router.url, 1)]);
  }

  send() {
    if (this.form.invalid) {
      FormUtils.markAllAsDirtyAndTouched(this.form);
    } else {
      this.modalMode$.pipe(take(1)).subscribe((modalMode) => {
        switch (modalMode) {
          case ModalMode.CREATE:
            this.store.dispatch(certificateTypeActions.create({ payload: this.form.value }));
            break;
          case ModalMode.UPDATE:
            this.store.dispatch(certificateTypeActions.update({ payload: this.form.value }));
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
