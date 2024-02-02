import { Signal } from '@angular/core';
import { TableLazyLoadEvent } from 'primeng/table';
import { Observable } from 'rxjs';
import { GenericTableConfig, TableEvent } from 'src/app/shared/components/generic-table/models/generic-table.models';
import { CommonNames, Naming, NumberMode } from 'src/app/shared/state/common/common.names';
import { Action } from '../state/common/common-state';
import { Resource } from './resource.model';

export interface EntityList<T extends Resource> {
  entities$: Observable<T[]>;
  entities: Signal<T[]>;

  loading$: Observable<boolean>;
  loading: Signal<boolean>;

  count$: Observable<number>;
  count: Signal<number>;

  tableConfig: Signal<GenericTableConfig<T> | undefined>;

  action$: Observable<Action<T> | undefined>;

  handleLoadCount: () => void;
  handleMessages: () => void;
  handleLoadTableConfig: () => void;

  loadTableConfig: () => void;
  onLazyLoadEvent: (event: TableLazyLoadEvent) => void;
  onTableEvent: (event: TableEvent<T>) => void;

  get NumberMode(): typeof NumberMode;
  get Naming(): typeof Naming;
  get names(): CommonNames;
}
