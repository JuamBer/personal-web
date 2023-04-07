import { Injectable } from '@angular/core';
import { CommonEffect } from '@app/shared/state/common/common.effects';
import { Actions } from '@ngrx/effects';
import { Mount } from '../models/mount.model';
import { MountService } from '../services/mount.service';
import { mountActions } from './mount.actions';

@Injectable()
export class MountEffect extends CommonEffect<Mount> {
  constructor(
    protected override actions$: Actions,
    private mountSrv: MountService,
  ) {
    super(actions$, mountActions, mountSrv);
  }
}
