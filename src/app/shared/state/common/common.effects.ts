import { Actions, createEffect, ofType } from '@ngrx/effects';
import { from, of } from 'rxjs';
import { catchError, concatMap, delay, map } from 'rxjs/operators';
import { Resource } from '../../models/resource.model';
import { CommonService } from '../../services/common.service';
import { CommonAction } from './common.actions';

export abstract class CommonEffect<T extends Resource> {
  constructor(protected actions$: Actions, protected actions: CommonAction<T>, protected service: CommonService<T>) {}

  loadAll$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(this.actions.loadAll),
      delay(0),
      concatMap((props) =>
        from(this.service.getAll(props.payload)).pipe(
          map((page) => this.actions.loadAllSuccess({ payload: page })),
          catchError((err) => of(this.actions.loadAllFail({ error: err }))),
        ),
      ),
    );
  });

  loadMore$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(this.actions.loadMore),
      delay(0),
      concatMap((props) =>
        from(this.service.getAll(props.payload)).pipe(
          map((page) => this.actions.loadMoreSuccess({ payload: page })),
          catchError((err) => of(this.actions.loadMoreFail({ error: err }))),
        ),
      ),
    );
  });

  loadOne$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(this.actions.loadOne),
      delay(0),
      concatMap((props) =>
        from(this.service.getOne(props.id)).pipe(
          map((item) => this.actions.loadOneSuccess({ payload: item })),
          catchError((err) => of(this.actions.loadOneFail({ error: err }))),
        ),
      ),
    );
  });

  createOne$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(this.actions.create),
      delay(0),
      concatMap((props) =>
        from(this.service.create(props.payload)).pipe(
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
      concatMap((props) =>
        from(this.service.update(props.payload)).pipe(
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
      concatMap((props) =>
        from(this.service.delete(props.id)).pipe(
          map(() => this.actions.deleteSuccess({ id: props.id })),
          catchError((err) => of(this.actions.deleteFail({ error: err }))),
        ),
      ),
    );
  });

  count$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(this.actions.count),
      delay(0),
      concatMap(() =>
        from(this.service.count()).pipe(
          map((count) => this.actions.countSuccess({ payload: count })),
          catchError((err) => of(this.actions.countFail({ error: err }))),
        ),
      ),
    );
  });
}
