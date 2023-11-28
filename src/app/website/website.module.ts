import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { LanguagesModule } from 'src/app/shared/modules/languages.module';
import { CertificateGroupStateModule } from '../backoffice/tables/certificate-group/state/certificate-group-state.module';
import { LanguageSelectModule } from '../shared/components/language-select/language-select.module';
import { DirectivesModule } from '../shared/modules/directives.module';
import { PipesModule } from '../shared/modules/pipes.module';
import { LayoutComponent } from './components/layout/layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { WebsiteRoutingModule } from './website-routing.module';

@NgModule({
  declarations: [SidebarComponent, LayoutComponent],
  imports: [
    CommonModule,
    WebsiteRoutingModule,
    ReactiveFormsModule,
    CertificateGroupStateModule,
    LanguageSelectModule,
    ToggleButtonModule,
    LanguagesModule,
    PipesModule,
    DirectivesModule,
    FontAwesomeModule,
  ],
})
export class WebsiteModule {}
