import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  FormResetPasswordComponent,
  formResetPasswordTitleResolver,
} from './backoffice/autentificacion/form-reset-password/form-reset-password.component';
import { LoginComponent, loginTitleResolver } from './backoffice/autentificacion/login/login.component';
import {
  ResetPasswordComponent,
  resetPasswordTitleResolver,
} from './backoffice/autentificacion/reset-password/reset-password.component';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
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
    path: 'form-reset-password/:access_token/',
    component: FormResetPasswordComponent,
  },
  {
    path: '**',
    redirectTo: 'errors/Not Found/404 NOT_FOUND/null/404/null',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
