import { defaultCommonState } from '@app/shared/state/common/common-state';
import { Naming, NumberMode } from '@app/shared/state/common/common.names';
import { CommonReducer } from '@app/shared/state/common/common.reducer';
import { ReducerTypes } from '@ngrx/store';
import { Company } from '../models/company.model';
import { companyActions } from './company.actions';
import { companyNames } from './company.names';
import { CompanyState } from './company.state';

const initialState: CompanyState = {
  ...(defaultCommonState as CompanyState),
};

const otherReducers: ReducerTypes<any, any>[] = [];

class CompanyReducer extends CommonReducer<Company, CompanyState> {
  private static instance: CompanyReducer;

  private constructor() {
    super(companyNames.name(Naming.KEBAB_CASE, NumberMode.PLURAL), companyActions, initialState, otherReducers);
  }

  public static getInstance(): CompanyReducer {
    if (!CompanyReducer.instance) {
      CompanyReducer.instance = new CompanyReducer();
    }
    return CompanyReducer.instance;
  }
}
export const companyReducer: CompanyReducer = CompanyReducer.getInstance();
