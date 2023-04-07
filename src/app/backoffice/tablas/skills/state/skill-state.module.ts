import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SkillEffect } from './skill.effects';
import { skillNames } from './skill.names';
import { skillReducer } from './skill.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EffectsModule.forFeature([SkillEffect]),
    StoreModule.forFeature(
      skillNames.kebabCase.plural.normal,
      skillReducer.reducer,
    ),
  ],
})
export class SkillsStateModule {}
