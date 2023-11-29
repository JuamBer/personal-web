import type { PostgrestFilterBuilder } from '@supabase/postgrest-js';
import { PostgrestError, SupabaseClient } from '@supabase/supabase-js';
import { LazyLoadEvent } from 'primeng/api';
import { TableLazyLoadEvent } from 'primeng/table';
import { Filter, FilterType } from '../components/generic-table/models/generic-table.models';
import { camelCaseToSnakeCase, flatObjectsById, snakeCaseToCamelCase } from '../utils/supabase-utils';

export class CommonService<T> {
  constructor(
    public supabase: SupabaseClient,
    public table: string,
    public getAllSelection = '*',
    public getOneSelection = '*',
    public titleSelection = 'name',
  ) {}

  async getAll(lazyLoadEvent: TableLazyLoadEvent): Promise<T[] | PostgrestError> {
    let request = this.supabase.from(this.table).select(this.getAllSelection);
    //TODO: LazyLoadEvent => TableLazyLoadEvent
    // if (lazyLoadEvent && ('sortField' in lazyLoadEvent || 'rows' in lazyLoadEvent)) {
    //   CommonService.applyFiltersAndSorting(request, lazyLoadEvent);
    // }
    const { data, error } = await request;
    CommonService.handlePostgrestError(error);
    return snakeCaseToCamelCase(data);
  }

  async getTitle(id: string): Promise<T> {
    const { data, error } = await this.supabase.from(this.table).select(this.titleSelection).match({ id }).single();
    CommonService.handlePostgrestError(error);
    return snakeCaseToCamelCase(data);
  }

  async getOne(id: string): Promise<T> {
    const { data, error } = await this.supabase.from(this.table).select(this.getOneSelection).match({ id }).single();
    CommonService.handlePostgrestError(error);
    return snakeCaseToCamelCase(data);
  }

  async create(payload: T): Promise<T | PostgrestError> {
    const { data, error } = await this.supabase
      .from(this.table)
      .insert([flatObjectsById(camelCaseToSnakeCase(payload))])
      .select();
    CommonService.handlePostgrestError(error);
    return snakeCaseToCamelCase(data[0]);
  }

  async update(payload: T): Promise<T | PostgrestError> {
    const { data, error } = await this.supabase
      .from(this.table)
      .update(flatObjectsById(camelCaseToSnakeCase(payload)))
      .match({ id: (payload as any).id })
      .select();
    CommonService.handlePostgrestError(error);
    return snakeCaseToCamelCase(data[0]);
  }

  async upsert(payload: T): Promise<any | PostgrestError> {
    const { data, error } = await this.supabase
      .from(this.table)
      .upsert(flatObjectsById(camelCaseToSnakeCase(payload)))
      .select();
    CommonService.handlePostgrestError(error);
    return data;
  }

  async delete(id: string): Promise<null | PostgrestError> {
    const { data, error } = await this.supabase.from(this.table).delete().match({ id });
    CommonService.handlePostgrestError(error);
    return data;
  }

  async count(): Promise<number | PostgrestError> {
    const { count, error } = await this.supabase.from(this.table).select('*', { count: 'exact', head: true });
    CommonService.handlePostgrestError(error);
    return count;
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

  static handlePostgrestError(error: PostgrestError) {
    if (error) {
      throw new Error(error.message ? error.message : error.code);
    }
  }
}
