import { Company } from '@app/backoffice/tablas/companies/models/company.model';
import { CommonAction } from '@app/shared/state/common/common.actions';
import { companyNames } from './company.names';

export class CompanyActions extends CommonAction<Company> {
  private static instance: CompanyActions;

  private constructor() {
    super(companyNames.upperCamelCase.singular);
  }

  public static getInstance(): CompanyActions {
    if (!CompanyActions.instance) {
      CompanyActions.instance = new CompanyActions();
    }
    return CompanyActions.instance;
  }
}
export const companyActions: CompanyActions = CompanyActions.getInstance();
