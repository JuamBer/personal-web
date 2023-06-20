import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { certificateGroupNames } from '@app/backoffice/tablas/certificate-groups/state/certificate-group.names';
import { certificateTypeNames } from '@app/backoffice/tablas/certificate-types/state/certificate-type.names';
import { certificateNames } from '@app/backoffice/tablas/certificates/state/certificate.names';
import { curriculumNames } from '@app/backoffice/tablas/curriculums/state/curriculum.names';
import { languageNames } from '@app/backoffice/tablas/languages/state/language.names';
import { mountNames } from '@app/backoffice/tablas/mounts/state/mount.names';
import { positionNames } from '@app/backoffice/tablas/positions/state/position.names';
import { proyectNames } from '@app/backoffice/tablas/proyects/state/proyect.names';
import { skillTypeNames } from '@app/backoffice/tablas/skill-types/state/skill-type.names';
import { skillNames } from '@app/backoffice/tablas/skills/state/skill.names';
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
        // pathMatch: 'full',
      },

      {
        path: 'companies',
        loadChildren: () => import('@app/backoffice/tablas/companies/companies.module').then((m) => m.CompaniesModule),
        canActivate: [AuthGuard],
      },
      {
        path: skillTypeNames.kebabCase.plural.normal,
        loadChildren: () =>
          import(`@app/backoffice/tablas/skill-types/skill-types.module`).then((m) => m.SkillTypesModule),
        canActivate: [AuthGuard],
      },
      {
        path: skillNames.kebabCase.plural.normal,
        loadChildren: () => import(`@app/backoffice/tablas/skills/skills.module`).then((m) => m.SkillsModule),
        canActivate: [AuthGuard],
      },
      {
        path: certificateTypeNames.name(Naming.KEBAB_CASE, NumberMode.PLURAL),
        loadChildren: () =>
          import(`@app/backoffice/tablas/certificate-types/certificate-types.module`).then(
            (m) => m.CertificateTypesModule,
          ),
        canActivate: [AuthGuard],
      },
      {
        path: certificateGroupNames.name(Naming.KEBAB_CASE, NumberMode.PLURAL),
        loadChildren: () =>
          import(`@app/backoffice/tablas/certificate-groups/certificate-groups.module`).then(
            (m) => m.CertificateGroupsModule,
          ),
        canActivate: [AuthGuard],
      },
      {
        path: certificateNames.name(Naming.KEBAB_CASE, NumberMode.PLURAL),
        loadChildren: () =>
          import(`@app/backoffice/tablas/certificates/certificates.module`).then((m) => m.CertificatesModule),
        canActivate: [AuthGuard],
      },
      {
        path: proyectNames.kebabCase.plural.normal,
        loadChildren: () => import(`@app/backoffice/tablas/proyects/proyects.module`).then((m) => m.ProyectsModule),
        canActivate: [AuthGuard],
      },
      {
        path: mountNames.kebabCase.plural.normal,
        loadChildren: () => import(`@app/backoffice/tablas/mounts/mounts.module`).then((m) => m.MountsModule),
        canActivate: [AuthGuard],
      },
      {
        path: languageNames.kebabCase.plural.normal,
        loadChildren: () => import(`@app/backoffice/tablas/languages/languages.module`).then((m) => m.LanguagesModule),
        canActivate: [AuthGuard],
      },
      {
        path: curriculumNames.kebabCase.plural.normal,
        loadChildren: () =>
          import(`@app/backoffice/tablas/curriculums/curriculums.module`).then((m) => m.CurriculumsModule),
        canActivate: [AuthGuard],
      },
      {
        path: positionNames.kebabCase.plural.normal,
        loadChildren: () => import(`@app/backoffice/tablas/positions/positions.module`).then((m) => m.PositionsModule),
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
