import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Language } from 'src/app/backoffice/tables/language/models/language.model';

export interface Translation {
  id: string;
  value: string;
  language: Language;
}
export type TranslationFormGroup = FormGroup<{
  id?: FormControl<string>;
  value: FormControl<string | undefined>;
  language: FormControl<Language | undefined>;
}>;

export interface TextContent {
  id: string;
  translations: Translation[];
}

export type TextContentFormGroup = FormGroup<{
  id?: FormControl<string>;
  translations: FormArray<TranslationFormGroup>;
}>;

export const initialTextContentFormGroup: TextContentFormGroup = new FormGroup({
  translations: new FormArray([]),
});
