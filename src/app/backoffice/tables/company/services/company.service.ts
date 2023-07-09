import { Injectable } from '@angular/core';
import { CommonService } from 'src/app/shared/services/common.service';

import { supabaseClient } from 'src/app/shared/services/auth.service';
import { Naming, NumberMode } from 'src/app/shared/state/common/common.names';
import { Company } from '../models/company.model';
import { companyNames } from '../state/company.names';
@Injectable({
  providedIn: 'root',
})
export class CompanyService extends CommonService<Company> {
  constructor() {
    super(
      supabaseClient,
      companyNames.name(Naming.SNAKE_CASE, NumberMode.PLURAL),
      '*',
      '*, "positions":"positions" ( * )',
      'name',
    );
  }
}
