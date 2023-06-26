import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { Naming, NumberMode } from 'src/app/shared/state/common/common.names';
import { CertificateGroupEffect } from './certificate-group.effects';
import { certificateGroupNames } from './certificate-group.names';
import { certificateGroupReducer } from './certificate-group.reducer';

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([CertificateGroupEffect]),
    StoreModule.forFeature(
      certificateGroupNames.name(Naming.KEBAB_CASE, NumberMode.PLURAL),
      certificateGroupReducer.reducer,
    ),
  ],
})
export class CertificateGroupStateModule {}
