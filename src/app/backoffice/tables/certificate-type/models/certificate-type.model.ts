import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { AuditFields } from 'src/app/shared/models/audit-fields.model';
import { Translation, TranslationFormGroup } from 'src/app/shared/models/translation.model';
import { Certificate } from '../../certificate/models/certificate.model';

export class CertificateType extends AuditFields {
  nameTranslations: Translation[];
  descriptionTranslations: Translation[];
  certificates?: Certificate[];

  constructor(certificateType: CertificateType) {
    super(certificateType.id, certificateType.createdAt, certificateType.updatedAt);
    this.nameTranslations = certificateType.nameTranslations;
    this.descriptionTranslations = certificateType.descriptionTranslations;
    this.certificates = certificateType.certificates;
  }
}
export type CertificateTypeFormGroup = FormGroup<{
  id?: FormControl<string>;
  nameTranslations: FormArray<TranslationFormGroup>;
  descriptionTranslations: FormArray<TranslationFormGroup>;
}>;
