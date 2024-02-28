import { registerLocaleData } from '@angular/common';
import { HttpClient, HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import localeDe from '@angular/common/locales/de';
import localeEn from '@angular/common/locales/en';
import localeEs from '@angular/common/locales/es';
import localeFr from '@angular/common/locales/fr';
import localeIt from '@angular/common/locales/it';
import localeNo from '@angular/common/locales/nb';
import localeNl from '@angular/common/locales/nl';
import localePt from '@angular/common/locales/pt';
import { NgModule, isDevMode } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
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
import { FormResetPasswordComponent } from './backoffice/authentication/form-reset-password/form-reset-password.component';
import { LoginComponent } from './backoffice/authentication/login/login.component';
import { ResetPasswordComponent } from './backoffice/authentication/reset-password/reset-password.component';
import { BackofficeModule } from './backoffice/layout/backoffice/backoffice.module';
import { LanguageSelectModule } from './shared/components/language-select/language-select.module';
import { LanguagesModule } from './shared/modules/languages.module';
import { PublicLanguageStateModule } from './shared/state/languages/public-language-state.module';

registerLocaleData(localeDe);
registerLocaleData(localeEn);
registerLocaleData(localeEs);
registerLocaleData(localeFr);
registerLocaleData(localeIt);
registerLocaleData(localeNl);
registerLocaleData(localeNo);
registerLocaleData(localePt);

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/');
}
@NgModule({
  declarations: [AppComponent, LoginComponent, FormResetPasswordComponent, ResetPasswordComponent],
  providers: [
    MessageService,
    ConfirmationService,
    PrimeNGConfig,
    provideHttpClient(withFetch()),
    provideClientHydration(),
  ],
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
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
})
export class AppModule {}
