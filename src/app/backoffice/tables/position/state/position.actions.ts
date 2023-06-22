import { CommonAction } from '@app/shared/state/common/common.actions';
import { Naming, NumberMode } from '@app/shared/state/common/common.names';
import { Position } from '../models/position.model';
import { positionNames } from './position.names';

class PositionActions extends CommonAction<Position> {
  private static instance: PositionActions;

  private constructor() {
    super(positionNames.name(Naming.KEBAB_CASE, NumberMode.PLURAL));
  }

  public static getInstance(): PositionActions {
    if (!PositionActions.instance) {
      PositionActions.instance = new PositionActions();
    }
    return PositionActions.instance;
  }
}

export const positionActions: PositionActions = PositionActions.getInstance();
