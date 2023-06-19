import { GenericTableConfig } from '@app/shared/components/generic-table/models/generic-table.models';
import { CommonNamess, Naming, NumberMode } from '@app/shared/state/common/common.names';
import { LazyLoadEvent } from 'primeng/api';
import { Observable } from 'rxjs';

export interface EntityList<T> {
  entities$: Observable<T[]>;
  loading$: Observable<boolean>;
  count$: Observable<number>;
  tableConfig$: Observable<GenericTableConfig<T>>;
  loadTableConfig: () => void;
  onLazyLoadEvent: (event: LazyLoadEvent) => void;
  onTableEvent: (event: any) => void;
  get NumberMode(): typeof NumberMode;
  get Naming(): typeof Naming;
  get names(): CommonNamess;
}
