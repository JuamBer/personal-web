import { Injectable } from '@angular/core';
import { CommonService } from '@app/shared/services/common.service';
import { environment } from '@env/environment';
import { createClient } from '@supabase/supabase-js';
import { Company } from '../models/company.model';
import { companyNames } from '../state/company.names';
@Injectable({
  providedIn: 'root',
})
export class CompanyService extends CommonService<Company> {
  constructor() {
    super(
      createClient(environment.apiUrl, environment.apiKey),
      companyNames.snakeCase.plural.normal,
    );
  }
}
