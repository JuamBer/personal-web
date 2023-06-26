import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { PositionService } from 'src/app/backoffice/tables/position/services/position.service';
import { CommonEffect } from 'src/app/shared/state/common/common.effects';
import { Position } from '../models/position.model';
import { positionActions } from './position.actions';

@Injectable()
export class PositionEffect extends CommonEffect<Position> {
  constructor(protected override actions$: Actions, protected positionSrv: PositionService) {
    super(actions$, positionActions, positionSrv);
  }
}
