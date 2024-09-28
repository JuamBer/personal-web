import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { configuration } from 'src/assets/configuration';
import {
  FormResetPasswordComponent,
  formResetPasswordTitleResolver,
} from './backoffice/authentication/form-reset-password/form-reset-password.component';
import { LoginComponent, loginTitleResolver } from './backoffice/authentication/login/login.component';
import {
  ResetPasswordComponent,
  resetPasswordTitleResolver,
} from './backoffice/authentication/reset-password/reset-password.component';
import { AuthGuard } from './shared/guards/auth.guard';

let userLanguage = undefined;

function isBrowser(): boolean {
  return typeof window !== 'undefined' && typeof navigator !== 'undefined';
}

if (isBrowser() && navigator.language) {
  userLanguage = (navigator.languages ? navigator.languages[0] : navigator.language).split('-')[0];
}

const defaultLanguage = configuration.defaultLanguage;
const languages = configuration.languages;

const generateLangRoutes = (language: string) => {
  return {
    path: language,
    children: [
      {
        path: '',
        canActivate: [],
        loadChildren: () => import('./website/website.module').then((m) => m.WebsiteModule),
      },
      {
        path: 'backoffice',
        loadChildren: () => import('./backoffice/layout/backoffice/backoffice.module').then((m) => m.BackofficeModule),
        canActivate: [AuthGuard],
      },
      { path: 'login', component: LoginComponent, title: loginTitleResolver },
      { path: 'reset-password', component: ResetPasswordComponent, title: resetPasswordTitleResolver },
      {
        path: 'form-reset-password',
        component: FormResetPasswordComponent,
        title: formResetPasswordTitleResolver,
      },
      {
        path: '**',
        redirectTo: '',
        pathMatch: 'full',
      },
    ],
  } as Route;
};

const routes: Routes = [];

languages.forEach((language) => {
  routes.push(generateLangRoutes(language));
});

routes.push({
  path: '',
  redirectTo: userLanguage || defaultLanguage,
  pathMatch: 'full',
});

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
