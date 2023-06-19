import { GenericTableConfig } from '@app/shared/components/generic-table/models/generic-table.models';
import { RequestFilter } from '@app/shared/models/request-filter';

interface Configuration {
  defaultRequestFilter: RequestFilter;
  defaultGenericTableConfig: GenericTableConfig<any>;
}

export const configuration: Configuration = {
  defaultRequestFilter: {
    size: 5,
    page: 0,
    sort: [],
    filter: [],
  },
  defaultGenericTableConfig: {
    dataKey: 'id',
    rowsPerPageOptions: [5, 10, 25, 50, 100],
    showCurrentPageReport: true,
    paginator: true,
    size: 'normal',
    fields: [],
    buttons: {
      top: [],
      start: [],
      end: [],
    },
  },
};
