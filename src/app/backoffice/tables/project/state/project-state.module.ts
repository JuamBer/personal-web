import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { Naming, NumberMode } from 'src/app/shared/state/common/common.names';
import { ProjectEffect } from './project.effects';
import { projectNames } from './project.names';
import { projectReducer } from './project.reducer';

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([ProjectEffect]),
    StoreModule.forFeature(projectNames.name(Naming.KEBAB_CASE, NumberMode.PLURAL), projectReducer.reducer),
  ],
})
export class ProjectStateModule {}
