/* eslint-disable @typescript-eslint/no-unused-vars */
import { FormControl, FormGroup } from '@angular/forms';
import { AuditFields } from 'src/app/shared/models/audit-fields.model';
import { Language } from '../../language/models/language.model';
import { SkillType } from '../../skill-type/models/skill-type.model';

export class Skill extends AuditFields {
  name: string;
  percentage: number;
  skillType?: SkillType;

  constructor(skill: Skill) {
    super(skill.id, skill.createdAt, skill.updatedAt);
    this.name = skill.name;
    this.percentage = skill.percentage;
    this.skillType = skill.skillType ? new SkillType(skill.skillType) : undefined;
  }

  override getDisplayName(language: Language): string {
    return this.name;
  }
}

export type SkillFormGroup = FormGroup<{
  id?: FormControl<string | null>;
  name: FormControl<string | undefined | null>;
  percentage: FormControl<number | null>;
  skillType: FormControl<SkillType | undefined | null>;
}>;
