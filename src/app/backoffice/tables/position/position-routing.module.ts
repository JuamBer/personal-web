import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PositionListComponent, positionListTitleResolver } from './position-list/position-list.component';
import { PositionModalComponent, positionModalTitleResolver } from './position-modal/position-modal.component';

const routes: Routes = [
  {
    path: '',
    title: positionListTitleResolver,
    component: PositionListComponent,
    children: [
      {
        path: ':modalMode',
        title: positionModalTitleResolver,
        component: PositionModalComponent,
      },
      {
        path: ':modalMode/:id',
        title: positionModalTitleResolver,
        component: PositionModalComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PositionRoutingModule {}
