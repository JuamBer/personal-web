import { createAction, props } from '@ngrx/store';
import { PostgrestError } from '@supabase/supabase-js';
import { LazyLoadEvent } from 'primeng/api';
import { TableLazyLoadEvent } from 'primeng/table';
import { Resource } from '../../models/resource.model';

export abstract class CommonAction<T extends Resource> {
  constructor(public entityName: string) {}

  //LOAD ALL
  loadAll = createAction(
    '[' + this.entityName + '] Load All',
    props<{
      payload?: null | TableLazyLoadEvent;
    }>(),
  );

  loadAllSuccess = createAction('[' + this.entityName + '] Load All Success', props<{ payload: Resource[] }>());

  loadAllFail = createAction('[' + this.entityName + '] Load All Fail', props<{ error: PostgrestError }>());

  //LOAD MORE
  loadMore = createAction('[' + this.entityName + '] Load More', props<{ payload?: null | LazyLoadEvent }>());

  loadMoreSuccess = createAction('[' + this.entityName + '] Load More Success', props<{ payload: Resource[] }>());

  loadMoreFail = createAction('[' + this.entityName + '] Load More Fail', props<{ error: PostgrestError }>());

  //LOAD ONE
  loadOne = createAction('[' + this.entityName + '] Load One', props<{ id: string }>());

  loadOneSuccess = createAction('[' + this.entityName + '] Load One Success', props<{ payload: T }>());

  loadOneFail = createAction('[' + this.entityName + '] Load One Fail', props<{ error: PostgrestError }>());

  //CREATE
  create = createAction('[' + this.entityName + '] Create', props<{ payload: T }>());

  createSuccess = createAction('[' + this.entityName + '] Create Success', props<{ payload: T }>());

  createFail = createAction('[' + this.entityName + '] Create Fail', props<{ error: PostgrestError }>());

  //UPDATE
  update = createAction('[' + this.entityName + '] Update', props<{ payload: T }>());

  updateSuccess = createAction('[' + this.entityName + '] Update Success', props<{ payload: T }>());

  updateFail = createAction('[' + this.entityName + '] Update Fail', props<{ error: PostgrestError }>());

  //DELETE
  delete = createAction('[' + this.entityName + '] Delete', props<{ id: string }>());

  deleteSuccess = createAction('[' + this.entityName + '] Delete Success', props<{ id: string }>());

  deleteFail = createAction('[' + this.entityName + '] Delete Fail', props<{ error: PostgrestError }>());

  //COUNT
  count = createAction('[' + this.entityName + '] Count');

  countSuccess = createAction('[' + this.entityName + '] Count Success', props<{ payload: number }>());

  countFail = createAction('[' + this.entityName + '] Count Fail', props<{ error: PostgrestError }>());

  //CUSTOM
  unload = createAction('[' + this.entityName + '] Unload');

  unloadAll = createAction('[' + this.entityName + '] Unload All');
}
