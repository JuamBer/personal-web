import { Injectable } from '@angular/core';
import { Translation } from 'src/app/shared/components/translate-input/models/text-content.model';
import { supabaseClient } from 'src/app/shared/services/auth.service';
import { CommonService } from 'src/app/shared/services/common.service';

@Injectable({
  providedIn: 'root',
})
export class TranslationService extends CommonService<Translation> {
  constructor() {
    super(supabaseClient, 'translations');
  }
}
