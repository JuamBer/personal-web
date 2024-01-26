import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CertificateListComponent, certificateListTitleResolver } from './certificate-list/certificate-list.component';
import {
  CertificateModalComponent,
  certificateModalTitleResolver,
} from './certificate-modal/certificate-modal.component';

const routes: Routes = [
  {
    path: '',
    title: certificateListTitleResolver,
    component: CertificateListComponent,
    children: [
      {
        path: ':modalMode',
        title: certificateModalTitleResolver,
        component: CertificateModalComponent,
      },
      {
        path: ':modalMode/:id',
        title: certificateModalTitleResolver,
        component: CertificateModalComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CertificateRoutingModule {}
