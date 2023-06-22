import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./pages/home/home.module').then((m) => m.HomeModule),
      },

      {
        path: 'blog',
        loadChildren: () => import('./pages/blog/blog.module').then((m) => m.BlogModule),
      },

      {
        path: 'certificates',
        loadChildren: () => import('./pages/certificates/certificates.module').then((m) => m.CertificatesModule),
      },
      {
        path: 'descargas',
        loadChildren: () => import('./pages/descargas/descargas.module').then((m) => m.DescargaModule),
      },
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebsiteRoutingModule {}
