import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CertificateTypeComponent } from './certificate-type/certificate-type.component';

const routes: Routes = [
  {
    path: '',
    component: CertificateTypeComponent,
    canActivate: [],
    pathMatch: 'full',
  },
  {
    path: 'modal/:modalMode',
    component: CertificateTypeComponent,
    canActivate: [],
  },
  {
    path: 'modal/:modalMode/:id',
    component: CertificateTypeComponent,
    canActivate: [],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CertificateTypesRoutingModule {}
