import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/shared/guards/auth.guard';
import { BasicModule } from 'src/app/shared/modules/basic.module';
import { Naming, NumberMode } from 'src/app/shared/state/common/common.names';
import { certificateGroupNames } from '../../tables/certificate-group/state/certificate-group.names';
import { certificateTypeNames } from '../../tables/certificate-type/state/certificate-type.names';
import { certificateNames } from '../../tables/certificate/state/certificate.names';
import { companyNames } from '../../tables/company/state/company.names';
import { curriculumNames } from '../../tables/curriculum/state/curriculum.names';
import { languageNames } from '../../tables/language/state/language.names';
import { positionNames } from '../../tables/position/state/position.names';
import { skillTypeNames } from '../../tables/skill-type/state/skill-type.names';
import { skillNames } from '../../tables/skill/state/skill.names';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('src/app/backoffice/home/home.module').then((m) => m.HomeModule),
        canActivate: [AuthGuard],
      },
      {
        path: companyNames.name(Naming.KEBAB_CASE, NumberMode.PLURAL),
        loadChildren: () => import('src/app/backoffice/tables/company/company.module').then((m) => m.CompanyModule),
        canActivate: [AuthGuard],
      },
      {
        path: skillTypeNames.name(Naming.KEBAB_CASE, NumberMode.PLURAL),
        loadChildren: () =>
          import(`src/app/backoffice/tables/skill-type/skill-type.module`).then((m) => m.SkillTypeModule),
        canActivate: [AuthGuard],
      },
      {
        path: skillNames.name(Naming.KEBAB_CASE, NumberMode.PLURAL),
        loadChildren: () => import(`src/app/backoffice/tables/skill/skill.module`).then((m) => m.SkillModule),
        canActivate: [AuthGuard],
      },
      {
        path: certificateTypeNames.name(Naming.KEBAB_CASE, NumberMode.PLURAL),
        loadChildren: () =>
          import(`src/app/backoffice/tables/certificate-type/certificate-type.module`).then(
            (m) => m.CertificateTypeModule,
          ),
        canActivate: [AuthGuard],
      },
      {
        path: certificateGroupNames.name(Naming.KEBAB_CASE, NumberMode.PLURAL),
        loadChildren: () =>
          import(`src/app/backoffice/tables/certificate-group/certificate-group.module`).then(
            (m) => m.CertificateGroupModule,
          ),
        canActivate: [AuthGuard],
      },
      {
        path: certificateNames.name(Naming.KEBAB_CASE, NumberMode.PLURAL),
        loadChildren: () =>
          import(`src/app/backoffice/tables/certificate/certificate.module`).then((m) => m.CertificateModule),
        canActivate: [AuthGuard],
      },
      {
        path: languageNames.name(Naming.KEBAB_CASE, NumberMode.PLURAL),
        loadChildren: () => import(`src/app/backoffice/tables/language/language.module`).then((m) => m.LanguageModule),
        canActivate: [AuthGuard],
      },
      {
        path: curriculumNames.name(Naming.KEBAB_CASE, NumberMode.PLURAL),
        loadChildren: () =>
          import(`src/app/backoffice/tables/curriculum/curriculum.module`).then((m) => m.CurriculumModule),
        canActivate: [AuthGuard],
      },
      {
        path: positionNames.name(Naming.KEBAB_CASE, NumberMode.PLURAL),
        loadChildren: () => import(`src/app/backoffice/tables/position/position.module`).then((m) => m.PositionModule),
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
