import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot, ResolveFn, Router, RouterStateSnapshot } from '@angular/router';
//CERTIFICATE
import { EntityModal } from '@app/backoffice/models/entity-modal.model';
import { ModalMode, ModalParams } from '@app/shared/models/modal-config/modal-mode';
import { ActionStatus, ActionType } from '@app/shared/state/common/common-state';
import { Naming, NumberMode } from '@app/shared/state/common/common.names';
import { FormUtils } from '@app/shared/utils/FormUtils';
import { RouterUtils } from '@app/shared/utils/router.utils';
import { Action, Store } from '@ngrx/store';
import { Observable, Subject, from } from 'rxjs';
import { filter, map, skip, take, takeUntil } from 'rxjs/operators';
import { CertificateGroup } from '../../certificate-groups/models/certificate-group.model';
import { certificateGroupActions } from '../../certificate-groups/state/certificate-group.actions';
import { certificateGroupReducer } from '../../certificate-groups/state/certificate-group.reducer';
import { CertificateType } from '../../certificate-types/models/certificate-type.model';
import { certificateTypeActions } from '../../certificate-types/state/certificate-type.actions';
import { certificateTypeReducer } from '../../certificate-types/state/certificate-type.reducer';
import { Company } from '../../companies/models/company.model';
import { companyActions } from '../../companies/state/company.actions';
import { companyReducer } from '../../companies/state/company.reducer';
import { Certificate, CertificateFormGroup } from '../models/certificate.model';
import { CertificateService } from '../services/certificate.service';
import { certificateActions } from '../state/certificate.actions';
import { certificateNames } from '../state/certificate.names';
import { certificateReducer } from '../state/certificate.reducer';

export const certificateModalTitleResolver: ResolveFn<string> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  return from(inject(CertificateService).getTitle(Number(route.paramMap.get('id')))).pipe(
    map((selected) => 'Juan Sáez García | Certificate Types | ' + selected.name),
  );
};

@Component({
  selector: 'app-certificate-modal',
  templateUrl: './certificate-modal.component.html',
  styleUrls: ['./certificate-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CertificateModalComponent implements OnInit, EntityModal<Certificate> {
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private store = inject(Store);
  private fb = inject(FormBuilder);

  visible = true;
  form: CertificateFormGroup = this.fb.group({
    id: this.fb.control<number | undefined>(new Date().getTime()),
    name: this.fb.control<string | undefined>(undefined, [Validators.required]),
    description: this.fb.control<string | undefined>(undefined, [Validators.required]),
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
    filter((action) => action.type === ActionType.CREATE_ONE && action.status === ActionStatus.SUCCESS),
  );
  certificateTypes$: Observable<CertificateType[]> = this.store.select(certificateTypeReducer.getAll);
  certificateGroups$: Observable<CertificateGroup[]> = this.store.select(certificateGroupReducer.getAll);
  companies$: Observable<Company[]> = this.store.select(companyReducer.getAll);

  ngOnInit(): void {
    this.store.dispatch(certificateGroupActions.loadAll({}));
    this.store.dispatch(certificateTypeActions.loadAll({}));
    this.store.dispatch(companyActions.loadAll({}));

    this.params$.subscribe((params) => this.store.dispatch(certificateActions.loadOne({ id: Number(params.id) })));
    this.action$.subscribe(() => {
      this.hide();
    });
    this.modalMode$.pipe(filter((modalMode) => modalMode === ModalMode.VIEW)).subscribe(() => {
      this.form.disable();
    });
    this.entity$.subscribe((entity) => {
      this.form.patchValue({
        id: entity.id,
        name: entity.name,
        description: entity.description,
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
    this.store.dispatch(certificateActions.unload());
    this.router.navigate([RouterUtils.getParentRoute(this.router.url, 1)]);
  }

  send() {
    if (this.form.invalid) {
      FormUtils.markAllAsDirtyAndTouched(this.form);
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
}
