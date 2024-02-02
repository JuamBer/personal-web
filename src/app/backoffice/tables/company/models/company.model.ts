/* eslint-disable @typescript-eslint/no-unused-vars */
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { AuditFields } from 'src/app/shared/models/audit-fields.model';
import { Translation, TranslationFormGroup } from 'src/app/shared/models/translation.model';
import { Language } from '../../language/models/language.model';
import { Position } from '../../position/models/position.model';
import { CompanyType } from './company-type.model';

export class Company extends AuditFields {
  location: string;
  name: string;
  descriptionTranslations: Translation[];
  type: CompanyType;
  url: string;
  positions?: Position[];

  constructor(company: Company) {
    super(company.id, company.createdAt, company.updatedAt);
    this.location = company.location;
    this.name = company.name;
    this.descriptionTranslations = company.descriptionTranslations;
    this.type = company.type;
    this.url = company.url;
    this.positions = company.positions?.map((position) => new Position(position));
  }

  override getDisplayName(language: Language): string {
    return this.name;
  }
}

export type CompanyFormGroup = FormGroup<{
  id?: FormControl<string>;
  location: FormControl<string | undefined>;
  name: FormControl<string | undefined>;
  descriptionTranslations: FormArray<TranslationFormGroup>;
  type: FormControl<CompanyType>;
  url: FormControl<string | undefined>;
}>;
