import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CertificateTypeEffect } from './certificate-type.effects';
import { certificateTypeNames } from './certificate-type.names';
import { certificateTypeReducer } from './certificate-type.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EffectsModule.forFeature([CertificateTypeEffect]),
    StoreModule.forFeature(
      certificateTypeNames.kebabCase.plural.normal,
      certificateTypeReducer.reducer,
    ),
  ],
})
export class CertificateTypesStateModule {}
