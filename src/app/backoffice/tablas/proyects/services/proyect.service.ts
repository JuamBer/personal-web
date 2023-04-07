import { Injectable } from '@angular/core';
import { RequestFilter } from '@app/shared/models/request-filter';
import { environment } from '@env/environment';
import {
  AuthSession,
  createClient,
  SupabaseClient,
} from '@supabase/supabase-js';
import { Proyect } from '../models/proyect.model';
import { proyectNames } from '../state/proyect.names';
@Injectable({
  providedIn: 'root',
})
export class ProyectService {
  private supabase: SupabaseClient;
  _session: AuthSession | null = null;
  private table: string = proyectNames.snakeCase.plural.normal;
  constructor() {
    this.supabase = createClient(environment.apiUrl, environment.apiKey);
  }

  async getAll(requestFilter: RequestFilter) {
    let { data, error } = await this.supabase.from(this.table).select('*');
    return error ? error : data;
  }

  async getOne(id: number): Promise<any> {
    let { data, error } = await this.supabase
      .from(this.table)
      .select('*')
      .match({ id })
      .single();

    return error ? error : data;
  }

  async create(payload: Proyect) {
    let { data, error } = await this.supabase
      .from(this.table)
      .insert([payload]);

    return error ? error : data;
  }

  async update(payload: Proyect) {
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
