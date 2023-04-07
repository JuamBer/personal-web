import { Injectable } from '@angular/core';
import { RequestFilter } from '@app/shared/models/request-filter';
import { CommonService } from '@app/shared/services/common.service';
import { snakeCaseToCamelCase } from '@app/shared/utils/SupabaseUtils';
import { environment } from '@env/environment';
import { createClient } from '@supabase/supabase-js';
import { Position } from '../models/position.model';
import { positionNames } from '../state/position.names';
@Injectable({
  providedIn: 'root',
})
export class PositionService extends CommonService<Position> {
  constructor() {
    super(
      createClient(environment.apiUrl, environment.apiKey),
      positionNames.snakeCase.plural.normal,
    );
  }

  override async getAll(requestFilter: RequestFilter) {
    let { data, error } = await this.supabase
      .from(this.table)
      .select('*, company: companies ( * )');
    return error ? error : snakeCaseToCamelCase(data);
  }

  override async getOne(id: number): Promise<Position> {
    let { data, error } = await this.supabase
      .from(this.table)
      .select('*, company: companies ( * )')
      .match({ id })
      .single();

    return error ? error : snakeCaseToCamelCase(data);
  }
}
