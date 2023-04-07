import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LanguageSelectModule } from '@app/shared/components/language-select/language-select.module';
import { LanguagesModule } from '@app/shared/modules/languages.module';
import { CertificateGroupsStateModule } from '../backoffice/tablas/certificate-groups/state/certificate-group-state.module';
import { AbilitiesComponent } from './components/abilities/abilities.component';
import { LanguagesComponent } from './components/languages/languages.component';
import { LayoutComponent } from './components/layout/layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { WebsiteRoutingModule } from './website-routing.module';

@NgModule({
  declarations: [
    SidebarComponent,
    LayoutComponent,
    AbilitiesComponent,
    LanguagesComponent,
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule,
    CertificateGroupsStateModule,
    LanguageSelectModule,
    LanguagesModule,
  ],
})
export class WebsiteModule {}
