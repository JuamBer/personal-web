import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@app/shared/guards/auth.guard';
import { LanguageComponent } from './language/language.component';

const routes: Routes = [
  {
    path: '',
    component: LanguageComponent,
    canActivate: [AuthGuard],
    pathMatch: 'full',
  },
  {
    path: 'modal/:modalMode',
    component: LanguageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'modal/:modalMode/:id',
    component: LanguageComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LanguagesRoutingModule {}
