import { FormControl, FormGroup } from '@angular/forms';
import { TextContent, TextContentFormGroup } from 'src/app/shared/components/translate-input/models/text-content.model';
import { AuditFields } from 'src/app/shared/models/audit-fields.model';

export interface CertificateType extends AuditFields {
  id: string;
  name: string;
  description: string;
  nameTextContent: TextContent;
}
export type CertificateTypeFormGroup = FormGroup<{
  id?: FormControl<string>;
  name: FormControl<string | undefined>;
  description: FormControl<string | undefined>;
  nameTextContent: TextContentFormGroup;
}>;
