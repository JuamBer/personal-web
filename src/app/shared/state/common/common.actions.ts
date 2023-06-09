import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';
import { LazyLoadEvent } from 'primeng/api';

export abstract class CommonAction<T> {
  constructor(public entityName: string) {}

  //LOAD ALL
  loadAll = createAction('[' + this.entityName + '] Load All', props<{ payload?: null | LazyLoadEvent }>());

  loadAllSuccess = createAction('[' + this.entityName + '] Load All Success', props<{ payload: any }>());

  loadAllFail = createAction('[' + this.entityName + '] Load All Fail', props<{ error: any }>());

  //LOAD ONE
  loadOne = createAction('[' + this.entityName + '] Load One', props<{ id: number | string }>());

  loadOneSuccess = createAction('[' + this.entityName + '] Load One Success', props<{ payload: any }>());

  loadOneFail = createAction('[' + this.entityName + '] Load One Fail', props<{ error: any }>());

  //CREATE
  create = createAction('[' + this.entityName + '] Create', props<{ payload: any }>());

  createSuccess = createAction('[' + this.entityName + '] Create Success', props<{ payload: any }>());

  createFail = createAction('[' + this.entityName + '] Create Fail', props<{ error: any }>());

  //UPDATE
  update = createAction('[' + this.entityName + '] Update', props<{ payload: any }>());

  updateSuccess = createAction('[' + this.entityName + '] Update Success', props<{ payload: Update<T> }>());

  updateFail = createAction('[' + this.entityName + '] Update Fail', props<{ error: any }>());

  //DELETE
  delete = createAction('[' + this.entityName + '] Delete', props<{ id: number | string }>());

  deleteSuccess = createAction('[' + this.entityName + '] Delete Success', props<{ id: number | string }>());

  deleteFail = createAction('[' + this.entityName + '] Delete Fail', props<{ error: any }>());

  //COUNT
  count = createAction('[' + this.entityName + '] Count');

  countSuccess = createAction('[' + this.entityName + '] Count Success', props<{ payload: number }>());

  countFail = createAction('[' + this.entityName + '] Count Fail', props<{ error: any }>());

  //CUSTOM
  unload = createAction('[' + this.entityName + '] Unload');
}
