import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { AuditFields } from 'src/app/shared/models/audit-fields.model';
import { Translation, TranslationFormGroup } from 'src/app/shared/models/translation.model';
import { CertificateGroup } from '../../certificate-group/models/certificate-group.model';
import { CertificateType } from '../../certificate-type/models/certificate-type.model';
import { Company } from '../../company/models/company.model';

export interface Certificate extends AuditFields {
  nameTranslations: Translation[];
  descriptionTranslations: Translation[];
  url: string;
  image: string;
  github: string;
  pdf: string;
  date: Date;
  web: string;
  playStore: string;
  microsoftStore: string;
  company: Company;
  certificateGroup: CertificateGroup;
  certificateType: CertificateType;
}
export type CertificateFormGroup = FormGroup<{
  id?: FormControl<string | null>;
  nameTranslations: FormArray<TranslationFormGroup>;
  descriptionTranslations: FormArray<TranslationFormGroup>;
  image: FormControl<string | undefined | null>;
  pdf: FormControl<string | undefined | null>;
  url: FormControl<string | undefined | null>;
  date: FormControl<Date | null>;
  github: FormControl<string | undefined | null>;
  web: FormControl<string | undefined | null>;
  microsoftStore: FormControl<string | undefined | null>;
  playStore: FormControl<string | undefined | null>;
  company: FormControl<Company | undefined | null>;
  certificateGroup: FormControl<CertificateGroup | undefined | null>;
  certificateType: FormControl<CertificateType | undefined | null>;
}>;
