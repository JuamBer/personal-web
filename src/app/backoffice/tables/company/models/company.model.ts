import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { AuditFields } from 'src/app/shared/models/audit-fields.model';
import { Translation, TranslationFormGroup } from 'src/app/shared/models/translation.model';
import { CompanyType } from './company-type.model';

export interface Company extends AuditFields {
  location: string;
  name: string;
  descriptionTranslations: Translation[];
  type: CompanyType;
}

export type CompanyFormGroup = FormGroup<{
  id?: FormControl<string | null>;
  location: FormControl<string | undefined | null>;
  name: FormControl<string | undefined | null>;
  descriptionTranslations: FormArray<TranslationFormGroup>;
}>;
