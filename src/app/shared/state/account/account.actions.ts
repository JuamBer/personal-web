import { createAction, props } from '@ngrx/store';
import { accountNames } from './account.names';

export class AccountActions {
  static entityName = accountNames.upperCamelCase.singular;

  //LOAD ONE
  static loadUsuario = createAction(
    '[' + AccountActions.entityName + '] Load Usuario',
  );

  static loadUsuarioSuccess = createAction(
    '[' + AccountActions.entityName + '] Load Usuario Success',
    props<{ payload: any }>(),
  );

  static loadUsuarioFail = createAction(
    '[' + AccountActions.entityName + '] Load Usuario Fail',
    props<{ error: any }>(),
  );
}
