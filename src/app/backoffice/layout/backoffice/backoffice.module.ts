import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { LanguageSelectModule } from 'src/app/shared/components/language-select/language-select.module';
import { BasicModule } from 'src/app/shared/modules/basic.module';
import { LanguagesModule } from 'src/app/shared/modules/languages.module';
import { BackofficeRoutingModule } from './backoffice-routing.module';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [MainComponent, HeaderComponent],
  imports: [
    LanguageSelectModule,
    LanguagesModule,
    CommonModule,
    BasicModule,
    BackofficeRoutingModule,
    BreadcrumbModule,
    ButtonModule,
    SidebarModule,
  ],
  exports: [RouterModule],
})
export class BackofficeModule {}
