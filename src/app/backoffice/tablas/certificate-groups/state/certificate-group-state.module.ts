import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Naming, NumberMode } from '@app/shared/state/common/common.names';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CertificateGroupEffect } from './certificate-group.effects';
import { certificateGroupNames } from './certificate-group.names';
import { certificateGroupReducer } from './certificate-group.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EffectsModule.forFeature([CertificateGroupEffect]),
    StoreModule.forFeature(
      certificateGroupNames.name(Naming.KEBAB_CASE, NumberMode.PLURAL),
      certificateGroupReducer.reducer,
    ),
  ],
})
export class CertificateGroupsStateModule {}
