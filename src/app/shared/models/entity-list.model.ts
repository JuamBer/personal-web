import { TableLazyLoadEvent } from 'primeng/table';
import { BehaviorSubject, Observable } from 'rxjs';
import { GenericTableConfig, TableEvent } from 'src/app/shared/components/generic-table/models/generic-table.models';
import { CommonNames, Naming, NumberMode } from 'src/app/shared/state/common/common.names';
import { Resource } from './resource.model';

export interface EntityList<T extends Resource> {
  entities$: Observable<T[]>;
  loading$: Observable<boolean>;
  count$: Observable<number>;
  tableConfig$: BehaviorSubject<GenericTableConfig<T> | undefined>;
  loadTableConfig: () => void;
  onLazyLoadEvent: (event: TableLazyLoadEvent) => void;
  onTableEvent: (event: TableEvent<T>) => void;
  get NumberMode(): typeof NumberMode;
  get Naming(): typeof Naming;
  get names(): CommonNames;
}
