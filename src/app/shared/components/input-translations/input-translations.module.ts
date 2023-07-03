import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { SidebarModule } from 'primeng/sidebar';
import { PipesModule } from 'src/app/shared/modules/pipes.module';
import { PrimeNgModule } from 'src/app/shared/modules/primeng.module';
import { DirectivesModule } from '../../modules/directives.module';
import { LanguagesModule } from '../../modules/languages.module';
import { LanguageSelectModule } from '../language-select/language-select.module';
import { InputTranslationsComponent } from './input-translations.component';
import { DividerModule } from 'primeng/divider';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AutoCompleteModule,
    PipesModule,
    LanguageSelectModule,
    PrimeNgModule,
    SidebarModule,
    DirectivesModule,
    LanguagesModule,
    FontAwesomeModule,DividerModule
  ],
  declarations: [InputTranslationsComponent],
  exports: [InputTranslationsComponent],
})
export class InputTranslationsModule {}
