export enum ModalMode {
  CREATE = 'create',
  UPDATE = 'update',
  VIEW = 'view',
}

export interface ModalParams {
  id: string;
  modalMode: string;
}
