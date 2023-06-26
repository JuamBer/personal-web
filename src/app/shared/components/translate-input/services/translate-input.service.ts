import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { TextContent, TextContentFormGroup } from '../models/text-content.model';

@Injectable({
  providedIn: 'root',
})
export class TranslateInputService {
  constructor(private store: Store, private formBuilder: FormBuilder) {}

  getForm(value: TextContent | undefined): TextContentFormGroup {
    return this.formBuilder.group({
      translations: this.formBuilder.array(
        value?.translations.map((translation) =>
          this.formBuilder.group({
            id: [translation.id],
            value: [translation.value],
            language: [translation.language],
          }),
        ) || [],
      ),
    }) as TextContentFormGroup;
  }
}
