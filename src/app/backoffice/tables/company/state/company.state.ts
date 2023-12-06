import { CommonState } from 'src/app/shared/state/common/common-state';
import { Company } from '../models/company.model';

export class CompanyState extends CommonState<Company> {
  constructor() {
    super();
  }
}
