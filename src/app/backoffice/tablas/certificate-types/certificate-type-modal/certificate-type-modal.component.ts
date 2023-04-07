import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
//CERTIFICATETYPE
import { ImagenesFormComponent } from '@app/shared/components/imagenes/imagenes-form/imagenes-form.component';
import {
  ModalMode,
  ModalParams,
} from '@app/shared/models/modal-config/modal-mode';
import { ToastMessage } from '@app/shared/models/toast-message';
import { CommonNames } from '@app/shared/state/common/common.names';
import { MessageHandlerType, ToastUtils } from '@app/shared/utils/ToastUtils';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { Observable, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { CertificateType } from '../models/certificate-type.model';
import { certificateTypeActions } from '../state/certificate-type.actions';
import { certificateTypeNames } from '../state/certificate-type.names';
import { certificateTypeReducer } from '../state/certificate-type.reducer';
import { CertificateTypeState } from '../state/certificate-type.state';

@Component({
  selector: 'app-certificate-type-modal',
  templateUrl: './certificate-type-modal.component.html',
  styleUrls: ['./certificate-type-modal.component.scss'],
})
export class CertificateTypeModalComponent implements OnInit {
  id: number;

  @ViewChild('createImagenesForm') createImagenesForm: ImagenesFormComponent;
  @ViewChild('updateImagenesForm') updateImagenesForm: ImagenesFormComponent;

  visible: boolean = false;

  certificateType$: Observable<CertificateType> =
    this.certificateTypeStore.select(certificateTypeReducer.getOne);
  loading$: Observable<boolean> = this.certificateTypeStore.select(
    certificateTypeReducer.getLoading,
  );
  message$: Observable<ToastMessage> = this.certificateTypeStore
    .select(certificateTypeReducer.getMessage)
    .pipe(filter((i) => !!i));
  names: CommonNames = certificateTypeNames;
  errores: string[] = [];

  form: FormGroup;
  modalMode: ModalMode;

  subscriptions: Subscription[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private certificateTypeStore: Store<CertificateTypeState>,
    private messageSrv: MessageService,
    private translateSrv: TranslateService,
    private config: PrimeNGConfig,
    private route: ActivatedRoute,
    private router: Router,
    private toastUtils: ToastUtils,
  ) {
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
          this.certificateTypeStore.dispatch(
            certificateTypeActions.loadOne({ id: Number(params.id) }),
          );
        }
      }
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      id: [Date.now(), [Validators.required]],
      name: [undefined, [Validators.required]],
      description: [undefined, [Validators.required]],
    });

    const certificatetypeSubscription: Subscription =
      this.certificateType$.subscribe((certificatetype) => {
        this.patchValue(certificatetype);
      });
    this.subscriptions.push(certificatetypeSubscription);

    const messageSubscription = this.message$.subscribe(
      async (message: ToastMessage) => {
        const res = await this.toastUtils.messageHandler(
          this.names.camelCase.singular,
          MessageHandlerType.HIDE_MODAL,
          message,
        );
        if (res !== null) {
          this.visible = res;
        }
      },
    );
    this.subscriptions.push(messageSubscription);
  }

  translate(lang: string) {
    this.translateSrv.use(lang);
    this.translateSrv
      .get('calendar')
      .subscribe((res) => this.config.setTranslation(res));
  }

  send() {
    Object.values(this.form.controls).forEach((control) => {
      control.markAsDirty();
    });
    if (this.form.invalid) {
      // this.messageSrv.add({
      //   severity: 'warn',
      //   summary: 'Error',
      //   detail: this.translateSrv.instant('certificatetype.modal.invalid'),
      // });
      // let errorCampo = this.translateSrv.instant('certificatetype.modal.error');
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
        this.certificateTypeStore.dispatch(
          certificateTypeActions.create({ payload: this.form.value }),
        );
        break;
      case ModalMode.UPDATE:
        this.certificateTypeStore.dispatch(
          certificateTypeActions.update({ payload: this.form.value }),
        );
        break;
    }
  }

  show(modalMode: ModalMode) {
    this.patchValue(null);
    this.modalMode = modalMode;
    this.form.enable();
    if (modalMode == ModalMode.CREATE) {
      this.certificateTypeStore.dispatch(certificateTypeActions.unload());
    }
    if (modalMode == ModalMode.VIEW) {
      this.form.disable();
    }
    this.visible = true;
  }

  onHide() {
    this.visible = false;
    this.errores = [];
    this.certificateTypeStore.dispatch(certificateTypeActions.unload());
    this.form.reset();
    this.createImagenesForm?.reset();
    this.updateImagenesForm?.reset();
    this.router.navigate([
      'backoffice',
      certificateTypeNames.kebabCase.plural.normal,
    ]);
  }

  patchValue(certificatetype: CertificateType) {
    if (!this.form) {
      return;
    }
    if (certificatetype) {
      this.form.patchValue({
        id: certificatetype.id,
        name: certificatetype.name,
        description: certificatetype.description,
      });
    } else {
      this.form.patchValue({
        id: Date.now(),
        name: undefined,
        description: undefined,
      });
    }
  }
}
