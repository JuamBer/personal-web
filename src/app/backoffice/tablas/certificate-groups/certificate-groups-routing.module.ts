import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  CertificateGroupListComponent,
  certificateGroupListTitleResolver,
} from './certificate-group-list/certificate-group-list.component';
import {
  CertificateGroupModalComponent,
  certificateGroupModalTitleResolver,
} from './certificate-group-modal/certificate-group-modal.component';

const routes: Routes = [
  {
    path: '',
    title: certificateGroupListTitleResolver,
    component: CertificateGroupListComponent,
    children: [
      {
        path: 'modal',
        title: certificateGroupModalTitleResolver,
        component: CertificateGroupModalComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CertificateGroupsRoutingModule {}
