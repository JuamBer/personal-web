import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { Naming, NumberMode } from '../common/common.names';
import { PublicLanguageEffect } from './public-language.effects';
import { publicLanguageNames } from './public-language.names';
import { publicLanguageReducer } from './public-language.reducer';

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([PublicLanguageEffect]),
    StoreModule.forFeature(
      publicLanguageNames.name(Naming.KEBAB_CASE, NumberMode.PLURAL),
      publicLanguageReducer.reducer,
    ),
  ],
})
export class PublicLanguageStateModule {}
