import { GenericTableConfig } from 'src/app/shared/components/generic-table/models/generic-table.models';

interface Configuration {
  defaultGenericTableConfig: GenericTableConfig<unknown>;
  defaultLanguage: string;
  languages: string[];
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
  defaultLanguage: 'es',
  languages: ['de', 'en', 'es', 'fr', 'it', 'nl', 'no', 'pt'],
};
