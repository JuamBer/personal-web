import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { certificateGroupNames } from '@app/backoffice/tables/certificate-group/state/certificate-group.names';
import { certificateTypeNames } from '@app/backoffice/tables/certificate-type/state/certificate-type.names';
import { certificateNames } from '@app/backoffice/tables/certificate/state/certificate.names';
import { companyNames } from '@app/backoffice/tables/company/state/company.names';
import { curriculumNames } from '@app/backoffice/tables/curriculum/state/curriculum.names';
import { languageNames } from '@app/backoffice/tables/language/state/language.names';
import { positionNames } from '@app/backoffice/tables/position/state/position.names';
import { skillTypeNames } from '@app/backoffice/tables/skill-type/state/skill-type.names';
import { skillNames } from '@app/backoffice/tables/skill/state/skill.names';
import { AuthGuard } from '@app/shared/guards/auth.guard';
import { BasicModule } from '@app/shared/modules/basic.module';
import { Naming, NumberMode } from '@app/shared/state/common/common.names';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('@app/backoffice/home/home.module').then((m) => m.HomeModule),
        canActivate: [AuthGuard],
      },
      {
        path: companyNames.name(Naming.KEBAB_CASE, NumberMode.PLURAL),
        loadChildren: () => import('@app/backoffice/tables/company/company.module').then((m) => m.CompanyModule),
        canActivate: [AuthGuard],
      },
      {
        path: skillTypeNames.name(Naming.KEBAB_CASE, NumberMode.PLURAL),
        loadChildren: () =>
          import(`@app/backoffice/tables/skill-type/skill-type.module`).then((m) => m.SkillTypeModule),
        canActivate: [AuthGuard],
      },
      {
        path: skillNames.name(Naming.KEBAB_CASE, NumberMode.PLURAL),
        loadChildren: () => import(`@app/backoffice/tables/skill/skill.module`).then((m) => m.SkillModule),
        canActivate: [AuthGuard],
      },
      {
        path: certificateTypeNames.name(Naming.KEBAB_CASE, NumberMode.PLURAL),
        loadChildren: () =>
          import(`@app/backoffice/tables/certificate-type/certificate-type.module`).then(
            (m) => m.CertificateTypeModule,
          ),
        canActivate: [AuthGuard],
      },
      {
        path: certificateGroupNames.name(Naming.KEBAB_CASE, NumberMode.PLURAL),
        loadChildren: () =>
          import(`@app/backoffice/tables/certificate-group/certificate-group.module`).then(
            (m) => m.CertificateGroupModule,
          ),
        canActivate: [AuthGuard],
      },
      {
        path: certificateNames.name(Naming.KEBAB_CASE, NumberMode.PLURAL),
        loadChildren: () =>
          import(`@app/backoffice/tables/certificate/certificate.module`).then((m) => m.CertificateModule),
        canActivate: [AuthGuard],
      },
      {
        path: languageNames.name(Naming.KEBAB_CASE, NumberMode.PLURAL),
        loadChildren: () => import(`@app/backoffice/tables/language/language.module`).then((m) => m.LanguageModule),
        canActivate: [AuthGuard],
      },
      {
        path: curriculumNames.name(Naming.KEBAB_CASE, NumberMode.PLURAL),
        loadChildren: () =>
          import(`@app/backoffice/tables/curriculum/curriculum.module`).then((m) => m.CurriculumModule),
        canActivate: [AuthGuard],
      },
      {
        path: positionNames.name(Naming.KEBAB_CASE, NumberMode.PLURAL),
        loadChildren: () => import(`@app/backoffice/tables/position/position.module`).then((m) => m.PositionModule),
        canActivate: [AuthGuard],
      },
      {
        path: 'account',
        loadChildren: () => import('@app/backoffice/account/account.module').then((m) => m.AccountModule),
        canActivate: [AuthGuard],
      },
    ],
  },

  { path: '', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [BasicModule, RouterModule.forChild(routes)],
  providers: [],
  exports: [RouterModule],
})
export class BackofficeRoutingModule {}
