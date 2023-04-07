import { Injectable } from '@angular/core';
import { PositionService } from '@app/backoffice/tablas/positions/services/position.service';
import { CommonEffect } from '@app/shared/state/common/common.effects';
import { Actions } from '@ngrx/effects';
import { Position } from '../models/position.model';
import { positionActions } from './position.actions';

@Injectable()
export class PositionEffect extends CommonEffect<Position> {
  constructor(
    protected override actions$: Actions,
    protected positionSrv: PositionService,
  ) {
    super(actions$, positionActions, positionSrv);
  }
}
