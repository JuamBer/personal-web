import { createAction, props } from '@ngrx/store';
import { Naming, NumberMode } from '../common/common.names';
import { accountNames } from './account.names';

export class AccountActions {
  static entityName = accountNames.name(Naming.KEBAB_CASE, NumberMode.PLURAL);

  static loadUser = createAction('[' + AccountActions.entityName + '] Load User');

  static loadUserSuccess = createAction(
    '[' + AccountActions.entityName + '] Load User Success',
    props<{ payload: any }>(),
  );

  static loadUserFail = createAction('[' + AccountActions.entityName + '] Load User Fail', props<{ error: any }>());
}
