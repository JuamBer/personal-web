import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  CertificateTypeListComponent,
  certificateTypeListTitleResolver,
} from './certificate-type-list/certificate-type-list.component';
import {
  CertificateTypeModalComponent,
  certificateTypeModalTitleResolver,
} from './certificate-type-modal/certificate-type-modal.component';

const routes: Routes = [
  {
    path: '',
    title: certificateTypeListTitleResolver,
    component: CertificateTypeListComponent,
    children: [
      {
        path: 'modal',
        title: certificateTypeModalTitleResolver,
        component: CertificateTypeModalComponent,
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CertificateTypesRoutingModule {}
