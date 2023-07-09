import type { PostgrestFilterBuilder } from '@supabase/postgrest-js';
import { SupabaseClient } from '@supabase/supabase-js';
import { LazyLoadEvent } from 'primeng/api';
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

  async getAll(lazyLoadEvent: LazyLoadEvent) {
    let request = this.supabase.from(this.table).select(this.getAllSelection);
    if (lazyLoadEvent && 'sortField' in lazyLoadEvent) {
      CommonService.applyFiltersAndSorting(request, lazyLoadEvent);
    }
    const { data, error } = await request;
    return error ? error : snakeCaseToCamelCase(data);
  }

  async getTitle(id: string): Promise<T> {
    const { data, error } = await this.supabase.from(this.table).select(this.titleSelection).match({ id }).single();
    return error ? error : snakeCaseToCamelCase(data);
  }

  async getOne(id: string): Promise<T> {
    const { data, error } = await this.supabase.from(this.table).select(this.getOneSelection).match({ id }).single();

    return error ? error : snakeCaseToCamelCase(data);
  }

  async create(payload: T) {
    const { data, error } = await this.supabase
      .from(this.table)
      .insert([flatObjectsById(camelCaseToSnakeCase(payload))])
      .select();
    return error ? error : snakeCaseToCamelCase(data[0]);
  }

  async update(payload: T) {
    const { data, error } = await this.supabase
      .from(this.table)
      .update(flatObjectsById(camelCaseToSnakeCase(payload)))
      .match({ id: (payload as any).id })
      .select();

    return error ? error : snakeCaseToCamelCase(data[0]);
  }

  async upsert(payload: T): Promise<any> {
    const { data, error } = await this.supabase
      .from(this.table)
      .upsert(flatObjectsById(camelCaseToSnakeCase(payload)))
      .select();

    return error ? error : data;
  }

  async delete(id: string) {
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
