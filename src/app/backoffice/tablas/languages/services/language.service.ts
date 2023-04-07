import { Injectable } from '@angular/core';
import { RequestFilter } from '@app/shared/models/request-filter';
import {
  camelCaseToSnakeCase,
  snakeCaseToCamelCase,
} from '@app/shared/utils/SupabaseUtils';
import { environment } from '@env/environment';
import {
  AuthSession,
  createClient,
  SupabaseClient,
} from '@supabase/supabase-js';
import { Language } from '../models/language.model';
import { languageNames } from '../state/language.names';
@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private supabase: SupabaseClient;
  _session: AuthSession | null = null;
  private table: string = languageNames.snakeCase.plural.normal;
  constructor() {
    this.supabase = createClient(environment.apiUrl, environment.apiKey);
  }

  async getAll(requestFilter: RequestFilter) {
    let { data, error } = await this.supabase.from(this.table).select('*');
    return error ? error : snakeCaseToCamelCase(data);
  }

  async getOne(id: number): Promise<any> {
    let { data, error } = await this.supabase
      .from(this.table)
      .select('*')
      .eq('id', id)
      .single();

    return error ? error : snakeCaseToCamelCase(data);
  }

  async create(payload: Language) {
    let { data, error } = await this.supabase
      .from(this.table)
      .insert([camelCaseToSnakeCase(payload)]);

    return error ? error : data;
  }

  async update(payload: Language) {
    let { data, error } = await this.supabase
      .from(this.table)
      .update(payload)
      .eq('id', payload.id);

    return error ? error : data;
  }

  async delete(payload: number) {
    let { data, error } = await this.supabase
      .from(this.table)
      .delete()
      .eq('id', payload);

    return error ? error : data;
  }

  async count() {
    let { data, error } = await this.supabase
      .from(this.table)
      .select('*', { count: 'exact' });
    return error ? error : data;
  }
}
