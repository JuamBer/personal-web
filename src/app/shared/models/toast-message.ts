import { ApiError } from '../components/error-page/models/api-error';

export enum ToastSeverity {
  SUCCESS = 'success',
  ERROR = 'error',
  WARNING = 'warn',
  INFO = 'info',
}

export enum ToastMessageType {
  COUNT = 'COUNT',
  LOAD_ALL = 'LOAD_ALL',
  LOAD_ONE = 'LOAD_ONE',
  CREATED = 'CREATED',
  UPDATED = 'UPDATED',
  DELETED = 'DELETED',
  ERROR = 'ERROR',
}

export interface ToastMessage {
  type: ToastMessageType;
  error: ApiError;
}
