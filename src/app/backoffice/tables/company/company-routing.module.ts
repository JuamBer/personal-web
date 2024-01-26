import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyListComponent, companyListTitleResolver } from './company-list/company-list.component';
import { CompanyModalComponent, companyModalTitleResolver } from './company-modal/company-modal.component';

const routes: Routes = [
  {
    path: '',
    title: companyListTitleResolver,
    component: CompanyListComponent,
    children: [
      {
        path: ':modalMode',
        title: companyModalTitleResolver,
        component: CompanyModalComponent,
      },
      {
        path: ':modalMode/:id',
        title: companyModalTitleResolver,
        component: CompanyModalComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompanyRoutingModule {}
