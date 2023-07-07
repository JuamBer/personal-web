import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { AuditFields } from 'src/app/shared/models/audit-fields.model';
import { Translation, TranslationFormGroup } from 'src/app/shared/models/translation.model';

export interface SkillType extends AuditFields {
  id: string;
  name: string;
  description: string;
  nameTranslations: Translation[];
  descriptionTranslations: Translation[];
}

export type SkillTypeFormGroup = FormGroup<{
  id?: FormControl<string>;
  name: FormControl<string | undefined>;
  description: FormControl<string | undefined>;
  nameTranslations: FormArray<TranslationFormGroup>;
  descriptionTranslations: FormArray<TranslationFormGroup>;
}>;
