import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { AuditFields } from 'src/app/shared/models/audit-fields.model';
import { Translation, TranslationFormGroup } from 'src/app/shared/models/translation.model';
import { Company } from '../../company/models/company.model';

export class Position extends AuditFields {
  nameTranslations: Translation[];
  descriptionTranslations: Translation[];
  dateFrom: Date;
  dateTo: Date | undefined;
  hourlyWage: number;
  importance: number;
  company?: Company;

  constructor(position: Position) {
    super(position.id, position.createdAt, position.updatedAt);
    this.nameTranslations = position.nameTranslations;
    this.descriptionTranslations = position.descriptionTranslations;
    this.dateFrom = new Date(position.dateFrom);
    this.dateTo = position.dateTo ? new Date(position.dateTo) : undefined;
    this.hourlyWage = position.hourlyWage;
    this.importance = position.importance;
    this.company = position.company ? new Company(position.company) : undefined;
  }

  override getDisplayName(acronym: string): string {
    if (this.nameTranslations.length <= 0) {
      return this.id;
    }

    const translation = this.nameTranslations.find((t) => t.language === acronym);

    if (translation) {
      return translation.value;
    }

    return this.nameTranslations[0].value;
  }
}

export type PositionFormGroup = FormGroup<{
  id?: FormControl<string>;
  nameTranslations: FormArray<TranslationFormGroup>;
  descriptionTranslations: FormArray<TranslationFormGroup>;
  importance: FormControl<number>;
  company: FormControl<Company | undefined>;
  dateFrom: FormControl<Date | undefined>;
  dateTo: FormControl<Date | undefined>;
}>;
