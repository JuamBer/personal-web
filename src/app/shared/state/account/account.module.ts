import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { Naming, NumberMode } from '../common/common.names';
import { AccountEffect } from './account.effects';
import { accountNames } from './account.names';
import { accountReducer } from './account.reducer';

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([AccountEffect]),
    StoreModule.forFeature(accountNames.name(Naming.KEBAB_CASE, NumberMode.PLURAL), accountReducer),
  ],
})
export class AccountStateModule {}
