import { FormControl, FormGroup } from '@angular/forms';
import { AuditFields } from 'src/app/shared/models/audit-fields.model';
import { SkillType } from '../../skill-type/models/skill-type.model';

export interface Skill extends AuditFields {
  name: string;
  percentage: number;
  skillType: SkillType;
}

export type SkillFormGroup = FormGroup<{
  id?: FormControl<string | null>;
  name: FormControl<string | undefined | null>;
  percentage: FormControl<number | null>;
  skillType: FormControl<SkillType | undefined | null>;
}>;
