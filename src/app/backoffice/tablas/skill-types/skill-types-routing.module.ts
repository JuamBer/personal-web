import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkillTypeComponent } from './skill-type/skill-type.component';

const routes: Routes = [
  {
    path: '',
    component: SkillTypeComponent,
    canActivate: [],
    pathMatch: 'full',
  },
  {
    path: 'modal/:modalMode',
    component: SkillTypeComponent,
    canActivate: [],
  },
  {
    path: 'modal/:modalMode/:id',
    component: SkillTypeComponent,
    canActivate: [],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SkillTypesRoutingModule {}
