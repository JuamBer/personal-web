import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
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
      certificateGroupNames.kebabCase.plural.normal,
      certificateGroupReducer.reducer,
    ),
  ],
})
export class CertificateGroupsStateModule {}
