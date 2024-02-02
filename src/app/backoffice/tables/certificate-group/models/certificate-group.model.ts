import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { AuditFields } from 'src/app/shared/models/audit-fields.model';
import { Translation, TranslationFormGroup } from 'src/app/shared/models/translation.model';
import { Certificate } from '../../certificate/models/certificate.model';
import { Language } from '../../language/models/language.model';

export class CertificateGroup extends AuditFields {
  nameTranslations: Translation[];
  descriptionTranslations: Translation[];
  certificates?: Certificate[];

  constructor(certificateGroup: CertificateGroup) {
    super(certificateGroup.id, certificateGroup.createdAt, certificateGroup.updatedAt);
    this.nameTranslations = certificateGroup.nameTranslations;
    this.descriptionTranslations = certificateGroup.descriptionTranslations;
    this.certificates = certificateGroup.certificates?.map((certificate) => new Certificate(certificate));
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

export type CertificateGroupFormGroup = FormGroup<{
  id?: FormControl<string | null>;
  nameTranslations: FormArray<TranslationFormGroup>;
  descriptionTranslations: FormArray<TranslationFormGroup>;
}>;
