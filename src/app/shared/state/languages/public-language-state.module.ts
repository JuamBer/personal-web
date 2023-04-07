import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { PublicLanguageEffect } from './public-language.effects';
import { publicLanguageNames } from './public-language.names';
import { publicLanguageReducer } from './public-language.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EffectsModule.forFeature([PublicLanguageEffect]),
    StoreModule.forFeature(
      publicLanguageNames.kebabCase.plural.normal,
      publicLanguageReducer.reducer,
    ),
  ],
})
export class PublicLanguageStateModule {}
