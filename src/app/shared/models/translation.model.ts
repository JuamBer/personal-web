import { FormControl, FormGroup } from '@angular/forms';

export interface Translation {
  language: string;
  value: string;
}

export type TranslationFormGroup = FormGroup<{
  language: FormControl<string>;
  value: FormControl<string | undefined>;
}>;
