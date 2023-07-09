import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { AuditFields } from 'src/app/shared/models/audit-fields.model';
import { Translation, TranslationFormGroup } from 'src/app/shared/models/translation.model';
import { Skill } from '../../skill/models/skill.model';

export interface SkillType extends AuditFields {
  id: string;
  nameTranslations: Translation[];
  descriptionTranslations: Translation[];
  skills?: Skill[];
}

export type SkillTypeFormGroup = FormGroup<{
  id?: FormControl<string>;
  nameTranslations: FormArray<TranslationFormGroup>;
  descriptionTranslations: FormArray<TranslationFormGroup>;
}>;
