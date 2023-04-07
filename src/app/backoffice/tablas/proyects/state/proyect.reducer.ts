import { CommonReducer } from '@app/shared/state/common/common.reducer';
import { ReducerTypes } from '@ngrx/store';
import { Proyect } from '../models/proyect.model';
import { proyectActions } from './proyect.actions';
import { proyectNames } from './proyect.names';
import { ProyectState } from './proyect.state';

const initialState: ProyectState = {
  entities: [],
  selectedId: null,
  count: 0,
  loading: false,
  message: null,
};

const otherReducers: ReducerTypes<any, any>[] = [];

class ProyectReducer extends CommonReducer<Proyect, ProyectState> {
  private static instance: ProyectReducer;

  private constructor() {
    super(
      proyectNames.kebabCase.plural.normal,
      proyectActions,
      initialState,
      otherReducers,
    );
  }

  public static getInstance(): ProyectReducer {
    if (!ProyectReducer.instance) {
      ProyectReducer.instance = new ProyectReducer();
    }
    return ProyectReducer.instance;
  }
}
export const proyectReducer: ProyectReducer = ProyectReducer.getInstance();
