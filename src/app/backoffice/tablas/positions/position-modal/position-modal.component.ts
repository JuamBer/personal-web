import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalMode, ModalParams } from '@app/shared/models/modal-config/modal-mode';
import { ToastMessage } from '@app/shared/models/toast-message';
import * as fromAccount from '@app/shared/state/account/account.reducer';
import { CommonNames } from '@app/shared/state/common/common.names';
import { MessageHandlerType, ToastUtils } from '@app/shared/utils/ToastUtils';
import { Utils } from '@app/shared/utils/Utils';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Observable, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Company } from '../../companies/models/company.model';
import { companyActions } from '../../companies/state/company.actions';
import { companyReducer } from '../../companies/state/company.reducer';
import { CompanyState } from '../../companies/state/company.state';
import { Position } from '../models/position.model';
import { positionActions } from '../state/position.actions';
import { positionNames } from '../state/position.names';
import { positionReducer } from '../state/position.reducer';
import { PositionState } from '../state/position.state';

@Component({
  selector: 'app-position-modal',
  templateUrl: './position-modal.component.html',
  styleUrls: ['./position-modal.component.scss'],
})
export class PositionModalComponent implements OnInit, OnDestroy {
  visible: boolean = false;

  loading$: Observable<boolean> = this.store.select(positionReducer.getLoading);
  position$: Observable<Position> = this.store.select(positionReducer.getOne);
  message$: Observable<ToastMessage> = this.store.select(positionReducer.getMessage).pipe(filter((i) => !!i));
  names: CommonNames = positionNames;
  companies$: Observable<Company[]> = this.companyStore.select(companyReducer.getAll);
  errores: string[] = [];
  form: FormGroup;
  es: any;
  modalMode: ModalMode;
  prepared: boolean = false;
  submitB: boolean = false;

  subscriptions: Subscription[] = [];

  constructor(
    private store: Store<PositionState>,
    private companyStore: Store<CompanyState>,
    private toastSrv: MessageService,
    private formBuilder: FormBuilder,
    private router: Router,
    private accountStore: Store<fromAccount.AppState>,
    private translateSrv: TranslateService,
    private confirmationSrv: ConfirmationService,
    private messageSrv: MessageService,
    private route: ActivatedRoute,
    private toastUtils: ToastUtils,
  ) {
    this.route.params.subscribe((params: ModalParams) => {
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
          this.store.dispatch(positionActions.loadOne({ id: Number(params.id) }));
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
      company: [undefined, [Validators.required]],
      dateFrom: [new Date(), [Validators.required]],
      dateTo: [new Date()],
    });

    const positionSubscription: Subscription = this.position$.subscribe((position) => {
      this.patchValue(position);
    });
    this.subscriptions.push(positionSubscription);
    this.companyStore.dispatch(companyActions.loadAll({ payload: null }));
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
  }

  show(modalMode: ModalMode) {
    this.patchValue(null);
    this.modalMode = modalMode;
    this.form?.enable();
    if (modalMode == ModalMode.CREATE) {
      this.store.dispatch(positionActions.unload());
    }
    if (modalMode == ModalMode.VIEW) {
      this.form?.disable();
    }

    this.visible = true;
  }

  onHide() {
    this.visible = false;
    this.errores = [];
    this.store.dispatch(positionActions.unload());
    this.form.reset();
    this.submitB = false;
    this.router.navigate(['backoffice', this.names.kebabCase.plural.normal]);
  }

  patchValue(position: Position) {
    if (!this.form) {
      return;
    }
    if (position) {
      this.form.patchValue({
        id: position.id,
        name: position.name,
        description: position.description,
        company: position.company,
        dateFrom: new Date(position.dateFrom),
        dateTo: new Date(position.dateTo),
      });
    } else {
      this.form.patchValue({
        id: Date.now(),
        name: undefined,
        description: undefined,
        company: undefined,
        dateFrom: new Date(),
        dateTo: new Date(),
      });
    }
  }

  send() {
    this.submitB = true;
    Object.values(this.form.controls).forEach((control) => {
      control.markAsDirty();
    });
    if (this.form.invalid) {
      this.toastSrv.add({
        severity: 'warn',
        summary: 'Error',
        detail: this.translateSrv.instant('user.modal.invalid'),
      });
      let errorCampo = this.translateSrv.instant('position.modal.error');
      for (let name in this.form.controls) {
        let control = this.form.controls[name];
        let nameTrad = this.translateSrv.instant('columns.' + name);

        if ((control.invalid && control.value == '') || (control.invalid && control.value == null)) {
          this.errores[name] = errorCampo + nameTrad;
        }
      }
      return;
    }

    switch (this.modalMode) {
      case ModalMode.CREATE:
        this.store.dispatch(positionActions.create({ payload: this.form.value }));
        break;
      case ModalMode.UPDATE:
        this.store.dispatch(positionActions.update({ payload: this.form.value }));
        break;
    }
  }

  calculateMaxWidth(desktopMaxWidth: string): string {
    return Utils.calculateMaxWidth(desktopMaxWidth);
  }
  get ModalMode() {
    return ModalMode;
  }
}
