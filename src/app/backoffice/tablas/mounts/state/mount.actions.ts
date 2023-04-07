import { CommonAction } from '@app/shared/state/common/common.actions';
import { Mount } from '../models/mount.model';
import { mountNames } from './mount.names';

export class MountActions extends CommonAction<Mount> {
  private static instance: MountActions;

  private constructor() {
    super(mountNames.upperCamelCase.singular);
  }

  public static getInstance(): MountActions {
    if (!MountActions.instance) {
      MountActions.instance = new MountActions();
    }
    return MountActions.instance;
  }
}
export const mountActions: MountActions = MountActions.getInstance();
