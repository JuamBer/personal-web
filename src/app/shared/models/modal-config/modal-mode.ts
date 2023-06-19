export enum ModalMode {
  CREATE = 'CREATE',
  UPDATE = 'UPDATE',
  VIEW = 'VIEW',
}

export interface ModalParams {
  id?: string;
  modalMode: string;
}
