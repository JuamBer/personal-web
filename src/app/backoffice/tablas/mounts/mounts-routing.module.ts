import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MountComponent } from './mount/mount.component';

const routes: Routes = [
  {
    path: '',
    component: MountComponent,
    canActivate: [],
    pathMatch: 'full',
  },
  {
    path: 'modal/:modalMode',
    component: MountComponent,
    canActivate: [],
  },
  {
    path: 'modal/:modalMode/:id',
    component: MountComponent,
    canActivate: [],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MountsRoutingModule {}
