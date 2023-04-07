//IONIC
//AWESOME CORDOVA PLUGINS
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {
  ConfirmationService,
  MessageService,
  PrimeNGConfig,
} from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountModule } from './backoffice/account/account.module';
import { FormularioRecuperacionComponent } from './backoffice/autentificacion/formulario-recuperacion/formulario-recuperacion.component';
import { LoginSuccessComponent } from './backoffice/autentificacion/login-success/login-success.component';
import { LoginComponent } from './backoffice/autentificacion/login/login.component';
import { RecuperarPasswordComponent } from './backoffice/autentificacion/recuperar-password/recuperar-password.component';
import { BackofficeModule } from './backoffice/layout/backoffice/backoffice.module';
import { MenuService } from './backoffice/layout/backoffice/sidebar/menu/menu.service';
import { LanguageSelectModule } from './shared/components/language-select/language-select.module';
import { LoadingDataModule } from './shared/components/loading-data/loading-data.module';
import { LanguagesModule } from './shared/modules/languages.module';
import { AccountStateModule } from './shared/state/account/account.module';
import { PublicLanguageStateModule } from './shared/state/languages/public-language-state.module';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/');
}
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginSuccessComponent,
    FormularioRecuperacionComponent,
    RecuperarPasswordComponent,
  ],
  providers: [MenuService, MessageService, ConfirmationService, PrimeNGConfig],
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
    LoadingDataModule,
    AccountStateModule,
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
    AccountModule,
    BackofficeModule,
  ],
})
export class AppModule {}
