import { CommonReducer } from '@app/shared/state/common/common.reducer';
import { ReducerTypes } from '@ngrx/store';
import { Position } from '../models/position.model';
import { positionActions } from './position.actions';
import { positionNames } from './position.names';
import { PositionState } from './position.state';

const initialState: PositionState = {
  entities: [],
  selectedId: null,
  count: 0,
  loading: false,
  message: null,
};
const otherReducers: ReducerTypes<any, any>[] = [];
class PositionReducer extends CommonReducer<Position, PositionState> {
  private static instance: PositionReducer;

  private constructor() {
    super(
      positionNames.kebabCase.plural.normal,
      positionActions,
      initialState,
      otherReducers,
    );
  }

  public static getInstance(): PositionReducer {
    if (!PositionReducer.instance) {
      PositionReducer.instance = new PositionReducer();
    }
    return PositionReducer.instance;
  }
}
export const positionReducer: PositionReducer = PositionReducer.getInstance();
