import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
//CERTIFICATE
import { ImagenesFormComponent } from '@app/shared/components/imagenes/imagenes-form/imagenes-form.component';
import { ModalMode, ModalParams } from '@app/shared/models/modal-config/modal-mode';
import { ToastMessage } from '@app/shared/models/toast-message';
import { CommonNames } from '@app/shared/state/common/common.names';
import { MessageHandlerType, ToastUtils } from '@app/shared/utils/ToastUtils';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { Observable, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { CertificateGroup } from '../../certificate-groups/models/certificate-group.model';
import { CertificateGroupActions } from '../../certificate-groups/state/certificate-group.actions';
import { CertificateGroupReducer } from '../../certificate-groups/state/certificate-group.reducer';
import { CertificateGroupState } from '../../certificate-groups/state/certificate-group.state';
import { CertificateType } from '../../certificate-types/models/certificate-type.model';
import { certificateTypeActions } from '../../certificate-types/state/certificate-type.actions';
import { certificateTypeNames } from '../../certificate-types/state/certificate-type.names';
import { certificateTypeReducer } from '../../certificate-types/state/certificate-type.reducer';
import { CertificateTypeState } from '../../certificate-types/state/certificate-type.state';
import { Company } from '../../companies/models/company.model';
import { companyActions } from '../../companies/state/company.actions';
import { companyNames } from '../../companies/state/company.names';
import { companyReducer } from '../../companies/state/company.reducer';
import { CompanyState } from '../../companies/state/company.state';
import { Certificate } from '../models/certificate.model';
import { certificateActions } from '../state/certificate.actions';
import { certificateNames } from '../state/certificate.names';
import { certificateReducer } from '../state/certificate.reducer';
import { CertificateState } from '../state/certificate.state';

@Component({
  selector: 'app-certificate-modal',
  templateUrl: './certificate-modal.component.html',
  styleUrls: ['./certificate-modal.component.scss'],
})
export class CertificateModalComponent implements OnInit {
  private certificateGroupActions = inject(CertificateGroupActions);
  private certificateGroupReducer = inject(CertificateGroupReducer);

  id: number;

  @ViewChild('createImagenesForm') createImagenesForm: ImagenesFormComponent;
  @ViewChild('updateImagenesForm') updateImagenesForm: ImagenesFormComponent;

  visible: boolean = false;

  certificate$: Observable<Certificate> = this.certificateStore.select(certificateReducer.getOne);
  loading$: Observable<boolean> = this.certificateStore.select(certificateReducer.getLoading);
  message$: Observable<ToastMessage> = this.certificateStore
    .select(certificateReducer.getMessage)
    .pipe(filter((i) => !!i));
  names: CommonNames = certificateNames;

  certificateTypes$: Observable<CertificateType[]> = this.certificateTypeStore.select(certificateTypeReducer.getAll);
  certificateTypeNames: CommonNames = certificateTypeNames;
  certificateGroups$: Observable<CertificateGroup[]> = this.certificateGroupStore.select(
    this.certificateGroupReducer.getAll,
  );
  companies$: Observable<Company[]> = this.companyStore.select(companyReducer.getAll);
  companyNames: CommonNames = companyNames;
  errores: string[] = [];

  form: FormGroup;
  modalMode: ModalMode;

  subscriptions: Subscription[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private certificateStore: Store<CertificateState>,
    private certificateTypeStore: Store<CertificateTypeState>,
    private certificateGroupStore: Store<CertificateGroupState>,
    private companyStore: Store<CompanyState>,
    private toastSrv: MessageService,
    private translateSrv: TranslateService,
    private config: PrimeNGConfig,
    private route: ActivatedRoute,
    private router: Router,
    private toastUtils: ToastUtils,
  ) {
    translateSrv.setDefaultLang('es');
    this.route.params.subscribe((params: ModalParams) => {
      this.id = Number(params.id);
      if (params.modalMode) {
        switch (params.modalMode) {
          case 'VIEW':
            this.show(ModalMode.VIEW);
            break;
          case 'UPDATE':
            this.show(ModalMode.UPDATE);
            break;
          case 'CREATE':
            this.show(ModalMode.CREATE);
            break;
          default:
            this.show(ModalMode.VIEW);
            break;
        }
        if (params.modalMode !== 'CREATE') {
          this.certificateStore.dispatch(certificateActions.loadOne({ id: Number(params.id) }));
        }
      }
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  ngOnInit(): void {
    this.certificateGroupStore.dispatch(this.certificateGroupActions.loadAll({ payload: null }));
    this.certificateTypeStore.dispatch(certificateTypeActions.loadAll({ payload: null }));
    this.companyStore.dispatch(companyActions.loadAll({ payload: null }));
    this.form = this.formBuilder.group({
      id: [Date.now()],
      name: [undefined, [Validators.required]],
      description: [undefined, [Validators.required]],
      company: [undefined, [Validators.required]],
      certificateGroup: [undefined, [Validators.required]],
      certificateType: [undefined, [Validators.required]],
      image: [undefined, [Validators.required]],
      pdf: [undefined, [Validators.required]],
      url: [undefined, [Validators.required]],
      date: [new Date(), [Validators.required]],
      github: [undefined],
      web: [undefined],
      microsoftStore: [undefined],
      playStore: [undefined],
    });

    const certificatesubscription: Subscription = this.certificate$.subscribe((certificate) => {
      this.patchValue(certificate);
    });
    this.subscriptions.push(certificatesubscription);

    const messageSubscription = this.message$.subscribe(async (message: ToastMessage) => {
      const res = await this.toastUtils.messageHandler(
        this.names.camelCase.singular,
        MessageHandlerType.HIDE_MODAL,
        message,
      );
      if (res !== null) {
        this.visible = res;
      }
    });
    this.subscriptions.push(messageSubscription);
  }

  translate(lang: string) {
    this.translateSrv.use(lang);
    this.translateSrv.get('calendar').subscribe((res) => this.config.setTranslation(res));
  }

  send() {
    Object.values(this.form.controls).forEach((control) => {
      control.markAsDirty();
    });
    if (this.form.invalid) {
      // this.toastSrv.add({ severity: 'warn', summary: 'Error', detail: this.translateSrv.instant('certificate.modal.invalid') });
      // let errorCampo = this.translateSrv.instant('certificate.modal.error');
      // for (let name in this.form.controls) {
      //   let control = this.form.controls[name];
      //   let nameTrad = this.translateSrv.instant('columns.' + name)

      //   if (control.invalid && control.value == '' || control.invalid && control.value == null) {
      //     this.errores[name] = errorCampo + nameTrad
      //   }
      // }
      return;
    }

    switch (this.modalMode) {
      case ModalMode.CREATE:
        this.certificateStore.dispatch(certificateActions.create({ payload: this.form.value }));
        break;
      case ModalMode.UPDATE:
        this.certificateStore.dispatch(certificateActions.update({ payload: this.form.value }));
        break;
    }
  }

  show(modalMode: ModalMode) {
    this.patchValue(null);
    this.modalMode = modalMode;
    if (modalMode == ModalMode.CREATE) {
      this.certificateStore.dispatch(certificateActions.unload());
    }

    this.visible = true;
  }

  onHide() {
    this.visible = false;
    this.errores = [];
    this.certificateStore.dispatch(certificateActions.unload());
    this.form.reset();
    this.createImagenesForm?.reset();
    this.updateImagenesForm?.reset();
    this.router.navigate(['backoffice', certificateNames.kebabCase.plural.normal]);
  }

  patchValue(certificate: Certificate) {
    if (!this.form) {
      return;
    }
    if (certificate) {
      this.form.patchValue({
        id: certificate.id,
        name: certificate.name,
        description: certificate.description,
        company: certificate.company,
        certificateGroup: certificate.certificateGroup,
        certificateType: certificate.certificateType,
        image: certificate.image,
        url: certificate.url,
        pdf: certificate.pdf,
        date: new Date(certificate.date),
        github: certificate.github,
        web: certificate.web,
        playStore: certificate.playStore,
        microsoftStore: certificate.microsoftStore,
      });
    } else {
      this.form.patchValue({
        id: Date.now(),
        name: undefined,
        description: undefined,
        company: undefined,
        certificateGroup: undefined,
        certificateType: undefined,
        image: undefined,
        url: undefined,
        pdf: undefined,
        date: new Date(),
        github: undefined,
        web: undefined,
        playStore: undefined,
        microsoftStore: undefined,
      });
    }
  }
  get ModalMode() {
    return ModalMode;
  }
}
