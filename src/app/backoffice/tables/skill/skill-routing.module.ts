import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkillListComponent, skillListTitleResolver } from './skill-list/skill-list.component';
import { SkillModalComponent, skillModalTitleResolver } from './skill-modal/skill-modal.component';

const routes: Routes = [
  {
    path: '',
    title: skillListTitleResolver,
    component: SkillListComponent,
    children: [
      {
        path: 'modal',
        title: skillModalTitleResolver,
        component: SkillModalComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SkillRoutingModule {}
