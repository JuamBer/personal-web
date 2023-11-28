import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { SidebarModule } from 'primeng/sidebar';
import { PipesModule } from 'src/app/shared/modules/pipes.module';
import { DirectivesModule } from '../../modules/directives.module';
import { LanguagesModule } from '../../modules/languages.module';
import { CapitalizePipe } from '../../pipes/capitalize.pipe';
import { LanguageSelectModule } from '../language-select/language-select.module';
import { InputTranslationsComponent } from './input-translations.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AutoCompleteModule,
    PipesModule,
    DropdownModule,
    LanguageSelectModule,
    SidebarModule,
    DirectivesModule,
    LanguagesModule,
    FontAwesomeModule,
    DividerModule,
    InputTextareaModule,
    InputTextModule,
    ButtonModule,
  ],
  declarations: [InputTranslationsComponent],
  exports: [InputTranslationsComponent],
  providers: [CapitalizePipe],
})
export class InputTranslationsModule {}
