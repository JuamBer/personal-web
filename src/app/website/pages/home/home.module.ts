import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { LanguageStateModule } from '@app/backoffice/tables/language/state/language-state.module';
import { PositionStateModule } from '@app/backoffice/tables/position/state/position-state.module';
import { SkillTypeStateModule } from '@app/backoffice/tables/skill-type/state/skill-type-state.module';
import { SkillStateModule } from '@app/backoffice/tables/skill/state/skill-state.module';
import { LanguagesModule } from '@app/shared/modules/languages.module';
import { SkeletonModule } from 'primeng/skeleton';
import { CvComponent } from '../../components/cv/cv.component';
import { ExperienceComponent } from '../../components/experience/experience.component';
import { RRSSModule } from '../../components/rrss/rrss.module';
import { ToolsComponent } from '../../components/tools/tools.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent, ToolsComponent, ExperienceComponent, CvComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    RRSSModule,
    HttpClientModule,

    SkillTypeStateModule,
    SkillStateModule,
    PositionStateModule,
    LanguagesModule,
    LanguageStateModule,
    SkeletonModule,
  ],
  exports: [],
})
export class HomeModule {}
