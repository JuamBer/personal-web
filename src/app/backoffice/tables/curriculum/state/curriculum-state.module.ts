import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { Naming, NumberMode } from 'src/app/shared/state/common/common.names';
import { CurriculumEffect } from './curriculum.effects';
import { curriculumNames } from './curriculum.names';
import { curriculumReducer } from './curriculum.reducer';

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([CurriculumEffect]),
    StoreModule.forFeature(curriculumNames.name(Naming.KEBAB_CASE, NumberMode.PLURAL), curriculumReducer.reducer),
  ],
})
export class CurriculumStateModule {}
