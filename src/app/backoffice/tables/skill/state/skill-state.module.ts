import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { Naming, NumberMode } from 'src/app/shared/state/common/common.names';
import { SkillEffect } from './skill.effects';
import { skillNames } from './skill.names';
import { skillReducer } from './skill.reducer';

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([SkillEffect]),
    StoreModule.forFeature(skillNames.name(Naming.KEBAB_CASE, NumberMode.PLURAL), skillReducer.reducer),
  ],
})
export class SkillStateModule {}
