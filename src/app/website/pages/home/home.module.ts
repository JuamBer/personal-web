import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SkeletonModule } from 'primeng/skeleton';
import { LanguageStateModule } from 'src/app/backoffice/tables/language/state/language-state.module';
import { PositionStateModule } from 'src/app/backoffice/tables/position/state/position-state.module';
import { SkillTypeStateModule } from 'src/app/backoffice/tables/skill-type/state/skill-type-state.module';
import { SkillStateModule } from 'src/app/backoffice/tables/skill/state/skill-state.module';
import { GenericErrorModule } from 'src/app/shared/components/generic-error/generic-error.module';
import { DirectivesModule } from 'src/app/shared/modules/directives.module';
import { LanguagesModule } from 'src/app/shared/modules/languages.module';
import { PipesModule } from 'src/app/shared/modules/pipes.module';
import { CvComponent } from '../../components/cv/cv.component';
import { ExperienceComponent } from '../../components/experience/experience.component';
import { SocialNetworksModule } from '../../components/social-networks/social-networks.module';
import { ToolsComponent } from '../../components/tools/tools.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent, ToolsComponent, ExperienceComponent, CvComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SocialNetworksModule,
    HttpClientModule,
    SkillTypeStateModule,
    SkillStateModule,
    PositionStateModule,
    LanguagesModule,
    LanguageStateModule,
    SkeletonModule,
    DirectivesModule,
    GenericErrorModule,
    FontAwesomeModule,
    PipesModule,
  ],
  exports: [],
})
export class HomeModule {}
