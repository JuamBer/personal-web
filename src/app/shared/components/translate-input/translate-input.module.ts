import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LanguagesModule } from '@app/shared/modules/languages.module';
import { PipesModule } from '@app/shared/modules/pipes.module';
import { PrimeNgModule } from '@app/shared/modules/primeng.module';
import { SidebarModule } from 'primeng/sidebar';
import { LanguageSelectModule } from '../language-select/language-select.module';
import { TranslateInputComponent } from './translate-input.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,

    PipesModule,
    LanguageSelectModule,
    PrimeNgModule,
    SidebarModule,

    LanguagesModule,
  ],
  declarations: [TranslateInputComponent],
  exports: [TranslateInputComponent],
})
export class TranslateInputModule {}
