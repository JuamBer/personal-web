import { Injectable, OnInit } from '@angular/core';
import { Language } from '@app/backoffice/tablas/languages/models/language.model';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { MessageService } from 'primeng/api';
import {
  ToastMessage,
  ToastMessageType,
  ToastSeverity,
} from '../models/toast-message';
import { PublicLanguageStateModule } from '../state/languages/public-language-state.module';
import { publicLanguageReducer } from '../state/languages/public-language.reducer';
import { PublicLanguageState } from '../state/languages/public-language.state';

export enum MessageHandlerType {
  HIDE_MODAL = 'HIDE_MODAL',
  KEEP_MODAL = 'KEEP_MODAL',
}
@Injectable({
  providedIn: 'any',
  deps: [PublicLanguageStateModule],
})
export class ToastUtils implements OnInit {
  language!: Language;

  constructor(
    private translateSrv: TranslateService,
    private toastSrv: MessageService,
    private publicLanguageState: Store<PublicLanguageState>,
  ) {}

  ngOnInit(): void {
    this.publicLanguageState
      .select(publicLanguageReducer.getOne)
      .subscribe((language: any) => {
        if (language) this.translateSrv.use(language.acronym);
        if (language) this.language = language;
      });
  }

  public async messageHandler(
    entityName: string,
    messageHandlerType: MessageHandlerType,
    value: ToastMessage,
  ): Promise<boolean | null> {
    let message;
    let severity: ToastSeverity = ToastSeverity.SUCCESS;
    let header = await this.translateSrv
      .get('messages.headers.success')
      .toPromise();
    let name = await this.translateSrv
      .get('tables.' + entityName + '.singular')
      .toPromise();
    switch (value.type) {
      case ToastMessageType.CREATED:
        message = await this.translateSrv
          .get('messages.toastCreated', { name })
          .toPromise();
        break;
      case ToastMessageType.UPDATED:
        message = await this.translateSrv
          .get('messages.toastUpdated', { name })
          .toPromise();
        break;
      case ToastMessageType.DELETED:
        message = await this.translateSrv
          .get('messages.toastDeleted', { name })
          .toPromise();
        break;
      case ToastMessageType.ERROR:
        message = value.error.message;
        header = await this.translateSrv
          .get('messages.headers.error')
          .toPromise();
        severity = ToastSeverity.ERROR;
        break;
    }
    if (
      value.type !== ToastMessageType.LOAD_ALL &&
      value.type !== ToastMessageType.LOAD_ONE
    ) {
      this.toastSrv.add({
        severity: severity,
        summary: header,
        detail: message,
      });

      if (messageHandlerType === MessageHandlerType.HIDE_MODAL) {
        return false;
      }
      if (messageHandlerType === MessageHandlerType.KEEP_MODAL) {
        return null;
      }
    } else {
      return null;
    }
    return null;
  }
}
