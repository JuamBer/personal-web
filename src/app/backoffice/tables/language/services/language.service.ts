import { Injectable } from '@angular/core';
import { supabaseClient } from '@app/shared/services/auth.service';
import { CommonService } from '@app/shared/services/common.service';
import { Naming, NumberMode } from '@app/shared/state/common/common.names';
import { Language } from '../models/language.model';
import { languageNames } from '../state/language.names';
@Injectable({
  providedIn: 'root',
})
export class LanguageService extends CommonService<Language> {
  constructor() {
    super(supabaseClient, languageNames.name(Naming.SNAKE_CASE, NumberMode.PLURAL));
  }
}
