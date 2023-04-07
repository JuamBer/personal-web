import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { FormularioRecuperacionComponent } from './backoffice/autentificacion/formulario-recuperacion/formulario-recuperacion.component';
import { LoginSuccessComponent } from './backoffice/autentificacion/login-success/login-success.component';
import { LoginComponent } from './backoffice/autentificacion/login/login.component';
import { RecuperarPasswordComponent } from './backoffice/autentificacion/recuperar-password/recuperar-password.component';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [],
    loadChildren: () =>
      import('./website/website.module').then((m) => m.WebsiteModule),
  },
  {
    path: 'backoffice',
    loadChildren: () =>
      import('./backoffice/layout/backoffice/backoffice.module').then(
        (m) => m.BackofficeModule,
      ),
    canActivate: [AuthGuard],
  },
  { path: 'login', component: LoginComponent },
  { path: 'login-success', component: LoginSuccessComponent },
  { path: 'reset-password', component: RecuperarPasswordComponent },
  {
    path: 'form-reset-password',
    component: FormularioRecuperacionComponent,
  },
  {
    path: 'form-reset-password/:access_token/',
    component: FormularioRecuperacionComponent,
  },
  {
    path: '**',
    redirectTo: 'errors/Not Found/404 NOT_FOUND/null/404/null',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
