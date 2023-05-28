import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CertificateGroupListComponent } from './certificate-group-list/certificate-group-list.component';
import { CertificateGroupModalComponent } from './certificate-group-modal/certificate-group-modal.component';

const routes: Routes = [
  {
    path: '',
    component: CertificateGroupListComponent,
    canActivate: [],
    children: [
      {
        path: 'modal',
        component: CertificateGroupModalComponent,
        canActivate: [],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CertificateGroupsRoutingModule {}
