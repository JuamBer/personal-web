/* eslint-disable no-fallthrough */
import { Injectable, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Message } from 'primeng/api';
import { Action, ActionStatus, ActionType } from '../state/common/common-state';

@Injectable({ providedIn: 'root' })
export class ToastService {
  private translateSrv = inject(TranslateService);

  getMessage(action: Action | undefined, entity: string): Message | undefined {
    if (!action) {
      return undefined;
    }

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
            return {
              severity: 'error',
              summary: this.translateSrv.instant('messages.headers.error'),
            };
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
            return {
              severity: 'error',
              summary: this.translateSrv.instant('messages.headers.error'),
            };
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
            return { severity: 'error', summary: this.translateSrv.instant('messages.headers.error') };
          }
        }
      }
      case ActionType.CREATE_ONE: {
        switch (action.status) {
          case ActionStatus.PENDING: {
            return undefined;
          }
          case ActionStatus.SUCCESS: {
            return {
              severity: 'success',
              summary: this.translateSrv.instant('messages.headers.success'),
              detail: this.translateSrv.instant('messages.create.success', {
                name: this.translateSrv.instant(`tables.${entity}.singular`),
              }),
            };
          }
          case ActionStatus.ERROR: {
            return {
              severity: 'error',
              summary: this.translateSrv.instant('messages.headers.error'),
              detail: this.translateSrv.instant('messages.create.error', {
                name: this.translateSrv.instant(`tables.${entity}.singular`),
              }),
            };
          }
        }
      }
      case ActionType.UPDATE_ONE: {
        switch (action.status) {
          case ActionStatus.PENDING: {
            return undefined;
          }
          case ActionStatus.SUCCESS: {
            return {
              severity: 'success',
              summary: this.translateSrv.instant('messages.headers.success'),
              detail: this.translateSrv.instant('messages.update.success', {
                name: this.translateSrv.instant(`tables.${entity}.singular`),
              }),
            };
          }
          case ActionStatus.ERROR: {
            return {
              severity: 'error',
              summary: this.translateSrv.instant('messages.headers.error'),
              detail: this.translateSrv.instant('messages.update.error', {
                name: this.translateSrv.instant(`tables.${entity}.singular`),
              }),
            };
          }
        }
      }
      case ActionType.DELETE_ONE: {
        switch (action.status) {
          case ActionStatus.PENDING: {
            return undefined;
          }
          case ActionStatus.SUCCESS: {
            return {
              severity: 'success',
              summary: this.translateSrv.instant('messages.headers.success'),
              detail: this.translateSrv.instant('messages.delete.success', {
                name: this.translateSrv.instant(`tables.${entity}.singular`),
              }),
            };
          }
          case ActionStatus.ERROR: {
            return {
              severity: 'error',
              summary: this.translateSrv.instant('messages.headers.error'),
              detail: this.translateSrv.instant('messages.delete.error', {
                name: this.translateSrv.instant(`tables.${entity}.singular`),
              }),
            };
          }
        }
      }
    }

    return undefined;
  }
}
