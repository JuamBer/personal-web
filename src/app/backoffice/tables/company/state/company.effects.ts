import { Injectable } from '@angular/core';
import { CommonEffect } from '@app/shared/state/common/common.effects';
import { Actions } from '@ngrx/effects';
import { Company } from '../models/company.model';
import { CompanyService } from '../services/company.service';
import { companyActions } from './company.actions';

@Injectable()
export class CompanyEffect extends CommonEffect<Company> {
  constructor(protected override actions$: Actions, private companySrv: CompanyService) {
    super(actions$, companyActions, companySrv);
  }
}
