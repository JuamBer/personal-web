import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LanguagesModule } from '@app/shared/modules/languages.module';
import { PipesModule } from '@app/shared/modules/pipes.module';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { LoadingDataComponent } from './loading-data.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/');
}
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProgressSpinnerModule,
    RouterModule,

    PipesModule,

    LanguagesModule,
  ],
  declarations: [LoadingDataComponent],
  exports: [LoadingDataComponent],
})
export class LoadingDataModule {}
