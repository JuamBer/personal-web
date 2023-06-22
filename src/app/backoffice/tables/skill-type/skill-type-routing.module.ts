import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkillTypeListComponent, skillTypeListTitleResolver } from './skill-type-list/skill-type-list.component';
import { SkillTypeModalComponent, skillTypeModalTitleResolver } from './skill-type-modal/skill-type-modal.component';

const routes: Routes = [
  {
    path: '',
    title: skillTypeListTitleResolver,
    component: SkillTypeListComponent,
    children: [
      {
        path: 'modal',
        title: skillTypeModalTitleResolver,
        component: SkillTypeModalComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SkillTypeRoutingModule {}
