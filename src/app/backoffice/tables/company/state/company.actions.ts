import { CommonAction } from '@app/shared/state/common/common.actions';
import { Naming, NumberMode } from '@app/shared/state/common/common.names';
import { Company } from '../models/company.model';
import { companyNames } from './company.names';

export class CompanyActions extends CommonAction<Company> {
  private static instance: CompanyActions;

  private constructor() {
    super(companyNames.name(Naming.KEBAB_CASE, NumberMode.PLURAL));
  }

  public static getInstance(): CompanyActions {
    if (!CompanyActions.instance) {
      CompanyActions.instance = new CompanyActions();
    }
    return CompanyActions.instance;
  }
}
export const companyActions: CompanyActions = CompanyActions.getInstance();
