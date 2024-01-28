import { FormControl, FormGroup } from '@angular/forms';
import { AuditFields } from 'src/app/shared/models/audit-fields.model';

export class Language extends AuditFields {
  nativeName: string;
  name: string;
  acronym: string;
  active: boolean;

  constructor(language: Language) {
    super(language.id, language.createdAt, language.updatedAt);
    this.nativeName = language.nativeName;
    this.name = language.name;
    this.acronym = language.acronym;
    this.active = language.active;
  }
}

export type LanguageFormGroup = FormGroup<{
  id?: FormControl<string>;
  nativeName: FormControl<string | undefined>;
  name: FormControl<string | undefined>;
  acronym: FormControl<string | undefined>;
  active: FormControl<boolean>;
}>;
