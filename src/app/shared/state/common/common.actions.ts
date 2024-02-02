import { createAction, props } from '@ngrx/store';
import { PostgrestError } from '@supabase/supabase-js';
import { LazyLoadEvent } from 'primeng/api';
import { TableLazyLoadEvent } from 'primeng/table';
import { Resource } from '../../models/resource.model';
import { GlobalUtils } from '../../utils/global.utils';

export function addActionId<T>(props: T) {
  return {
    actionId: GlobalUtils.generateId(),
    ...props,
  };
}

export abstract class CommonAction<T extends Resource> {
  constructor(public entityName: string) {}

  //LOAD ALL
  loadAll = createAction(
    '[' + this.entityName + '] Load All',
    props<{
      actionId: string;
      payload?: TableLazyLoadEvent;
    }>(),
  );

  loadAllSuccess = createAction(
    '[' + this.entityName + '] Load All Success',
    props<{
      actionId: string;
      payload: Resource[];
    }>(),
  );

  loadAllFail = createAction(
    '[' + this.entityName + '] Load All Fail',
    props<{
      actionId: string;
      error: PostgrestError;
    }>(),
  );

  //LOAD MORE
  loadMore = createAction(
    '[' + this.entityName + '] Load More',
    props<{
      actionId: string;
      payload?: LazyLoadEvent;
    }>(),
  );

  loadMoreSuccess = createAction(
    '[' + this.entityName + '] Load More Success',
    props<{
      actionId: string;
      payload: Resource[];
    }>(),
  );

  loadMoreFail = createAction(
    '[' + this.entityName + '] Load More Fail',
    props<{
      actionId: string;
      error: PostgrestError;
    }>(),
  );

  //LOAD ONE
  loadOne = createAction(
    '[' + this.entityName + '] Load One',
    props<{
      actionId: string;
      id: string;
    }>(),
  );

  loadOneSuccess = createAction(
    '[' + this.entityName + '] Load One Success',
    props<{
      actionId: string;
      payload: T;
    }>(),
  );

  loadOneFail = createAction(
    '[' + this.entityName + '] Load One Fail',
    props<{
      actionId: string;
      error: PostgrestError;
    }>(),
  );

  //CREATE
  create = createAction(
    '[' + this.entityName + '] Create',
    props<{
      actionId: string;
      payload: T;
    }>(),
  );

  createSuccess = createAction(
    '[' + this.entityName + '] Create Success',
    props<{
      actionId: string;
      payload: T;
    }>(),
  );

  createFail = createAction(
    '[' + this.entityName + '] Create Fail',
    props<{
      actionId: string;
      error: PostgrestError;
    }>(),
  );

  //UPDATE
  update = createAction(
    '[' + this.entityName + '] Update',
    props<{
      actionId: string;
      payload: T;
    }>(),
  );

  updateSuccess = createAction(
    '[' + this.entityName + '] Update Success',
    props<{
      actionId: string;
      payload: T;
    }>(),
  );

  updateFail = createAction(
    '[' + this.entityName + '] Update Fail',
    props<{
      actionId: string;
      error: PostgrestError;
    }>(),
  );

  //DELETE
  delete = createAction(
    '[' + this.entityName + '] Delete',
    props<{
      actionId: string;
      id: string;
    }>(),
  );

  deleteSuccess = createAction(
    '[' + this.entityName + '] Delete Success',
    props<{
      actionId: string;
      id: string;
    }>(),
  );

  deleteFail = createAction(
    '[' + this.entityName + '] Delete Fail',
    props<{
      actionId: string;
      error: PostgrestError;
    }>(),
  );

  //COUNT
  count = createAction(
    '[' + this.entityName + '] Count',
    props<{
      actionId: string;
    }>(),
  );

  countSuccess = createAction(
    '[' + this.entityName + '] Count Success',
    props<{
      actionId: string;
      payload: number;
    }>(),
  );

  countFail = createAction(
    '[' + this.entityName + '] Count Fail',
    props<{
      actionId: string;
      error: PostgrestError;
    }>(),
  );

  //CUSTOM
  unload = createAction('[' + this.entityName + '] Unload');

  unloadAll = createAction('[' + this.entityName + '] Unload All');
}
