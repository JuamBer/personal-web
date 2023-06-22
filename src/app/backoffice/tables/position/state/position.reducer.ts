import { defaultCommonState } from '@app/shared/state/common/common-state';
import { Naming, NumberMode } from '@app/shared/state/common/common.names';
import { CommonReducer } from '@app/shared/state/common/common.reducer';
import { ReducerTypes } from '@ngrx/store';
import { Position } from '../models/position.model';
import { positionActions } from './position.actions';
import { positionNames } from './position.names';
import { PositionState } from './position.state';

const initialState: PositionState = {
  ...(defaultCommonState as PositionState),
};
const otherReducers: ReducerTypes<any, any>[] = [];
class PositionReducer extends CommonReducer<Position, PositionState> {
  private static instance: PositionReducer;

  private constructor() {
    super(positionNames.name(Naming.KEBAB_CASE, NumberMode.PLURAL), positionActions, initialState, otherReducers);
  }

  public static getInstance(): PositionReducer {
    if (!PositionReducer.instance) {
      PositionReducer.instance = new PositionReducer();
    }
    return PositionReducer.instance;
  }
}
export const positionReducer: PositionReducer = PositionReducer.getInstance();
