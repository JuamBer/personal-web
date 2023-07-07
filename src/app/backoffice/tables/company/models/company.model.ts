import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { AuditFields } from 'src/app/shared/models/audit-fields.model';
import { Translation, TranslationFormGroup } from 'src/app/shared/models/translation.model';

export interface Company extends AuditFields {
  id: string;
  name: string;
  description: string;
  location: string;
  descriptionTranslations: Translation[];
}

export type CompanyFormGroup = FormGroup<{
  id?: FormControl<string>;
  name: FormControl<string | undefined>;
  description: FormControl<string | undefined>;
  location: FormControl<string | undefined>;
  descriptionTranslations: FormArray<TranslationFormGroup>;
}>;
