import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { AuditFields } from 'src/app/shared/models/audit-fields.model';
import { Translation, TranslationFormGroup } from 'src/app/shared/models/translation.model';
import { CompanyType } from './company-type.model';

export interface Company extends AuditFields {
  id: string;
  location: string;
  name: string;
  descriptionTranslations: Translation[];
  type: CompanyType;
}

export type CompanyFormGroup = FormGroup<{
  id?: FormControl<string>;
  location: FormControl<string | undefined>;
  name: FormControl<string | undefined>;
  descriptionTranslations: FormArray<TranslationFormGroup>;
}>;
