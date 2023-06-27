import { Injectable, inject } from '@angular/core';
import { TextContent, Translation } from 'src/app/shared/components/translate-input/models/text-content.model';
import { supabaseClient } from 'src/app/shared/services/auth.service';
import { CommonService } from 'src/app/shared/services/common.service';
import { camelCaseToSnakeCase, flatObjectsById } from 'src/app/shared/utils/supabase-utils';
import { TranslationService } from '../../translation/services/translation.service';

@Injectable({
  providedIn: 'root',
})
export class TextContentService extends CommonService<TextContent> {
  private translationService = inject(TranslationService);

  constructor() {
    super(supabaseClient, 'text_contents');
  }

  override async upsert(payload: TextContent) {
    const savedTranslations: Translation[] = [];

    for (const translation of payload.translations) {
      const savedTranslation = await this.translationService.upsert(translation);
      savedTranslations.push(savedTranslation as any as Translation);
    }

    const textContent: TextContent = {
      ...payload,
      translations: savedTranslations,
    };

    const { data, error } = await this.supabase
      .from(this.table)
      .upsert(flatObjectsById(camelCaseToSnakeCase(textContent)));
    return error ? error : data;
  }
}
