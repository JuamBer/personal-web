import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LanguagesModule } from '@app/shared/modules/languages.module';
import { PipesModule } from '@app/shared/modules/pipes.module';
import { LanguageSelectModule } from '../language-select/language-select.module';
import { ErrorPageComponent } from './error-page.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,

    PipesModule,
    LanguageSelectModule,

    LanguagesModule,
  ],
  declarations: [ErrorPageComponent],
  exports: [ErrorPageComponent],
})
export class ErrorPageModule {}
