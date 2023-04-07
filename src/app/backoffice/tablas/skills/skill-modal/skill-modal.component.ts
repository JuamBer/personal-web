import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
//SKILL
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
import { SkillType } from '../../skill-types/models/skill-type.model';
import { skillTypeActions } from '../../skill-types/state/skill-type.actions';
import { skillTypeNames } from '../../skill-types/state/skill-type.names';
import { skillTypeReducer } from '../../skill-types/state/skill-type.reducer';
import { SkillTypeState } from '../../skill-types/state/skill-type.state';
import { Skill } from '../models/skill.model';
import { skillActions } from '../state/skill.actions';
import { skillNames } from '../state/skill.names';
import { skillReducer } from '../state/skill.reducer';
import { SkillState } from '../state/skill.state';

@Component({
  selector: 'app-skill-modal',
  templateUrl: './skill-modal.component.html',
  styleUrls: ['./skill-modal.component.scss'],
})
export class SkillModalComponent implements OnInit {
  id: number;

  @ViewChild('createImagenesForm') createImagenesForm: ImagenesFormComponent;
  @ViewChild('updateImagenesForm') updateImagenesForm: ImagenesFormComponent;

  visible: boolean = false;

  skill$: Observable<Skill> = this.skillStore.select(skillReducer.getOne);
  loading$: Observable<boolean> = this.skillStore.select(
    skillReducer.getLoading,
  );
  message$: Observable<ToastMessage> = this.skillStore
    .select(skillReducer.getMessage)
    .pipe(filter((i) => !!i));
  names: CommonNames = skillNames;
  skillTypeNames: CommonNames = skillTypeNames;
  skillTypes: SkillType[] = [];
  errores: string[] = [];

  form: FormGroup;
  modalMode: ModalMode;

  subscriptions: Subscription[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private skillStore: Store<SkillState>,
    private skillTypeStore: Store<SkillTypeState>,
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
          this.skillStore.dispatch(
            skillActions.loadOne({ id: Number(params.id) }),
          );
        }
      }
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  ngOnInit(): void {
    this.skillTypeStore.dispatch(skillTypeActions.loadAll({ payload: null }));
    this.skillTypeStore
      .select(skillTypeReducer.getAll)
      .subscribe((skillTypes) => (this.skillTypes = skillTypes));
    this.form = this.formBuilder.group({
      id: [Date.now()],
      name: [undefined, [Validators.required]],
      percentage: [0, [Validators.required]],
      skillType: [undefined, [Validators.required]],
    });

    const skillSubscription: Subscription = this.skill$.subscribe((skill) => {
      this.patchValue(skill);
    });
    this.subscriptions.push(skillSubscription);

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
      // this.toastSrv.add({ severity: 'warn', summary: 'Error', detail: this.translateSrv.instant('skill.modal.invalid') });
      // let errorCampo = this.translateSrv.instant('skill.modal.error');
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
        this.skillStore.dispatch(
          skillActions.create({ payload: this.form.value }),
        );
        break;
      case ModalMode.UPDATE:
        this.skillStore.dispatch(
          skillActions.update({ payload: this.form.value }),
        );
        break;
    }
  }

  show(modalMode: ModalMode) {
    this.patchValue(null);
    this.modalMode = modalMode;
    if (modalMode == ModalMode.CREATE) {
      this.skillStore.dispatch(skillActions.unload());
    }

    this.visible = true;
  }

  onHide() {
    this.visible = false;
    this.errores = [];
    this.skillStore.dispatch(skillActions.unload());
    this.form.reset();
    this.createImagenesForm?.reset();
    this.updateImagenesForm?.reset();
    this.router.navigate(['backoffice', skillNames.kebabCase.plural.normal]);
  }

  patchValue(skill: Skill) {
    if (!this.form) {
      return;
    }
    if (skill) {
      this.form.patchValue({
        id: skill.id,
        name: skill.name,
        percentage: skill.percentage,
        skillType: skill.skillType,
      });
    } else {
      this.form.patchValue({
        id: Date.now(),
        name: undefined,
        percentage: 0,
        skillType: undefined,
      });
    }
  }
}
