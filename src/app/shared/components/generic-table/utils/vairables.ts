import { GenericTableConfig } from '../models/generic-table.models';

export const defaultGenericTableConfig: GenericTableConfig<any> = {
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
};
