import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Naming, NumberMode } from '@app/shared/state/common/common.names';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { LanguageEffect } from './language.effects';
import { languageNames } from './language.names';
import { languageReducer } from './language.reducer';

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([LanguageEffect]),
    StoreModule.forFeature(languageNames.name(Naming.KEBAB_CASE, NumberMode.PLURAL), languageReducer.reducer),
  ],
})
export class LanguageStateModule {}
