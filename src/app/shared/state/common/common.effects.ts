import { createEffect, ofType } from '@ngrx/effects';
import { from, of } from 'rxjs';
import { catchError, exhaustMap, map, mergeMap } from 'rxjs/operators';

export abstract class CommonEffect<T> {
  constructor(
    protected actions$: any,
    protected actions: any,
    protected service: any,
  ) {}

  loadAll$ = createEffect(() =>
    this.actions$.pipe(
      ofType(this.actions.loadAll),
      map((action: any) => action.payload),
      exhaustMap((requestFilter) => {
        return from(this.service.getAll(requestFilter)).pipe(
          map((page: any) => this.actions.loadAllSuccess({ payload: page })),
          catchError((err) => of(this.actions.loadAllFail({ error: err }))),
        );
      }),
    ),
  );

  loadOne$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(this.actions.loadOne),
      mergeMap((action: any) =>
        from(this.service.getOne(action.id)).pipe(
          map((item: any) => this.actions.loadOneSuccess({ payload: item })),
          catchError((err) => of(this.actions.loadOneFail({ error: err }))),
        ),
      ),
    );
  });

  createOne$ = createEffect(() =>
    this.actions$.pipe(
      ofType(this.actions.create),
      mergeMap((action: any) =>
        from(this.service.create(action.payload)).pipe(
          map(() => this.actions.createSuccess({ payload: action.payload })),
          catchError((err) => of(this.actions.createFail({ error: err }))),
        ),
      ),
    ),
  );

  updateOne$ = createEffect(() =>
    this.actions$.pipe(
      ofType(this.actions.update),
      mergeMap((action: any) =>
        from(this.service.update(action.payload)).pipe(
          map(() => {
            return this.actions.updateSuccess({
              payload: action.payload,
            });
          }),
          catchError((err) => of(this.actions.updateFail({ error: err }))),
        ),
      ),
    ),
  );

  deleteOne$ = createEffect(() =>
    this.actions$.pipe(
      ofType(this.actions.delete),
      mergeMap((action: any) =>
        from(this.service.delete(action.id)).pipe(
          map(() => this.actions.deleteSuccess({ id: action.id })),
          catchError((err) => of(this.actions.deleteFail({ error: err }))),
        ),
      ),
    ),
  );

  count$ = createEffect(() =>
    this.actions$.pipe(
      ofType(this.actions.count),
      mergeMap(() =>
        from(this.service.count()).pipe(
          map((count: any) => this.actions.countSuccess({ payload: count })),
          catchError((err) => of(this.actions.countFail({ error: err }))),
        ),
      ),
    ),
  );
}
