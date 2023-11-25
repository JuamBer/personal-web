import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LanguagesModule } from 'src/app/shared/modules/languages.module';
import { SocialNetworksComponent } from './social-networks.component';

@NgModule({
  declarations: [SocialNetworksComponent],
  imports: [CommonModule, LanguagesModule],
  exports: [SocialNetworksComponent],
})
export class SocialNetworksModule {}
