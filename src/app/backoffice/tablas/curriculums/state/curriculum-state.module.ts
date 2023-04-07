import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CurriculumEffect } from './curriculum.effects';
import { curriculumNames } from './curriculum.names';
import { curriculumReducer } from './curriculum.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EffectsModule.forFeature([CurriculumEffect]),
    StoreModule.forFeature(
      curriculumNames.kebabCase.plural.normal,
      curriculumReducer.reducer,
    ),
  ],
})
export class CurriculumsStateModule {}
