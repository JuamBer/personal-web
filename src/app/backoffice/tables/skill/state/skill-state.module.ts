import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Naming, NumberMode } from '@app/shared/state/common/common.names';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
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
