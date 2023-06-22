import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LanguageListComponent, languageListTitleResolver } from './language-list/language-list.component';
import { LanguageModalComponent, languageModalTitleResolver } from './language-modal/language-modal.component';

const routes: Routes = [
  {
    path: '',
    title: languageListTitleResolver,
    component: LanguageListComponent,
    children: [
      {
        path: 'modal',
        title: languageModalTitleResolver,
        component: LanguageModalComponent,
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LanguageRoutingModule {}
