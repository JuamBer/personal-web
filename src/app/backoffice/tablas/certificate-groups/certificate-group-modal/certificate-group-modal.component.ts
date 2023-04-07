import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
//CERTIFICATEGROUP
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
import { CertificateGroup } from '../models/certificate-group.model';
import { certificateGroupActions } from '../state/certificate-group.actions';
import { certificateGroupNames } from '../state/certificate-group.names';
import { certificateGroupReducer } from '../state/certificate-group.reducer';
import { CertificateGroupState } from '../state/certificate-group.state';

@Component({
  selector: 'app-certificate-group-modal',
  templateUrl: './certificate-group-modal.component.html',
  styleUrls: ['./certificate-group-modal.component.scss'],
})
export class CertificateGroupModalComponent implements OnInit {
  id: number;

  @ViewChild('createImagenesForm') createImagenesForm: ImagenesFormComponent;
  @ViewChild('updateImagenesForm') updateImagenesForm: ImagenesFormComponent;

  visible: boolean = false;

  certificategroup$: Observable<CertificateGroup> =
    this.certificategroupStore.select(certificateGroupReducer.getOne);
  loading$: Observable<boolean> = this.certificategroupStore.select(
    certificateGroupReducer.getLoading,
  );
  message$: Observable<ToastMessage> = this.certificategroupStore
    .select(certificateGroupReducer.getMessage)
    .pipe(filter((i) => !!i));
  names: CommonNames = certificateGroupNames;
  errores: string[] = [];

  form: FormGroup;
  modalMode: ModalMode;

  subscriptions: Subscription[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private certificategroupStore: Store<CertificateGroupState>,
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
          this.certificategroupStore.dispatch(
            certificateGroupActions.loadOne({ id: Number(params.id) }),
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
      id: [Date.now()],
      name: [undefined, [Validators.required]],
      description: [undefined, [Validators.required]],
    });

    const certificategroupSubscription: Subscription =
      this.certificategroup$.subscribe((certificategroup) => {
        this.patchValue(certificategroup);
      });
    this.subscriptions.push(certificategroupSubscription);

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
      // this.toastSrv.add({ severity: 'warn', summary: 'Error', detail: this.translateSrv.instant('certificategroup.modal.invalid') });
      // let errorCampo = this.translateSrv.instant('certificategroup.modal.error');
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
        this.certificategroupStore.dispatch(
          certificateGroupActions.create({ payload: this.form.value }),
        );
        break;
      case ModalMode.UPDATE:
        this.certificategroupStore.dispatch(
          certificateGroupActions.update({ payload: this.form.value }),
        );
        break;
    }
  }

  show(modalMode: ModalMode) {
    this.patchValue(null);
    this.modalMode = modalMode;
    this.form.enable();
    if (modalMode == ModalMode.CREATE) {
      this.certificategroupStore.dispatch(certificateGroupActions.unload());
    }
    if (modalMode == ModalMode.VIEW) {
      this.form.disable();
    }

    this.visible = true;
  }

  onHide() {
    this.visible = false;
    this.errores = [];
    this.certificategroupStore.dispatch(certificateGroupActions.unload());
    this.form.reset();
    this.createImagenesForm?.reset();
    this.updateImagenesForm?.reset();
    this.router.navigate([
      'backoffice',
      certificateGroupNames.kebabCase.plural.normal,
    ]);
  }

  patchValue(certificategroup: CertificateGroup) {
    if (!this.form) {
      return;
    }
    if (certificategroup) {
      this.form.patchValue({
        id: certificategroup.id,
        name: certificategroup.name,
        description: certificategroup.description,
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
