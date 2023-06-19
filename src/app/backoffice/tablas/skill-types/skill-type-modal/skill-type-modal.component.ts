import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
//SKILLTYPE
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
import { SkillType } from '../models/skill-type.model';
import { skillTypeActions } from '../state/skill-type.actions';
import { skillTypeNames } from '../state/skill-type.names';
import { skillTypeReducer } from '../state/skill-type.reducer';
import { SkillTypeState } from '../state/skill-type.state';

@Component({
  selector: 'app-skill-type-modal',
  templateUrl: './skill-type-modal.component.html',
  styleUrls: ['./skill-type-modal.component.scss'],
})
export class SkillTypeModalComponent implements OnInit {
  id: number;

  @ViewChild('createImagenesForm') createImagenesForm: ImagenesFormComponent;
  @ViewChild('updateImagenesForm') updateImagenesForm: ImagenesFormComponent;

  visible: boolean = false;

  skilltype$: Observable<SkillType> = this.skilltypeStore.select(skillTypeReducer.getOne);
  loading$: Observable<boolean> = this.skilltypeStore.select(skillTypeReducer.getLoading);
  message$: Observable<ToastMessage> = this.skilltypeStore.select(skillTypeReducer.getMessage).pipe(filter((i) => !!i));
  names: CommonNames = skillTypeNames;

  errores: string[] = [];

  form: FormGroup;
  modalMode: ModalMode;

  subscriptions: Subscription[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private skilltypeStore: Store<SkillTypeState>,
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
          this.skilltypeStore.dispatch(skillTypeActions.loadOne({ id: Number(params.id) }));
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

    const skilltypeSubscription: Subscription = this.skilltype$.subscribe((skilltype) => {
      this.patchValue(skilltype);
    });
    this.subscriptions.push(skilltypeSubscription);

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
      // this.toastSrv.add({ severity: 'warn', summary: 'Error', detail: this.translateSrv.instant('skilltype.modal.invalid') });
      // let errorCampo = this.translateSrv.instant('skilltype.modal.error');
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
        this.skilltypeStore.dispatch(skillTypeActions.create({ payload: this.form.value }));
        break;
      case ModalMode.UPDATE:
        this.skilltypeStore.dispatch(skillTypeActions.update({ payload: this.form.value }));
        break;
    }
  }

  show(modalMode: ModalMode) {
    this.patchValue(null);
    this.modalMode = modalMode;
    if (modalMode == ModalMode.CREATE) {
      this.skilltypeStore.dispatch(skillTypeActions.unload());
    }

    this.visible = true;
  }

  onHide() {
    this.visible = false;
    this.errores = [];
    this.skilltypeStore.dispatch(skillTypeActions.unload());
    this.form.reset();
    this.createImagenesForm?.reset();
    this.updateImagenesForm?.reset();
    this.router.navigate(['backoffice', skillTypeNames.kebabCase.plural.normal]);
  }

  patchValue(skilltype: SkillType) {
    if (!this.form) {
      return;
    }
    if (skilltype) {
      this.form.patchValue({
        id: skilltype.id,
        name: skilltype.name,
        description: skilltype.description,
      });
    } else {
      this.form.patchValue({
        id: Date.now(),
        name: undefined,
        description: undefined,
      });
    }
  }
  get ModalMode() {
    return ModalMode;
  }
}
