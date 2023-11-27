import { createEffect, ofType } from '@ngrx/effects';
import { from, of } from 'rxjs';
import { catchError, concatMap, delay, exhaustMap, map, mergeMap } from 'rxjs/operators';

export abstract class CommonEffect<T> {
  constructor(protected actions$: any, protected actions: any, protected service: any) {}

  loadAll$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(this.actions.loadAll),
      delay(0),
      map((action: any) => action.payload),
      exhaustMap((requestFilter) =>
        from(this.service.getAll(requestFilter)).pipe(
          map((page: any) => this.actions.loadAllSuccess({ payload: page })),
          catchError((err) => of(this.actions.loadAllFail({ error: err }))),
        ),
      ),
    );
  });

  loadMore$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(this.actions.loadMore),
      delay(0),
      map((action: any) => action.payload),
      concatMap((requestFilter) =>
        from(this.service.getAll(requestFilter)).pipe(
          map((page: any) => this.actions.loadMoreSuccess({ payload: page })),
          catchError((err) => of(this.actions.loadMoreFail({ error: err }))),
        ),
      ),
    );
  });

  loadOne$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(this.actions.loadOne),
      delay(0),
      mergeMap((action: any) =>
        from(this.service.getOne(action.id)).pipe(
          map((item: any) => this.actions.loadOneSuccess({ payload: item })),
          catchError((err) => of(this.actions.loadOneFail({ error: err }))),
        ),
      ),
    );
  });

  createOne$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(this.actions.create),
      delay(0),
      mergeMap((action: any) =>
        from(this.service.create(action.payload)).pipe(
          map((created) => this.actions.createSuccess({ payload: created })),
          catchError((err) => of(this.actions.createFail({ error: err }))),
        ),
      ),
    );
  });

  updateOne$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(this.actions.update),
      delay(0),
      mergeMap((action: any) =>
        from(this.service.update(action.payload)).pipe(
          map((updated) =>
            this.actions.updateSuccess({
              payload: updated,
            }),
          ),
          catchError((err) => of(this.actions.updateFail({ error: err }))),
        ),
      ),
    );
  });

  deleteOne$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(this.actions.delete),
      delay(0),
      mergeMap((action: any) =>
        from(this.service.delete(action.id)).pipe(
          map(() => this.actions.deleteSuccess({ id: action.id })),
          catchError((err) => of(this.actions.deleteFail({ error: err }))),
        ),
      ),
    );
  });

  count$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(this.actions.count),
      delay(0),
      mergeMap(() =>
        from(this.service.count()).pipe(
          map((count: any) => this.actions.countSuccess({ payload: count })),
          catchError((err) => of(this.actions.countFail({ error: err }))),
        ),
      ),
    );
  });
}
