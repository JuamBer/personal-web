import { Injectable } from '@angular/core';
import { CommonService } from 'src/app/shared/services/common.service';

import { supabaseClient } from 'src/app/shared/services/auth.service';
import { Naming, NumberMode } from 'src/app/shared/state/common/common.names';
import { Position } from '../models/position.model';
import { positionNames } from '../state/position.names';

@Injectable({
  providedIn: 'root',
})
export class PositionService extends CommonService<Position> {
  constructor() {
    super(
      Position,
      supabaseClient,
      positionNames.name(Naming.SNAKE_CASE, NumberMode.PLURAL),
      '*, company: companies ( * )',
      '*, company: companies ( * )',
      'name_translations',
    );
  }
}
