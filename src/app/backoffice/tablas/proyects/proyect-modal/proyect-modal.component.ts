import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
//PROYECT
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
import { Proyect } from '../models/proyect.model';
import { proyectActions } from '../state/proyect.actions';
import { proyectNames } from '../state/proyect.names';
import { proyectReducer } from '../state/proyect.reducer';
import { ProyectState } from '../state/proyect.state';

@Component({
  selector: 'app-proyect-modal',
  templateUrl: './proyect-modal.component.html',
  styleUrls: ['./proyect-modal.component.scss'],
})
export class ProyectModalComponent implements OnInit {
  id: number;

  @ViewChild('createImagenesForm') createImagenesForm: ImagenesFormComponent;
  @ViewChild('updateImagenesForm') updateImagenesForm: ImagenesFormComponent;

  visible: boolean = false;

  proyect$: Observable<Proyect> = this.proyectstore.select(proyectReducer.getOne);
  loading$: Observable<boolean> = this.proyectstore.select(proyectReducer.getLoading);
  message$: Observable<ToastMessage> = this.proyectstore.select(proyectReducer.getMessage).pipe(filter((i) => !!i));
  names: CommonNames = proyectNames;

  errores: string[] = [];

  form: FormGroup;
  modalMode: ModalMode;

  subscriptions: Subscription[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private proyectstore: Store<ProyectState>,
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
          this.proyectstore.dispatch(proyectActions.loadOne({ id: Number(params.id) }));
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
      image: [undefined, [Validators.required]],
      date: [new Date(), [Validators.required]],
      links: [undefined, []],
    });

    const proyectsubscription: Subscription = this.proyect$.subscribe((proyect) => {
      this.patchValue(proyect);
    });
    this.subscriptions.push(proyectsubscription);

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
      // this.toastSrv.add({ severity: 'warn', summary: 'Error', detail: this.translateSrv.instant('proyect.modal.invalid') });
      // let errorCampo = this.translateSrv.instant('proyect.modal.error');
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
        this.proyectstore.dispatch(proyectActions.create({ payload: this.form.value }));
        break;
      case ModalMode.UPDATE:
        this.proyectstore.dispatch(proyectActions.update({ payload: this.form.value }));
        break;
    }
  }

  show(modalMode: ModalMode) {
    this.patchValue(null);
    this.modalMode = modalMode;
    if (modalMode == ModalMode.CREATE) {
      this.proyectstore.dispatch(proyectActions.unload());
    }

    this.visible = true;
  }

  onHide() {
    this.visible = false;
    this.errores = [];
    this.proyectstore.dispatch(proyectActions.unload());
    this.form.reset();
    this.createImagenesForm?.reset();
    this.updateImagenesForm?.reset();
    this.router.navigate(['backoffice', proyectNames.kebabCase.plural.normal]);
  }

  patchValue(proyect: Proyect) {
    if (!this.form) {
      return;
    }
    if (proyect) {
      this.form.patchValue({
        id: proyect.id,
        name: proyect.name,
        description: proyect.description,
        links: proyect.links,
        image: proyect.image,
        date: proyect.date,
      });
    } else {
      this.form.patchValue({
        id: Date.now(),
        name: undefined,
        description: undefined,
        links: undefined,
        image: undefined,
        date: new Date(),
      });
    }
  }

  get ModalMode() {
    return ModalMode;
  }
}
