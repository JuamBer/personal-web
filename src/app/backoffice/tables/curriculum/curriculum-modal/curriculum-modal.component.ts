import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot, ResolveFn, Router, RouterStateSnapshot } from '@angular/router';
import { environment } from '@env/environment';
import { Action, Store } from '@ngrx/store';
import { Observable, Subject, from } from 'rxjs';
import { filter, map, skip, take, takeUntil } from 'rxjs/operators';
import { EntityModal } from 'src/app/shared/models/entity-modal.model';
import { ModalMode } from 'src/app/shared/models/modal-mode';
import { ModalParams } from 'src/app/shared/models/modal-params';
import { StorageService } from 'src/app/shared/services/storage.service';
import { ActionStatus, ActionType } from 'src/app/shared/state/common/common-state';
import { Naming, NumberMode } from 'src/app/shared/state/common/common.names';
import { FormUtils } from 'src/app/shared/utils/form-utils';
import { RouterUtils } from 'src/app/shared/utils/router.utils';
import { Language } from '../../language/models/language.model';
import { languageActions } from '../../language/state/language.actions';
import { languageReducer } from '../../language/state/language.reducer';
import { Curriculum, CurriculumFormGroup } from '../models/curriculum.model';
import { CurriculumService } from '../services/curriculum.service';
import { curriculumActions } from '../state/curriculum.actions';
import { curriculumNames } from '../state/curriculum.names';
import { curriculumReducer } from '../state/curriculum.reducer';

export const curriculumModalTitleResolver: ResolveFn<string> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  return from(inject(CurriculumService).getTitle(route.paramMap.get('id'))).pipe(
    map((selected) => 'Juan Sáez García | Curriculums | ' + selected.id),
  );
};

@Component({
  selector: 'app-curriculum-modal',
  templateUrl: './curriculum-modal.component.html',
  styleUrls: ['./curriculum-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CurriculumModalComponent implements OnInit, EntityModal<Curriculum> {
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private store = inject(Store);
  private fb = inject(FormBuilder);
  private storageSrv = inject(StorageService);

  visible = true;
  pdf: File;
  form: CurriculumFormGroup = this.fb.group({
    date: this.fb.control<Date>(new Date(), [Validators.required]),
    language: this.fb.control<Language | undefined>(undefined, [Validators.required]),
    pdf: this.fb.control<string | undefined>(undefined, [Validators.required]),
  });

  unsubscribe$: Subject<boolean> = new Subject();
  params$: Observable<ModalParams> = this.route.params.pipe(
    takeUntil(this.unsubscribe$),
    map((params) => params as ModalParams),
  );
  loading$: Observable<boolean> = this.store.select(curriculumReducer.getLoading).pipe(takeUntil(this.unsubscribe$));
  modalMode$: Observable<ModalMode> = this.params$.pipe(
    takeUntil(this.unsubscribe$),
    map((params) => ModalMode[params.modalMode]),
  );
  entity$: Observable<Curriculum> = this.store.select(curriculumReducer.getOne).pipe(
    takeUntil(this.unsubscribe$),
    filter((entity) => !!entity),
  );
  action$: Observable<Action> = this.store.select(curriculumReducer.getAction).pipe(
    takeUntil(this.unsubscribe$),
    skip(1),
    filter((action) => action.type === ActionType.CREATE_ONE && action.status === ActionStatus.SUCCESS),
  );
  languages$: Observable<Language[]> = this.store.select(languageReducer.getAll);

  ngOnInit(): void {
    this.store.dispatch(languageActions.loadAll({}));
    this.params$
      .pipe(filter((params) => !!params.id))
      .subscribe((params) => this.store.dispatch(curriculumActions.loadOne({ id: params.id })));
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
        language: entity.language,
        pdf: entity.pdf,
      });
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }

  hide() {
    this.store.dispatch(curriculumActions.unload());
    this.router.navigate([RouterUtils.getParentRoute(this.router.url, 1)]);
  }

  onSelect(event: any) {
    this.pdf = event.currentFiles[0];
  }

  send() {
    if (this.form.invalid) {
      FormUtils.markAllAsDirtyAndTouched(this.form);
    } else {
      this.modalMode$.pipe(take(1)).subscribe(async (modalMode) => {
        switch (modalMode) {
          case ModalMode.CREATE:
            const { data, error } = await this.storageSrv.uploadCurriculumFile(this.form.value.language, this.pdf);
            if (error) {
              throw error;
            }
            this.form.controls['pdf'].setValue(
              environment.apiUrl + '/storage/v1/object/public/curriculums/' + data.path,
            );
            this.store.dispatch(curriculumActions.create({ payload: this.form.value }));
            break;
          case ModalMode.UPDATE:
            this.store.dispatch(curriculumActions.update({ payload: this.form.value }));
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
    return curriculumNames;
  }
}
