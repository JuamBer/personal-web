import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { LanguageEffect } from './language.effects';
import { languageNames } from './language.names';
import { languageReducer } from './language.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EffectsModule.forFeature([LanguageEffect]),
    StoreModule.forFeature(
      languageNames.kebabCase.plural.normal,
      languageReducer.reducer,
    ),
  ],
})
export class LanguageStateModule {}
