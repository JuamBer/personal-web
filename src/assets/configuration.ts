import { GenericTableConfig } from 'src/app/shared/components/generic-table/models/generic-table.models';

interface Configuration {
  defaultGenericTableConfig: GenericTableConfig<any>;
}

export const configuration: Configuration = {
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
    title: '',
  },
};
