import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkillComponent } from './skill/skill.component';

const routes: Routes = [
  {
    path: '',
    component: SkillComponent,
    canActivate: [],
    pathMatch: 'full',
  },
  {
    path: 'modal/:modalMode',
    component: SkillComponent,
    canActivate: [],
  },
  {
    path: 'modal/:modalMode/:id',
    component: SkillComponent,
    canActivate: [],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SkillsRoutingModule {}
