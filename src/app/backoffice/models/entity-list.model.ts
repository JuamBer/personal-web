import {
  GenericTableConfig,
  RequestSpecification,
} from '@app/shared/components/generic-table/models/generic-table.models';
import { RequestFilter } from '@app/shared/models/request-filter';
import { Observable } from 'rxjs';

export interface EntityList<T> {
  entities$: Observable<T[]>;
  loading$: Observable<boolean>;
  count$: Observable<number>;
  tableConfig$: Observable<GenericTableConfig<T>>;
  requestFilter$: Observable<RequestFilter>;

  loadTableConfig: () => void;

  onRequestSpecification: (event: RequestSpecification<T>) => void;
  onTableEvent: (event: any) => void;
}
