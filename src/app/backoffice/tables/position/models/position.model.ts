import { FormControl, FormGroup } from '@angular/forms';
import { AuditFields } from '../../certificate-group/models/certificate-group.model';
import { Company } from '../../company/models/company.model';

export interface Position extends AuditFields {
  id: string;
  name: string;
  description: string;
  company: Company;
  dateFrom: Date;
  dateTo: Date;
}

export type PositionFormGroup = FormGroup<{
  id?: FormControl<string>;
  name: FormControl<string | undefined>;
  description: FormControl<string | undefined>;
  company: FormControl<Company | undefined>;
  dateFrom: FormControl<Date | undefined>;
  dateTo: FormControl<Date | undefined>;
}>;
