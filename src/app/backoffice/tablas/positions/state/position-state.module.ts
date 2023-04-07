import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { PositionEffect } from './position.effects';
import { positionNames } from './position.names';
import { positionReducer } from './position.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EffectsModule.forFeature([PositionEffect]),
    StoreModule.forFeature(
      positionNames.kebabCase.plural.normal,
      positionReducer.reducer,
    ),
  ],
})
export class PositionStateModule {}
