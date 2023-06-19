import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
//CURRICULUM
import { ImagenesFormComponent } from '@app/shared/components/imagenes/imagenes-form/imagenes-form.component';
import { ModalMode, ModalParams } from '@app/shared/models/modal-config/modal-mode';
import { ToastMessage } from '@app/shared/models/toast-message';
import { StorageService } from '@app/shared/services/storage.service';
import { CommonNames } from '@app/shared/state/common/common.names';
import { MessageHandlerType, ToastUtils } from '@app/shared/utils/ToastUtils';
import { environment } from '@env/environment';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { Observable, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Language } from '../../languages/models/language.model';
import { languageActions } from '../../languages/state/language.actions';
import { languageNames } from '../../languages/state/language.names';
import { languageReducer } from '../../languages/state/language.reducer';
import { LanguageState } from '../../languages/state/language.state';
import { Curriculum } from '../models/curriculum.model';
import { curriculumActions } from '../state/curriculum.actions';
import { curriculumNames } from '../state/curriculum.names';
import { curriculumReducer } from '../state/curriculum.reducer';
import { CurriculumState } from '../state/curriculum.state';

@Component({
  selector: 'app-curriculum-modal',
  templateUrl: './curriculum-modal.component.html',
  styleUrls: ['./curriculum-modal.component.scss'],
})
export class CurriculumModalComponent implements OnInit {
  id: number;

  @ViewChild('createImagenesForm') createImagenesForm: ImagenesFormComponent;
  @ViewChild('updateImagenesForm') updateImagenesForm: ImagenesFormComponent;

  visible: boolean = false;

  curriculum$: Observable<Curriculum> = this.curriculumstore.select(curriculumReducer.getOne);
  loading$: Observable<boolean> = this.curriculumstore.select(curriculumReducer.getLoading);
  message$: Observable<ToastMessage> = this.curriculumstore
    .select(curriculumReducer.getMessage)
    .pipe(filter((i) => !!i));
  names: CommonNames = curriculumNames;

  languages$: Observable<Language[]> = this.languageStore.select(languageReducer.getAll);
  languageNames: CommonNames = languageNames;

  errores: string[] = [];
  pdf: File;

  form: FormGroup;
  modalMode: ModalMode;

  subscriptions: Subscription[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private curriculumstore: Store<CurriculumState>,
    private languageStore: Store<LanguageState>,
    private toastSrv: MessageService,
    private translateSrv: TranslateService,
    private storageSrv: StorageService,
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
          this.curriculumstore.dispatch(curriculumActions.loadOne({ id: Number(params.id) }));
        }
      }
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  ngOnInit(): void {
    this.languageStore.dispatch(languageActions.loadAll({ payload: null }));
    this.form = this.formBuilder.group({
      id: [Date.now()],
      date: [new Date(), [Validators.required]],
      language: [undefined, [Validators.required]],
      pdf: [undefined],
    });

    const curriculumsubscription: Subscription = this.curriculum$.subscribe((curriculum) => {
      this.patchValue(curriculum);
    });
    this.subscriptions.push(curriculumsubscription);

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

  async send() {
    Object.values(this.form.controls).forEach((control) => {
      control.markAsDirty();
    });
    if (this.form.invalid) {
      // this.toastSrv.add({ severity: 'warn', summary: 'Error', detail: this.translateSrv.instant('curriculum.modal.invalid') });
      // let errorCampo = this.translateSrv.instant('curriculum.modal.error');
      // for (let name in this.form.controls) {
      //   let control = this.form.controls[name];
      //   let nameTrad = this.translateSrv.instant('columns.' + name)

      //   if (control.invalid && control.value == '' || control.invalid && control.value == null) {
      //     this.errores[name] = errorCampo + nameTrad
      //   }
      // }
      return;
    }

    const { data, error } = await this.storageSrv.uploadCurriculumFile(this.form.value.language, this.pdf);

    if (error) {
      throw error;
    }

    const url = environment.apiUrl + '/storage/v1/object/public/curriculums/' + data.path;
    console.log(url);

    switch (this.modalMode) {
      case ModalMode.CREATE:
        this.curriculumstore.dispatch(
          curriculumActions.create({
            payload: {
              ...this.form.value,
              pdf: url,
            },
          }),
        );
        break;
      case ModalMode.UPDATE:
        this.curriculumstore.dispatch(curriculumActions.update({ payload: this.form.value }));
        break;
    }
  }

  show(modalMode: ModalMode) {
    this.patchValue(null);
    this.modalMode = modalMode;
    if (modalMode == ModalMode.CREATE) {
      this.curriculumstore.dispatch(curriculumActions.unload());
    }

    this.visible = true;
  }

  upload(event) {
    this.pdf = event.currentFiles[0];
  }

  onHide() {
    this.visible = false;
    this.errores = [];
    this.curriculumstore.dispatch(curriculumActions.unload());
    this.form.reset();
    this.createImagenesForm?.reset();
    this.updateImagenesForm?.reset();
    this.router.navigate(['backoffice', curriculumNames.kebabCase.plural.normal]);
  }

  patchValue(curriculum: Curriculum) {
    if (!this.form) {
      return;
    }
    if (curriculum) {
      this.form.patchValue({
        id: curriculum.id,
        language: curriculum.language,
        pdf: curriculum.pdf,
        date: curriculum.date,
      });
    } else {
      this.form.patchValue({
        id: Date.now(),
        language: undefined,
        pdf: undefined,
        date: new Date(),
      });
    }
  }
  get ModalMode() {
    return ModalMode;
  }
}
