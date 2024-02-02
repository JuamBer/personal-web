/* eslint-disable no-fallthrough */
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Message } from 'primeng/api';
import { Resource } from '../models/resource.model';
import { Action, ActionStatus, ActionType } from '../state/common/common-state';

@Injectable({ providedIn: 'root' })
export class ToastService {
  getMessage<T extends Resource>(
    translateSrv: TranslateService,
    action: Action<T> | undefined,
    collectionNameKey: string,
  ): Message | undefined {
    if (!action) {
      return undefined;
    }

    let i18nKey = '';
    let collectionName = '';
    switch (action.type) {
      case ActionType.COUNT:
        i18nKey = 'update';
        collectionName = translateSrv.instant(`tables.${collectionNameKey}.plural`);
        break;
      case ActionType.CREATE_ONE:
        i18nKey = 'create';
        collectionName = translateSrv.instant(`tables.${collectionNameKey}.singular`);
        break;
      case ActionType.UPDATE_ONE:
        i18nKey = 'update';
        collectionName = translateSrv.instant(`tables.${collectionNameKey}.singular`);
        break;
      case ActionType.DELETE_ONE:
        i18nKey = 'delete';
        collectionName = translateSrv.instant(`tables.${collectionNameKey}.singular`);
        break;
      case ActionType.LOAD_ONE:
        i18nKey = 'load';
        collectionName = translateSrv.instant(`tables.${collectionNameKey}.singular`);
        break;
      case ActionType.LOAD_MANY:
        i18nKey = 'loadMany';
        collectionName = translateSrv.instant(`tables.${collectionNameKey}.plural`);
        break;
      default:
        return undefined;
    }

    let severity = '';
    switch (action.status) {
      case ActionStatus.PENDING: {
        severity = 'info';
        break;
      }
      case ActionStatus.SUCCESS: {
        severity = 'success';
        break;
      }
      case ActionStatus.ERROR: {
        severity = 'error';
        break;
      }
    }

    if (!action.feedback.has(action.status)) {
      return undefined;
    }

    return {
      severity,
      summary: translateSrv.instant(`messages.${i18nKey}.${action.status.toLocaleLowerCase()}.summary`, {
        entityName: action?.entity?.getDisplayName(translateSrv.currentLang) || '',
        collectionName,
      }),
      detail: translateSrv.instant(`messages.${i18nKey}.${action.status.toLocaleLowerCase()}.detail`, {
        entityName: action?.entity?.getDisplayName(translateSrv.currentLang) || '',
        collectionName,
      }),
      life: 5000,
    };
  }
}
