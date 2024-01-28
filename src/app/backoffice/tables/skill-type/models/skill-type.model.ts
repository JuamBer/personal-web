import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { AuditFields } from 'src/app/shared/models/audit-fields.model';
import { Translation, TranslationFormGroup } from 'src/app/shared/models/translation.model';
import { Skill } from '../../skill/models/skill.model';

export class SkillType extends AuditFields {
  nameTranslations: Translation[];
  descriptionTranslations: Translation[];
  skills?: Skill[];

  constructor(skillType: SkillType) {
    super(skillType.id, skillType.createdAt, skillType.updatedAt);
    this.nameTranslations = skillType.nameTranslations;
    this.descriptionTranslations = skillType.descriptionTranslations;
    this.skills = skillType.skills;
  }
}

export type SkillTypeFormGroup = FormGroup<{
  id?: FormControl<string | undefined | null>;
  nameTranslations: FormArray<TranslationFormGroup>;
  descriptionTranslations: FormArray<TranslationFormGroup>;
}>;
