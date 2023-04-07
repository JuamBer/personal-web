import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
//MOUNT
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
import { Mount } from '../models/mount.model';
import { mountActions } from '../state/mount.actions';
import { mountNames } from '../state/mount.names';
import { mountReducer } from '../state/mount.reducer';
import { MountState } from '../state/mount.state';

@Component({
  selector: 'app-mount-modal',
  templateUrl: './mount-modal.component.html',
  styleUrls: ['./mount-modal.component.scss'],
})
export class MountModalComponent implements OnInit {
  id: number;

  @ViewChild('createImagenesForm') createImagenesForm: ImagenesFormComponent;
  @ViewChild('updateImagenesForm') updateImagenesForm: ImagenesFormComponent;

  visible: boolean = false;

  mount$: Observable<Mount> = this.mountstore.select(mountReducer.getOne);
  loading$: Observable<boolean> = this.mountstore.select(
    mountReducer.getLoading,
  );
  message$: Observable<ToastMessage> = this.mountstore
    .select(mountReducer.getMessage)
    .pipe(filter((i) => !!i));
  names: CommonNames = mountNames;

  errores: string[] = [];

  form: FormGroup;
  componentsForm: FormArray = this.formBuilder.array([]);
  get components() {
    return this.form.controls['components'].value as Array<string>;
  }
  imagesForm: FormArray = this.formBuilder.array([]);
  get images() {
    return this.form.controls['images'].value as Array<string>;
  }
  modalMode: ModalMode;

  subscriptions: Subscription[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private mountstore: Store<MountState>,
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
          this.mountstore.dispatch(
            mountActions.loadOne({ id: Number(params.id) }),
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
      user: [undefined, [Validators.required]],
      video: [undefined],
      description: [undefined, [Validators.required]],
      date: [new Date(), [Validators.required]],
      components: [[], [Validators.required]],
      images: this.imagesForm,
    });

    const mountsubscription: Subscription = this.mount$.subscribe((mount) => {
      this.patchValue(mount);
    });
    this.subscriptions.push(mountsubscription);

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
      // this.toastSrv.add({ severity: 'warn', summary: 'Error', detail: this.translateSrv.instant('mount.modal.invalid') });
      // let errorCampo = this.translateSrv.instant('mount.modal.error');
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
        this.mountstore.dispatch(
          mountActions.create({
            payload: this.form.value,
          }),
        );
        break;
      case ModalMode.UPDATE:
        this.mountstore.dispatch(
          mountActions.update({ payload: this.form.value }),
        );
        break;
    }
  }

  show(modalMode: ModalMode) {
    this.patchValue(null);
    this.modalMode = modalMode;
    if (modalMode == ModalMode.CREATE) {
      this.mountstore.dispatch(mountActions.unload());
    }

    this.visible = true;
  }

  onHide() {
    this.visible = false;
    this.errores = [];
    this.mountstore.dispatch(mountActions.unload());
    this.form.reset();
    this.createImagenesForm?.reset();
    this.updateImagenesForm?.reset();
    this.router.navigate(['backoffice', mountNames.kebabCase.plural.normal]);
  }

  patchValue(mount: Mount) {
    if (!this.form) {
      return;
    }
    if (mount) {
      this.form.patchValue({
        id: mount.id,
        description: mount.description,
        date: mount.date,
        user: mount.user,
        video: mount.video,
        components: mount.components,
        images: mount.images,
      });
    } else {
      this.form.patchValue({
        id: Date.now(),
        description: undefined,
        date: new Date(),
        user: undefined,
        video: undefined,
        components: [],
        images: [],
      });
    }
  }

  addComponent(component: string) {
    this.components.push(component);
  }

  deleteComponent(index: number) {
    // this.components.removeAt(index);
  }
}
