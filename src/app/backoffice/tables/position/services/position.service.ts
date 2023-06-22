import { Injectable } from '@angular/core';
import { supabaseClient } from '@app/shared/services/auth.service';
import { CommonService } from '@app/shared/services/common.service';
import { Naming, NumberMode } from '@app/shared/state/common/common.names';
import { Position } from '../models/position.model';
import { positionNames } from '../state/position.names';

@Injectable({
  providedIn: 'root',
})
export class PositionService extends CommonService<Position> {
  constructor() {
    super(
      supabaseClient,
      positionNames.name(Naming.SNAKE_CASE, NumberMode.PLURAL),
      '*, company: companies ( * )',
      '*, company: companies ( * )',
    );
  }
}
