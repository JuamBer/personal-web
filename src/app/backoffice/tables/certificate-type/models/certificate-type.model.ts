import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { AuditFields } from 'src/app/shared/models/audit-fields.model';
import { Translation, TranslationFormGroup } from 'src/app/shared/models/translation.model';

export interface CertificateType extends AuditFields {
  id: string;
  name: string;
  description: string;
  nameTranslations: Translation[];
}
export type CertificateTypeFormGroup = FormGroup<{
  id?: FormControl<string>;
  name: FormControl<string | undefined>;
  description: FormControl<string | undefined>;
  nameTranslations: FormArray<TranslationFormGroup>;
}>;
