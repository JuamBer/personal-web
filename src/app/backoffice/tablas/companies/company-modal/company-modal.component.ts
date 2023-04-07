import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
//COMPANY
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
import { Company } from '../models/company.model';
import { companyActions } from '../state/company.actions';
import { companyNames } from '../state/company.names';
import { companyReducer } from '../state/company.reducer';
import { CompanyState } from '../state/company.state';

@Component({
  selector: 'app-company-modal',
  templateUrl: './company-modal.component.html',
  styleUrls: ['./company-modal.component.scss'],
})
export class CompanyModalComponent implements OnInit {
  id: number;

  @ViewChild('createImagenesForm') createImagenesForm: ImagenesFormComponent;
  @ViewChild('updateImagenesForm') updateImagenesForm: ImagenesFormComponent;

  visible: boolean = false;

  company$: Observable<Company> = this.companyStore.select(
    companyReducer.getOne,
  );
  loading$: Observable<boolean> = this.companyStore.select(
    companyReducer.getLoading,
  );
  message$: Observable<ToastMessage> = this.companyStore
    .select(companyReducer.getMessage)
    .pipe(filter((i) => !!i));
  names: CommonNames = companyNames;

  errores: string[] = [];

  form: FormGroup;
  modalMode: ModalMode;

  subscriptions: Subscription[] = [];

  constructor(
    private formBuilder: FormBuilder,
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
          this.companyStore.dispatch(
            companyActions.loadOne({ id: Number(params.id) }),
          );
        }
      }
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  ngOnInit(): void {
    this.translate('es');
    this.form = this.formBuilder.group({
      id: [Date.now()],
      name: [undefined, [Validators.required]],
      description: [undefined, [Validators.required]],
      location: [undefined, [Validators.required]],
    });

    const companySubscription: Subscription = this.company$.subscribe(
      (company) => {
        this.patchValue(company);
      },
    );
    this.subscriptions.push(companySubscription);

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
      // this.toastSrv.add({ severity: 'warn', summary: 'Error', detail: this.translateSrv.instant('company.modal.invalid') });
      // let errorCampo = this.translateSrv.instant('company.modal.error');
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
        this.companyStore.dispatch(
          companyActions.create({ payload: this.form.value }),
        );
        break;
      case ModalMode.UPDATE:
        this.companyStore.dispatch(
          companyActions.update({ payload: this.form.value }),
        );
        break;
    }
  }

  show(modalMode: ModalMode) {
    this.patchValue(null);
    this.modalMode = modalMode;
    this.form.enable();
    if (modalMode == ModalMode.CREATE) {
      this.companyStore.dispatch(companyActions.unload());
    }
    if (modalMode == ModalMode.VIEW) {
      this.form.disable();
    }
    this.visible = true;
  }

  onHide() {
    this.visible = false;
    this.errores = [];
    this.companyStore.dispatch(companyActions.unload());
    this.form.reset();
    this.createImagenesForm?.reset();
    this.updateImagenesForm?.reset();
    this.router.navigate(['backoffice', 'companies']);
  }

  patchValue(company: Company) {
    if (!this.form) {
      return;
    }
    if (company) {
      this.form.patchValue({
        id: company.id,
        name: company.name,
        description: company.description,
        location: company.location,
      });
    } else {
      this.form.patchValue({
        id: Date.now(),
        name: undefined,
        description: undefined,
        location: undefined,
      });
    }
  }
}
