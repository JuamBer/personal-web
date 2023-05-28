import { defaultCommonState } from '@app/shared/state/common/common-state';
import { CommonReducer } from '@app/shared/state/common/common.reducer';
import { ReducerTypes } from '@ngrx/store';
import { Mount } from '../models/mount.model';
import { mountActions } from './mount.actions';
import { mountNames } from './mount.names';
import { MountState } from './mount.state';

const initialState: MountState = {
  ...(defaultCommonState as MountState),
};

const otherReducers: ReducerTypes<any, any>[] = [];

class MountReducer extends CommonReducer<Mount, MountState> {
  private static instance: MountReducer;

  private constructor() {
    super(mountNames.kebabCase.plural.normal, mountActions, initialState, otherReducers);
  }

  public static getInstance(): MountReducer {
    if (!MountReducer.instance) {
      MountReducer.instance = new MountReducer();
    }
    return MountReducer.instance;
  }
}
export const mountReducer: MountReducer = MountReducer.getInstance();
