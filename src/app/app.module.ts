import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ConfirmationService, MessageService, PrimeNGConfig } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormResetPasswordComponent } from './backoffice/autentificacion/form-reset-password/form-reset-password.component';
import { LoginComponent } from './backoffice/autentificacion/login/login.component';
import { ResetPasswordComponent } from './backoffice/autentificacion/reset-password/reset-password.component';
import { BackofficeModule } from './backoffice/layout/backoffice/backoffice.module';
import { LanguageSelectModule } from './shared/components/language-select/language-select.module';
import { LanguagesModule } from './shared/modules/languages.module';
import { PublicLanguageStateModule } from './shared/state/languages/public-language-state.module';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/');
}
@NgModule({
  declarations: [AppComponent, LoginComponent, FormResetPasswordComponent, ResetPasswordComponent],
  providers: [MessageService, ConfirmationService, PrimeNGConfig],
  bootstrap: [AppComponent],
  imports: [
    ToastModule,
    ButtonModule,
    InputTextModule,
    BrowserModule,
    ConfirmDialogModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    LanguageSelectModule,
    ReactiveFormsModule,
    LanguagesModule,
    PublicLanguageStateModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    BackofficeModule,
    FontAwesomeModule,
  ],
})
export class AppModule {}
