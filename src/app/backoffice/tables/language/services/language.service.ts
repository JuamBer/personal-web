import { Injectable } from '@angular/core';
import { CommonService } from 'src/app/shared/services/common.service';

import { supabaseClient } from 'src/app/shared/services/auth.service';
import { Naming, NumberMode } from 'src/app/shared/state/common/common.names';
import { Language } from '../models/language.model';
import { languageNames } from '../state/language.names';
@Injectable({
  providedIn: 'root',
})
export class LanguageService extends CommonService<Language> {
  constructor() {
    super(Language, supabaseClient, languageNames.name(Naming.SNAKE_CASE, NumberMode.PLURAL), '*', '*', 'native_name');
  }
}
