import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PipesModule } from '@app/shared/modules/pipes.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SkeletonModule } from 'primeng/skeleton';
import { EntityCardComponent } from './entity-card/entity-card.component';
import { GroupTitleComponent } from './group-title/group-title.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/');
}
@NgModule({
  declarations: [HomeComponent, EntityCardComponent, GroupTitleComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,

    SkeletonModule,

    PipesModule,

    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
      isolate: true,
    }),
  ],
  exports: [RouterModule],
})
export class HomeModule {}
