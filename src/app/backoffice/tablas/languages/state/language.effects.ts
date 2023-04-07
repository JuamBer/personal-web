import { Injectable } from '@angular/core';
import { LanguageService } from '@app/backoffice/tablas/languages/services/language.service';
import { CommonEffect } from '@app/shared/state/common/common.effects';
import { Actions } from '@ngrx/effects';
import { Language } from '../models/language.model';
import { languageActions } from './language.actions';

@Injectable()
export class LanguageEffect extends CommonEffect<Language> {
  constructor(
    protected override actions$: Actions,
    protected languageSrv: LanguageService,
  ) {
    super(actions$, languageActions, languageSrv);
  }
}
