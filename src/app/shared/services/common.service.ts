/* eslint-disable @typescript-eslint/no-explicit-any */
import type { PostgrestFilterBuilder } from '@supabase/postgrest-js';
import { PostgrestError, SupabaseClient } from '@supabase/supabase-js';
import { TableLazyLoadEvent } from 'primeng/table';
import { Filter, FilterType } from '../components/generic-table/models/generic-table.models';
import { Resource } from '../models/resource.model';
import { camelCaseToSnakeCase, flatObjectsById, snakeCaseToCamelCase, toSnakeCase } from '../utils/supabase-utils';

export class CommonService<T extends Resource> {
  constructor(
    public factory: new (data: any) => T,
    public supabase: SupabaseClient,
    public table: string,
    public getAllSelection = '*',
    public getOneSelection = '*',
    public titleSelection = 'name',
  ) {}

  async getAll(lazyLoadEvent: TableLazyLoadEvent | null | undefined): Promise<T[]> {
    const request = this.supabase.from(this.table).select(this.getAllSelection);

    if (lazyLoadEvent && ('sortField' in lazyLoadEvent || 'rows' in lazyLoadEvent)) {
      CommonService.applyFiltersAndSorting(request, lazyLoadEvent);
    }

    const { data, error } = await request;
    CommonService.handlePostgrestError(error);

    return snakeCaseToCamelCase(data).map((item: T) => new this.factory(item));
  }

  async getTitle(id: string): Promise<T> {
    const { data, error } = await this.supabase.from(this.table).select(this.titleSelection).match({ id }).single();
    CommonService.handlePostgrestError(error);
    return new this.factory(snakeCaseToCamelCase(data));
  }

  async getOne(id: string): Promise<T> {
    const { data, error } = await this.supabase.from(this.table).select(this.getOneSelection).match({ id }).single();
    CommonService.handlePostgrestError(error);
    return new this.factory(snakeCaseToCamelCase(data));
  }

  async create(payload: T): Promise<T> {
    const { data, error } = await this.supabase
      .from(this.table)
      .insert([flatObjectsById(camelCaseToSnakeCase(payload))])
      .select();
    CommonService.handlePostgrestError(error);
    return new this.factory(snakeCaseToCamelCase(data && data.length > 0 ? data[0] : null));
  }

  async update(payload: T): Promise<T> {
    const { data, error } = await this.supabase
      .from(this.table)
      .update(flatObjectsById(camelCaseToSnakeCase(payload)))
      .match({ id: payload.id })
      .select();
    CommonService.handlePostgrestError(error);
    return new this.factory(snakeCaseToCamelCase(data && data.length > 0 ? data[0] : null));
  }

  async upsert(payload: T): Promise<T> {
    const { data, error } = await this.supabase
      .from(this.table)
      .upsert(flatObjectsById(camelCaseToSnakeCase(payload)))
      .select();
    CommonService.handlePostgrestError(error);
    return new this.factory(snakeCaseToCamelCase(data && data.length > 0 ? data[0] : null));
  }

  async delete(id: string): Promise<null> {
    const { data, error } = await this.supabase.from(this.table).delete().match({ id });
    CommonService.handlePostgrestError(error);
    return data;
  }

  async count(): Promise<number> {
    const { count, error } = await this.supabase.from(this.table).select('*', { count: 'exact', head: true });
    CommonService.handlePostgrestError(error);
    return count ? count : 0;
  }

  static applyFiltersAndSorting(
    request: PostgrestFilterBuilder<
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      any,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      any,
      {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        [x: string]: any;
      }[]
    >,
    lazyLoadEvent: TableLazyLoadEvent,
  ) {
    if (
      lazyLoadEvent.sortField &&
      lazyLoadEvent.sortOrder &&
      lazyLoadEvent.sortField &&
      typeof lazyLoadEvent.sortField === 'string'
    ) {
      request = request.order(toSnakeCase(lazyLoadEvent.sortField), {
        ascending: lazyLoadEvent.sortOrder === 1,
      });
    }
    if (lazyLoadEvent.filters && !Array.isArray(lazyLoadEvent.filters)) {
      Object.entries(lazyLoadEvent.filters).forEach(([key, filterMetadata]) => {
        if (filterMetadata && !Array.isArray(filterMetadata)) {
          const field = toSnakeCase(key);
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
        }
      });
    }

    if (
      lazyLoadEvent &&
      lazyLoadEvent.first &&
      Number.isInteger(lazyLoadEvent.first) &&
      lazyLoadEvent.rows &&
      Number.isInteger(lazyLoadEvent.rows)
    ) {
      request = request.range(lazyLoadEvent.first, lazyLoadEvent.first + lazyLoadEvent.rows - 1);
    }
  }

  static handlePostgrestError(error: PostgrestError | null) {
    if (error) {
      throw new Error(error.message ? error.message : error.code);
    }
  }
}
