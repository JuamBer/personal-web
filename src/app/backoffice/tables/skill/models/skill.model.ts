import { FormControl, FormGroup } from '@angular/forms';
import { AuditFields } from 'src/app/shared/models/audit-fields.model';
import { SkillType } from '../../skill-type/models/skill-type.model';

export interface Skill extends AuditFields {
  id: string;
  name: string;
  percentage: number;
  skillType: SkillType;
}

export type SkillFormGroup = FormGroup<{
  id?: FormControl<string>;
  name: FormControl<string | undefined>;
  percentage: FormControl<number>;
  skillType: FormControl<SkillType | undefined>;
}>;
