import { CommonAction } from '@app/shared/state/common/common.actions';
import { Proyect } from '../models/proyect.model';
import { proyectNames } from './proyect.names';

export class ProyectActions extends CommonAction<Proyect> {
  private static instance: ProyectActions;

  private constructor() {
    super(proyectNames.upperCamelCase.singular);
  }

  public static getInstance(): ProyectActions {
    if (!ProyectActions.instance) {
      ProyectActions.instance = new ProyectActions();
    }
    return ProyectActions.instance;
  }
}
export const proyectActions: ProyectActions = ProyectActions.getInstance();
