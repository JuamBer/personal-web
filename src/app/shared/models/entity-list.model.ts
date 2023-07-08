import { LazyLoadEvent } from 'primeng/api';
import { BehaviorSubject, Observable } from 'rxjs';
import { GenericTableConfig } from 'src/app/shared/components/generic-table/models/generic-table.models';
import { CommonNames, Naming, NumberMode } from 'src/app/shared/state/common/common.names';

export interface EntityList<T> {
  entities$: Observable<T[]>;
  loading$: Observable<boolean>;
  count$: Observable<number>;
  tableConfig$: BehaviorSubject<GenericTableConfig<T>>;
  loadTableConfig: () => void;
  onLazyLoadEvent: (event: LazyLoadEvent) => void;
  onTableEvent: (event: any) => void;
  get NumberMode(): typeof NumberMode;
  get Naming(): typeof Naming;
  get names(): CommonNames;
}
