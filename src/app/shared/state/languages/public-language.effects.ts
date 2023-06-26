import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { Language } from 'src/app/backoffice/tables/language/models/language.model';
import { LanguageService } from 'src/app/backoffice/tables/language/services/language.service';
import { CommonEffect } from '../common/common.effects';
import { publicLanguageActions } from './public-language.actions';

@Injectable()
export class PublicLanguageEffect extends CommonEffect<Language> {
  constructor(protected override actions$: Actions, protected languageSrv: LanguageService) {
    super(actions$, publicLanguageActions, languageSrv);
  }
}
