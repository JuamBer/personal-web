import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ChartModule } from 'primeng/chart';
import { SkeletonModule } from 'primeng/skeleton';
import { LanguagesModule } from 'src/app/shared/modules/languages.module';
import { PipesModule } from 'src/app/shared/modules/pipes.module';
import { CertificatesInTimeChartComponent } from './components/certificates-in-time-chart/certificates-in-time-chart.component';
import { PositionsInTimeChartComponent } from './components/positions-in-time-chart/positions-in-time-chart.component';
import { SalaryInTimeChartComponent } from './components/salary-in-time-chart/salary-in-time-chart.component';
import { EntityCardComponent } from './entity-card/entity-card.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent, EntityCardComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SkeletonModule,
    PipesModule,
    LanguagesModule,
    ChartModule,
    PositionsInTimeChartComponent,
    CertificatesInTimeChartComponent,
    SalaryInTimeChartComponent,
  ],
  exports: [RouterModule],
})
export class HomeModule {}
