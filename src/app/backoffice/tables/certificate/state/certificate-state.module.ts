import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Naming, NumberMode } from '@app/shared/state/common/common.names';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CertificateEffect } from './certificate.effects';
import { certificateNames } from './certificate.names';
import { certificateReducer } from './certificate.reducer';

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([CertificateEffect]),
    StoreModule.forFeature(certificateNames.name(Naming.KEBAB_CASE, NumberMode.PLURAL), certificateReducer.reducer),
  ],
})
export class CertificateStateModule {}
