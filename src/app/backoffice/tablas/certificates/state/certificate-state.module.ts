import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CertificateEffect } from './certificate.effects';
import { certificateNames } from './certificate.names';
import { certificateReducer } from './certificate.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EffectsModule.forFeature([CertificateEffect]),
    StoreModule.forFeature(
      certificateNames.kebabCase.plural.normal,
      certificateReducer.reducer,
    ),
  ],
})
export class CertificatesStateModule {}
