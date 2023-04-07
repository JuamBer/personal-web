import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SkillTypeEffect } from './skill-type.effects';
import { skillTypeNames } from './skill-type.names';
import { skillTypeReducer } from './skill-type.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EffectsModule.forFeature([SkillTypeEffect]),
    StoreModule.forFeature(
      skillTypeNames.kebabCase.plural.normal,
      skillTypeReducer.reducer,
    ),
  ],
})
export class SkillTypesStateModule {}
