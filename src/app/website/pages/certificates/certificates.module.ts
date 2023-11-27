import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { SkeletonModule } from 'primeng/skeleton';
import { GenericErrorModule } from 'src/app/shared/components/generic-error/generic-error.module';
import { DirectivesModule } from 'src/app/shared/modules/directives.module';
import { PipesModule } from 'src/app/shared/modules/pipes.module';
import { SwiperModule } from 'swiper/angular';
import { CertificatesRoutingModule } from './certificates-routing.module';
import { CertificatesComponent } from './certificates.component';

@NgModule({
  declarations: [CertificatesComponent],
  imports: [
    CommonModule,
    CertificatesRoutingModule,
    PipesModule,
    SkeletonModule,
    SwiperModule,
    DirectivesModule,
    TranslateModule,
    GenericErrorModule,
  ],
})
export class CertificatesModule {}
