import { RequestFilter } from '@app/shared/models/request-filter';
import type { PostgrestFilterBuilder } from '@supabase/postgrest-js';
import { SupabaseClient } from '@supabase/supabase-js';
import { LazyLoadEvent } from 'primeng/api';
import { Filter, FilterType } from '../components/generic-table/models/generic-table.models';
import { camelCaseToSnakeCase, flatObjectsById, snakeCaseToCamelCase } from '../utils/SupabaseUtils';

export class CommonService<T> {
  constructor(
    public supabase: SupabaseClient,
    public table: string,
    public getAllSelection = '*',
    public getOneSelection = '*',
    public titleSelection = 'name',
  ) {}

  async getAll(lazyLoadEvent: RequestFilter | LazyLoadEvent) {
    let request = this.supabase.from(this.table).select(this.getAllSelection);
    if ('sortField' in lazyLoadEvent) {
      CommonService.applyFiltersAndSorting(request, lazyLoadEvent);
    }
    const { data, error } = await request;
    return error ? error : snakeCaseToCamelCase(data);
  }

  async getTitle(id: number): Promise<T> {
    const { data, error } = await this.supabase.from(this.table).select(this.titleSelection).match({ id }).single();
    return error ? error : snakeCaseToCamelCase(data);
  }

  async getOne(id: number): Promise<T> {
    const { data, error } = await this.supabase.from(this.table).select(this.getOneSelection).match({ id }).single();

    return error ? error : snakeCaseToCamelCase(data);
  }

  async create(payload: T) {
    const { data, error } = await this.supabase
      .from(this.table)
      .insert([flatObjectsById(camelCaseToSnakeCase(payload))]);

    return error ? error : data;
  }

  async update(payload: T) {
    const { data, error } = await this.supabase
      .from(this.table)
      .update(flatObjectsById(camelCaseToSnakeCase(payload)))
      .match({ id: (payload as any).id });

    return error ? error : data;
  }

  async delete(id: number) {
    const { data, error } = await this.supabase.from(this.table).delete().match({ id });

    return error ? error : data;
  }

  async count() {
    const { count, error } = await this.supabase.from(this.table).select('*', { count: 'exact', head: true });
    return error ? error : count;
  }

  static applyFiltersAndSorting(
    request: PostgrestFilterBuilder<
      any,
      any,
      {
        [x: string]: any;
      }[]
    >,
    lazyLoadEvent: LazyLoadEvent,
  ) {
    if (lazyLoadEvent.sortField && lazyLoadEvent.sortOrder) {
      request = request.order(lazyLoadEvent.sortField, {
        ascending: lazyLoadEvent.sortOrder === 1,
      });
    }
    if (lazyLoadEvent.filters) {
      Object.entries(lazyLoadEvent.filters).forEach(([key, filterMetadata]) => {
        const field = key;
        const value = (filterMetadata.value as Filter).value;
        if (value) {
          switch ((filterMetadata.value as Filter).filterType) {
            case FilterType.START_WITH:
              request = request.ilike(field, `${value}%`);
              break;
            case FilterType.ENDS_WITH:
              request = request.ilike(field, `%${value}`);
              break;
            case FilterType.EQUAL:
              request = request.eq(field, value);
              break;
            case FilterType.NOT_EQUAL:
              request = request.not(field, 'eq', value);
              break;
            case FilterType.CONTAINS:
              request = request.ilike(field, `%${value}%`);
              break;
            case FilterType.NOT_CONTAINS:
              request = request.not(field, 'like', `%${value}%`);
              break;
            default:
              request = request.ilike(field, `%${value}%`);
              break;
          }
        }
      });
    }

    if (Number.isInteger(lazyLoadEvent.first) && Number.isInteger(lazyLoadEvent.rows)) {
      request = request.range(lazyLoadEvent.first, lazyLoadEvent.first + lazyLoadEvent.rows - 1);
    }
  }
}
