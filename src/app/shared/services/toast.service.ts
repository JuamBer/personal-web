import { Injectable, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Message } from 'primeng/api';
import { Action, ActionStatus, ActionType } from '../state/common/common-state';

@Injectable({ providedIn: 'root' })
export class ToastService {
  private translateSrv = inject(TranslateService);

  getMessage(action: Action): Message | undefined {
    switch (action.type) {
      case ActionType.COUNT: {
        switch (action.status) {
          case ActionStatus.PENDING: {
            return undefined;
          }
          case ActionStatus.SUCCESS: {
            return undefined;
          }
          case ActionStatus.ERROR: {
            return { severity: 'error', summary: this.translateSrv.instant('error') };
          }
        }
      }
      case ActionType.LOAD_ONE: {
        switch (action.status) {
          case ActionStatus.PENDING: {
            return undefined;
          }
          case ActionStatus.SUCCESS: {
            return undefined;
          }
          case ActionStatus.ERROR: {
            return { severity: 'error', summary: this.translateSrv.instant('error') };
          }
        }
      }
      case ActionType.LOAD_MANY: {
        switch (action.status) {
          case ActionStatus.PENDING: {
            return undefined;
          }
          case ActionStatus.SUCCESS: {
            return undefined;
          }
          case ActionStatus.ERROR: {
            return { severity: 'error', summary: this.translateSrv.instant('error') };
          }
        }
      }
      case ActionType.CREATE_ONE: {
        switch (action.status) {
          case ActionStatus.PENDING: {
            return undefined;
          }
          case ActionStatus.SUCCESS: {
            return { severity: 'success', summary: this.translateSrv.instant('success') };
          }
          case ActionStatus.ERROR: {
            return { severity: 'error', summary: this.translateSrv.instant('error') };
          }
        }
      }
      case ActionType.UPDATE_ONE: {
        switch (action.status) {
          case ActionStatus.PENDING: {
            return undefined;
          }
          case ActionStatus.SUCCESS: {
            return { severity: 'success', summary: this.translateSrv.instant('success') };
          }
          case ActionStatus.ERROR: {
            return { severity: 'error', summary: this.translateSrv.instant('error') };
          }
        }
      }
      case ActionType.DELETE_ONE: {
        switch (action.status) {
          case ActionStatus.PENDING: {
            return undefined;
          }
          case ActionStatus.SUCCESS: {
            return { severity: 'success', summary: this.translateSrv.instant('success') };
          }
          case ActionStatus.ERROR: {
            return { severity: 'error', summary: this.translateSrv.instant('error') };
          }
        }
      }
    }

    return undefined;
  }
}
