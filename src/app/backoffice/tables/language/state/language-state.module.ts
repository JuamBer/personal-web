import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { Naming, NumberMode } from 'src/app/shared/state/common/common.names';
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
