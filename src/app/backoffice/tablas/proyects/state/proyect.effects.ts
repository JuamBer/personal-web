import { Injectable } from '@angular/core';
import { CommonEffect } from '@app/shared/state/common/common.effects';
import { Actions } from '@ngrx/effects';
import { Proyect } from '../models/proyect.model';
import { ProyectService } from '../services/proyect.service';
import { proyectActions } from './proyect.actions';

@Injectable()
export class ProyectEffect extends CommonEffect<Proyect> {
  constructor(
    protected override actions$: Actions,
    private proyectSrv: ProyectService,
  ) {
    super(actions$, proyectActions, proyectSrv);
  }
}
