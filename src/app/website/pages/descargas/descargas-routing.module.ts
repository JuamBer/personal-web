import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DescargaComponent } from './descargas.component';

const routes: Routes = [
  {
    path: '',
    component: DescargaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DescargaRoutingModule {}
