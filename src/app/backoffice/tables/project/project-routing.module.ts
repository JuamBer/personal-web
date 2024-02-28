import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectListComponent, projectListTitleResolver } from './project-list/project-list.component';
import { ProjectModalComponent, projectModalTitleResolver } from './project-modal/project-modal.component';

const routes: Routes = [
  {
    path: '',
    title: projectListTitleResolver,
    component: ProjectListComponent,
    children: [
      {
        path: ':modalMode',
        title: projectModalTitleResolver,
        component: ProjectModalComponent,
      },
      {
        path: ':modalMode/:id',
        title: projectModalTitleResolver,
        component: ProjectModalComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectRoutingModule {}
