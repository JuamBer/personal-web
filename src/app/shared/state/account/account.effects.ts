import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { AuthService } from 'src/app/shared/services/auth.service';
import { AccountActions } from './account.actions';

@Injectable()
export class AccountEffect {
  constructor(private actions$: Actions, private accountSrv: AuthService) {}

  loadUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AccountActions.loadUser),
      mergeMap(() =>
        of(this.accountSrv.session).pipe(
          map((session) => AccountActions.loadUserSuccess({ payload: session.user })),
          catchError((err) => of(AccountActions.loadUserFail({ error: err }))),
        ),
      ),
    ),
  );
}
