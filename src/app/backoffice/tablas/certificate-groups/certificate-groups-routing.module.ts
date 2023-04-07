import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CertificateGroupComponent } from './certificate-group/certificate-group.component';

const routes: Routes = [
  {
    path: '',
    component: CertificateGroupComponent,
    canActivate: [],
    pathMatch: 'full',
  },
  {
    path: 'modal/:modalMode',
    component: CertificateGroupComponent,
    canActivate: [],
  },
  {
    path: 'modal/:modalMode/:id',
    component: CertificateGroupComponent,
    canActivate: [],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CertificateGroupsRoutingModule {}
