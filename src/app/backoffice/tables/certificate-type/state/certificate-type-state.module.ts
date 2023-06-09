import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { Naming, NumberMode } from 'src/app/shared/state/common/common.names';
import { CertificateTypeEffect } from './certificate-type.effects';
import { certificateTypeNames } from './certificate-type.names';
import { certificateTypeReducer } from './certificate-type.reducer';

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([CertificateTypeEffect]),
    StoreModule.forFeature(
      certificateTypeNames.name(Naming.KEBAB_CASE, NumberMode.PLURAL),
      certificateTypeReducer.reducer,
    ),
  ],
})
export class CertificateTypeStateModule {}
