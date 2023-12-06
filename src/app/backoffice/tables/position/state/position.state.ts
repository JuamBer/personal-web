import { CommonState } from 'src/app/shared/state/common/common-state';
import { Position } from '../models/position.model';

export class PositionState extends CommonState<Position> {
  constructor() {
    super();
  }
}
