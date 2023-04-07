import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CompanyEffect } from './company.effects';
import { companyNames } from './company.names';
import { companyReducer } from './company.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EffectsModule.forFeature([CompanyEffect]),
    StoreModule.forFeature(
      companyNames.kebabCase.plural.normal,
      companyReducer.reducer,
    ),
  ],
})
export class CompaniesStateModule {}
