import { RequestFilter } from '@app/shared/models/request-filter';
import { SupabaseClient } from '@supabase/supabase-js';
import {
  camelCaseToSnakeCase,
  flatObjectsById,
  snakeCaseToCamelCase,
} from '../utils/SupabaseUtils';

export class CommonService<T> {
  constructor(public supabase: SupabaseClient, public table: string) {}

  async getAll(requestFilter: RequestFilter) {
    let { data, error } = await this.supabase.from(this.table).select('*');
    return error ? error : snakeCaseToCamelCase(data);
  }

  async getOne(id: number): Promise<T> {
    let { data, error } = await this.supabase
      .from(this.table)
      .select('*')
      .match({ id })
      .single();

    return error ? error : snakeCaseToCamelCase(data);
  }

  async create(payload: T) {
    let { data, error } = await this.supabase
      .from(this.table)
      .insert([flatObjectsById(camelCaseToSnakeCase(payload))]);

    return error ? error : data;
  }

  async update(payload: T) {
    let { data, error } = await this.supabase
      .from(this.table)
      .update(flatObjectsById(camelCaseToSnakeCase(payload)))
      .match({ id: (payload as any).id });

    return error ? error : data;
  }

  async delete(id: number) {
    let { data, error } = await this.supabase
      .from(this.table)
      .delete()
      .match({ id });

    return error ? error : data;
  }

  async count() {
    let { data, error } = await this.supabase
      .from(this.table)
      .select('*', { count: 'exact' });
    return error ? error : data;
  }
}
