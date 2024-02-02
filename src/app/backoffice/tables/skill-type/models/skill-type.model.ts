import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { AuditFields } from 'src/app/shared/models/audit-fields.model';
import { Translation, TranslationFormGroup } from 'src/app/shared/models/translation.model';
import { Language } from '../../language/models/language.model';
import { Skill } from '../../skill/models/skill.model';

export class SkillType extends AuditFields {
  nameTranslations: Translation[];
  descriptionTranslations: Translation[];
  skills?: Skill[];

  constructor(skillType: SkillType) {
    super(skillType.id, skillType.createdAt, skillType.updatedAt);
    this.nameTranslations = skillType.nameTranslations;
    this.descriptionTranslations = skillType.descriptionTranslations;
    this.skills = skillType.skills?.map((skill) => new Skill(skill));
  }

  override getDisplayName(language: Language): string {
    if (this.nameTranslations.length <= 0) {
      return this.id;
    }

    const translation = this.nameTranslations.find((t) => t.language === language.acronym);

    if (translation) {
      return translation.value;
    }

    return this.nameTranslations[0].value;
  }
}

export type SkillTypeFormGroup = FormGroup<{
  id?: FormControl<string | undefined | null>;
  nameTranslations: FormArray<TranslationFormGroup>;
  descriptionTranslations: FormArray<TranslationFormGroup>;
}>;
