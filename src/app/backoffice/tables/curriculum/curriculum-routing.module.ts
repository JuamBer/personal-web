import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurriculumListComponent, curriculumListTitleResolver } from './curriculum-list/curriculum-list.component';
import { CurriculumModalComponent, curriculumModalTitleResolver } from './curriculum-modal/curriculum-modal.component';

const routes: Routes = [
  {
    path: '',
    title: curriculumListTitleResolver,
    component: CurriculumListComponent,
    children: [
      {
        path: 'modal',
        title: curriculumModalTitleResolver,
        component: CurriculumModalComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CurriculumRoutingModule {}
