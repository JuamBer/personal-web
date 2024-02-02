import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { AuditFields } from 'src/app/shared/models/audit-fields.model';
import { Translation, TranslationFormGroup } from 'src/app/shared/models/translation.model';
import { CertificateGroup } from '../../certificate-group/models/certificate-group.model';
import { CertificateType } from '../../certificate-type/models/certificate-type.model';
import { Company } from '../../company/models/company.model';
import { Language } from '../../language/models/language.model';

export class Certificate extends AuditFields {
  nameTranslations: Translation[];
  descriptionTranslations: Translation[];
  url: string;
  image: string;
  github: string;
  pdf: string;
  date: Date;
  web: string;
  playStore: string;
  microsoftStore: string;
  company: Company;
  certificateGroup?: CertificateGroup;
  certificateType?: CertificateType;

  constructor(certificate: Certificate) {
    super(certificate.id, certificate.createdAt, certificate.updatedAt);
    this.nameTranslations = certificate.nameTranslations;
    this.descriptionTranslations = certificate.descriptionTranslations;
    this.url = certificate.url;
    this.image = certificate.image;
    this.github = certificate.github;
    this.pdf = certificate.pdf;
    this.date = new Date(certificate.date);
    this.web = certificate.web;
    this.playStore = certificate.playStore;
    this.microsoftStore = certificate.microsoftStore;
    this.company = certificate.company;
    this.certificateGroup = certificate.certificateGroup
      ? new CertificateGroup(certificate.certificateGroup)
      : undefined;
    this.certificateType = certificate.certificateType ? new CertificateType(certificate.certificateType) : undefined;
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

export type CertificateFormGroup = FormGroup<{
  id?: FormControl<string>;
  nameTranslations: FormArray<TranslationFormGroup>;
  descriptionTranslations: FormArray<TranslationFormGroup>;
  image: FormControl<string | undefined>;
  pdf: FormControl<string | undefined>;
  url: FormControl<string | undefined>;
  date: FormControl<Date>;
  github: FormControl<string | undefined>;
  web: FormControl<string | undefined>;
  microsoftStore: FormControl<string | undefined>;
  playStore: FormControl<string | undefined>;
  company: FormControl<Company | undefined>;
  certificateGroup: FormControl<CertificateGroup | undefined>;
  certificateType: FormControl<CertificateType | undefined>;
}>;
