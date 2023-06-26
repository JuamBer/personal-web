import { createAction, props } from '@ngrx/store';
import { Naming, NumberMode } from '../common/common.names';
import { accountNames } from './account.names';

export class AccountActions {
  static entityName = accountNames.name(Naming.KEBAB_CASE, NumberMode.PLURAL);

  //LOAD ONE
  static loadUsuario = createAction('[' + AccountActions.entityName + '] Load Usuario');

  static loadUsuarioSuccess = createAction(
    '[' + AccountActions.entityName + '] Load Usuario Success',
    props<{ payload: any }>(),
  );

  static loadUsuarioFail = createAction(
    '[' + AccountActions.entityName + '] Load Usuario Fail',
    props<{ error: any }>(),
  );
}
