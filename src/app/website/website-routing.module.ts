import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { certificatesTitleResolver } from './pages/certificates/certificates.component';
import { homeTitleResolver } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./pages/home/home.module').then((m) => m.HomeModule),
        title: homeTitleResolver,
      },
      {
        path: 'certificates',
        loadChildren: () => import('./pages/certificates/certificates.module').then((m) => m.CertificatesModule),
        title: certificatesTitleResolver,
      },
      {
        path: '',
        redirectTo: 'home',
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
