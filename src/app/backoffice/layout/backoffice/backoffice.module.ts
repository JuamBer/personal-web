import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LanguageSelectModule } from 'src/app/shared/components/language-select/language-select.module';
import { BasicModule } from 'src/app/shared/modules/basic.module';
import { LanguagesModule } from 'src/app/shared/modules/languages.module';
import { PrimeNgModule } from 'src/app/shared/modules/primeng.module';
import { BackofficeRoutingModule } from './backoffice-routing.module';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { HomeMenuComponent } from './sidebar/menu/home.menu.component';
import { MenuitemComponent } from './sidebar/menu/menuitem.component';
import { SettingsMenuComponent } from './sidebar/menu/settings.menu.component';
import { SideBarComponent } from './sidebar/sidebar.component';
import { SidebartabcontentComponent } from './sidebar/sidebartabcontent.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SideBarComponent,
    MainComponent,
    SettingsMenuComponent,
    HomeMenuComponent,
    MenuitemComponent,
    SidebartabcontentComponent,
  ],
  imports: [LanguageSelectModule, LanguagesModule, CommonModule, BasicModule, PrimeNgModule, BackofficeRoutingModule],
  providers: [],
  exports: [RouterModule],
})
export class BackofficeModule {}
