import { Injectable } from '@angular/core';
import { CommonEffect } from '@app/shared/state/common/common.effects';
import { Actions } from '@ngrx/effects';
import { Language } from '../models/language.model';
import { LanguageService } from '../services/language.service';
import { languageActions } from './language.actions';

@Injectable()
export class LanguageEffect extends CommonEffect<Language> {
  constructor(protected override actions$: Actions, protected languageSrv: LanguageService) {
    super(actions$, languageActions, languageSrv);
  }
}
