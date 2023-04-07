import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@app/shared/guards/auth.guard';
import { BasicModule } from '@app/shared/modules/basic.module';
import { AccountComponent } from './account.component';

const routes: Routes = [
  {
    path: '',
    component: AccountComponent,
    canActivate: [AuthGuard],
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [],
  imports: [BasicModule, RouterModule.forChild(routes)],
  providers: [],
  exports: [RouterModule],
})
export class AccountRoutingModule {}
