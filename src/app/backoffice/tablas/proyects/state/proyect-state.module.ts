import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ProyectEffect } from './proyect.effects';
import { proyectNames } from './proyect.names';
import { proyectReducer } from './proyect.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EffectsModule.forFeature([ProyectEffect]),
    StoreModule.forFeature(
      proyectNames.kebabCase.plural.normal,
      proyectReducer.reducer,
    ),
  ],
})
export class ProyectsStateModule {}
