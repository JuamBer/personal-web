import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { AuditFields } from 'src/app/shared/models/audit-fields.model';
import { Translation, TranslationFormGroup } from 'src/app/shared/models/translation.model';
import { Certificate } from '../../certificate/models/certificate.model';

export class CertificateGroup extends AuditFields {
  nameTranslations: Translation[];
  descriptionTranslations: Translation[];
  certificates?: Certificate[];

  constructor(certificateGroup: CertificateGroup) {
    super(certificateGroup.id, certificateGroup.createdAt, certificateGroup.updatedAt);
    this.nameTranslations = certificateGroup.nameTranslations;
    this.descriptionTranslations = certificateGroup.descriptionTranslations;
    this.certificates = certificateGroup.certificates;
  }
}
export type CertificateGroupFormGroup = FormGroup<{
  id?: FormControl<string | null>;
  nameTranslations: FormArray<TranslationFormGroup>;
  descriptionTranslations: FormArray<TranslationFormGroup>;
}>;
