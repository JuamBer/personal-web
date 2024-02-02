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
          map((page) => this.actions.loadAllSuccess({ actionId: props.actionId, payload: page })),
          catchError((err) => of(this.actions.loadAllFail({ actionId: props.actionId, error: err }))),
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
          map((page) => this.actions.loadMoreSuccess({ actionId: props.actionId, payload: page })),
          catchError((err) => of(this.actions.loadMoreFail({ actionId: props.actionId, error: err }))),
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
          map((item) => this.actions.loadOneSuccess({ actionId: props.actionId, payload: item })),
          catchError((err) => of(this.actions.loadOneFail({ actionId: props.actionId, error: err }))),
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
          map((created) => this.actions.createSuccess({ actionId: props.actionId, payload: created })),
          catchError((err) => of(this.actions.createFail({ actionId: props.actionId, error: err }))),
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
              actionId: props.actionId,
              payload: updated,
            }),
          ),
          catchError((err) => of(this.actions.updateFail({ actionId: props.actionId, error: err }))),
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
          map(() => this.actions.deleteSuccess({ actionId: props.actionId, id: props.id })),
          catchError((err) => of(this.actions.deleteFail({ actionId: props.actionId, error: err }))),
        ),
      ),
    );
  });

  count$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(this.actions.count),
      delay(0),
      concatMap((props) =>
        from(this.service.count()).pipe(
          map((count) => this.actions.countSuccess({ actionId: props.actionId, payload: count })),
          catchError((err) => of(this.actions.countFail({ actionId: props.actionId, error: err }))),
        ),
      ),
    );
  });
}
