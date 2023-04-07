import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CertificateComponent } from './certificate/certificate.component';

const routes: Routes = [
  {
    path: '',
    component: CertificateComponent,
    canActivate: [],
    pathMatch: 'full',
  },
  {
    path: 'modal/:modalMode',
    component: CertificateComponent,
    canActivate: [],
  },
  {
    path: 'modal/:modalMode/:id',
    component: CertificateComponent,
    canActivate: [],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CertificatesRoutingModule {}
