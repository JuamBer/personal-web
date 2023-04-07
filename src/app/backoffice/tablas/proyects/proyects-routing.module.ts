import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProyectComponent } from './proyect/proyect.component';

const routes: Routes = [
  {
    path: '',
    component: ProyectComponent,
    canActivate: [],
    pathMatch: 'full',
  },
  {
    path: 'modal/:modalMode',
    component: ProyectComponent,
    canActivate: [],
  },
  {
    path: 'modal/:modalMode/:id',
    component: ProyectComponent,
    canActivate: [],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProyectsRoutingModule {}
