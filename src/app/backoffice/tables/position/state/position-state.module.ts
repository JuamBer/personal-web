import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { Naming, NumberMode } from 'src/app/shared/state/common/common.names';
import { PositionEffect } from './position.effects';
import { positionNames } from './position.names';
import { positionReducer } from './position.reducer';

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([PositionEffect]),
    StoreModule.forFeature(positionNames.name(Naming.KEBAB_CASE, NumberMode.PLURAL), positionReducer.reducer),
  ],
})
export class PositionStateModule {}
