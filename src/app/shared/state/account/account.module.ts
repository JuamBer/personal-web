import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AccountEffect } from './account.effects';
import { accountNames } from './account.names';
import { accountReducer } from './account.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EffectsModule.forFeature([AccountEffect]),
    StoreModule.forFeature(
      accountNames.kebabCase.singular.normal,
      accountReducer,
    ),
  ],
})
export class AccountStateModule {}
