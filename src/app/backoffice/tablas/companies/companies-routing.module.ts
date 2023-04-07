import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@app/shared/guards/auth.guard';
import { CompanyComponent } from './company/company.component';

const routes: Routes = [
  {
    path: '',
    component: CompanyComponent,
    canActivate: [AuthGuard],
    pathMatch: 'full',
  },
  {
    path: 'modal/:modalMode',
    component: CompanyComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'modal/:modalMode/:id',
    component: CompanyComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompaniesRoutingModule {}
