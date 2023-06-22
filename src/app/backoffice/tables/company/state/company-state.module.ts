import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Naming, NumberMode } from '@app/shared/state/common/common.names';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CompanyEffect } from './company.effects';
import { companyNames } from './company.names';
import { companyReducer } from './company.reducer';

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([CompanyEffect]),
    StoreModule.forFeature(companyNames.name(Naming.KEBAB_CASE, NumberMode.PLURAL), companyReducer.reducer),
  ],
})
export class CompanyStateModule {}
