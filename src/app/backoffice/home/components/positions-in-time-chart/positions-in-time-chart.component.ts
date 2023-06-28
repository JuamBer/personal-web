import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { ChartData, ChartDataset, ChartOptions } from 'chart.js';
import { ChartModule } from 'primeng/chart';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { PositionStateModule } from 'src/app/backoffice/tables/position/state/position-state.module';
import { positionActions } from 'src/app/backoffice/tables/position/state/position.actions';
import { positionReducer } from 'src/app/backoffice/tables/position/state/position.reducer';
import { LanguagesModule } from 'src/app/shared/modules/languages.module';

@Component({
  selector: 'app-positions-in-time-chart',
  templateUrl: './positions-in-time-chart.component.html',
  styleUrls: ['./positions-in-time-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, LanguagesModule, ChartModule, PositionStateModule],
})
export class PositionsInTimeChartComponent implements OnInit {
  private store = inject(Store);
  private translateSrv = inject(TranslateService);

  chartOptions$: BehaviorSubject<ChartOptions> = new BehaviorSubject<ChartOptions>({});
  chartData$: Observable<ChartData<'bar', any[]>> = this.store.select(positionReducer.getAll).pipe(
    map((positions) => [...positions].sort((a, b) => new Date(a.dateFrom).getTime() - new Date(b.dateFrom).getTime())),
    map((positions) => {
      const datasets: ChartDataset<any, any>[] = [];

      const companies = positions
        .map((position) => position.company)
        .filter((company, index, self) => self.findIndex((c) => c.id === company.id) === index);

      companies.forEach((company) => {
        const companyPositions = positions
          .filter((position) => position.company.id === company.id)
          .sort((a, b) => new Date(a.dateFrom).getTime() - new Date(b.dateFrom).getTime());

        companyPositions.forEach((position) => {
          const dateFrom = new Date(position.dateFrom);
          const dateTo = position.dateTo ? new Date(position.dateTo) : new Date();
          const timeInSeconds = Math.abs(dateTo.getTime() - dateFrom.getTime()) / 1000;
          const timeInYears = timeInSeconds / 31536000;

          datasets.push({
            type: 'bar',
            label: `${company.name} - ${position.name}`,
            data: companies.map((c) => (c.id === company.id ? timeInYears : 0)),
          });
        });
      });

      const res: ChartData<'bar', { key: string; value: number }[]> = {
        labels: companies.map((company) => company.name),
        datasets,
      };
      return res;
    }),
  );

  ngOnInit(): void {
    this.store.dispatch(positionActions.loadAll({}));

    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.translateSrv.get('dashboard.chartTitle').subscribe((chartTitle) => {
      this.chartOptions$.next({
        maintainAspectRatio: false,
        aspectRatio: 0.8,
        plugins: {
          legend: {
            labels: {
              color: textColor,
            },
          },
        },
        scales: {
          x: {
            stacked: true,
            ticks: {
              color: textColorSecondary,
            },
            grid: {
              color: surfaceBorder,
            },
          },
          y: {
            stacked: true,
            ticks: {
              color: textColorSecondary,
            },
            grid: {
              color: surfaceBorder,
            },
          },
        },
        locale: this.translateSrv.currentLang,
      });
    });
  }
}
