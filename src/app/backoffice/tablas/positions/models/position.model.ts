import { Company } from '../../companies/models/company.model';

export interface Position {
  id?: number;
  name: string;
  description: string;
  company: Company;
  dateFrom: Date;
  dateTo: Date;
}
