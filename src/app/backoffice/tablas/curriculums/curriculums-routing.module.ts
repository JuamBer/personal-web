import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurriculumComponent } from './curriculum/curriculum.component';

const routes: Routes = [
  {
    path: '',
    component: CurriculumComponent,
    canActivate: [],
    pathMatch: 'full',
  },
  {
    path: 'modal/:modalMode',
    component: CurriculumComponent,
    canActivate: [],
  },
  {
    path: 'modal/:modalMode/:id',
    component: CurriculumComponent,
    canActivate: [],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CurriculumsRoutingModule {}
