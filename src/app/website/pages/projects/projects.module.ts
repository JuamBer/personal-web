import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SkeletonModule } from 'primeng/skeleton';
import { TooltipModule } from 'primeng/tooltip';
import { ProjectStateModule } from 'src/app/backoffice/tables/project/state/project-state.module';
import { LanguagesModule } from 'src/app/shared/modules/languages.module';
import { PipesModule } from 'src/app/shared/modules/pipes.module';
import { SocialNetworksModule } from '../../components/social-networks/social-networks.module';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';

@NgModule({
  declarations: [ProjectsComponent],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    SocialNetworksModule,
    HttpClientModule,
    SkeletonModule,
    FontAwesomeModule,
    ProjectStateModule,
    PipesModule,
    LanguagesModule,
    TooltipModule,
  ],
  exports: [],
})
export class ProjectsModule {}
