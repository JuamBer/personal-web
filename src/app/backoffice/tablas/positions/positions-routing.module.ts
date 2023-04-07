import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@app/shared/guards/auth.guard';
import { PositionComponent } from './position/position.component';

const routes: Routes = [
  {
    path: '',
    component: PositionComponent,
    canActivate: [AuthGuard],
    pathMatch: 'full',
  },
  {
    path: 'modal/:modalMode',
    component: PositionComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'modal/:modalMode/:id',
    component: PositionComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PositionsRoutingModule {}
