import { Injectable } from '@angular/core';
import { supabaseClient } from '@app/shared/services/auth.service';
import { CommonService } from '@app/shared/services/common.service';
import { Naming, NumberMode } from '@app/shared/state/common/common.names';
import { Company } from '../models/company.model';
import { companyNames } from '../state/company.names';
@Injectable({
  providedIn: 'root',
})
export class CompanyService extends CommonService<Company> {
  constructor() {
    super(supabaseClient, companyNames.name(Naming.SNAKE_CASE, NumberMode.PLURAL));
  }
}
