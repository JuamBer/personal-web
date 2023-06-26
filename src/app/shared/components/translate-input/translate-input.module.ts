import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SidebarModule } from 'primeng/sidebar';
import { PipesModule } from 'src/app/shared/modules/pipes.module';
import { PrimeNgModule } from 'src/app/shared/modules/primeng.module';
import { LanguagesModule } from '../../modules/languages.module';
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
