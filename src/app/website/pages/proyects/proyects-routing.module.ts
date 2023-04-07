import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProyectsComponent } from './proyects.component';

const routes: Routes = [
  {
    path: '',
    component: ProyectsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProyectsRoutingModule { }
