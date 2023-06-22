import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Naming, NumberMode } from '@app/shared/state/common/common.names';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SkillTypeEffect } from './skill-type.effects';
import { skillTypeNames } from './skill-type.names';
import { skillTypeReducer } from './skill-type.reducer';

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([SkillTypeEffect]),
    StoreModule.forFeature(skillTypeNames.name(Naming.KEBAB_CASE, NumberMode.PLURAL), skillTypeReducer.reducer),
  ],
})
export class SkillTypeStateModule {}
