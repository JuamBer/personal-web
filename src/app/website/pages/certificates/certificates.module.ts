import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PipesModule } from '@app/shared/modules/pipes.module';
import { SkeletonModule } from 'primeng/skeleton';
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
  ],
})
export class CertificatesModule {}
