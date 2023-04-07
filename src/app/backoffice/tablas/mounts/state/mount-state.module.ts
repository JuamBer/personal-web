import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { MountEffect } from './mount.effects';
import { mountNames } from './mount.names';
import { mountReducer } from './mount.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EffectsModule.forFeature([MountEffect]),
    StoreModule.forFeature(
      mountNames.kebabCase.plural.normal,
      mountReducer.reducer,
    ),
  ],
})
export class MountsStateModule {}
