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
  selector: 'app-salary-in-time-chart',
  templateUrl: './salary-in-time-chart.component.html',
  styleUrls: ['./salary-in-time-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, LanguagesModule, ChartModule, PositionStateModule],
})
export class SalaryInTimeChartComponent implements OnInit {
  private store = inject(Store);
  private translateSrv = inject(TranslateService);

  chartOptions$: BehaviorSubject<ChartOptions> = new BehaviorSubject<ChartOptions>({});
  chartData$: Observable<ChartData<'bar', any[]>> = this.store.select(positionReducer.getAll).pipe(
    map((positions) => [...positions].filter((position) => !!position.hourlyWage)),
    map((positions) => [...positions].sort((a, b) => new Date(a.dateFrom).getTime() - new Date(b.dateFrom).getTime())),
    map((positions) => {
      const datasets: ChartDataset<any, any>[] = [];
      const data = [];
      positions.forEach((position, index) => {
        data.push(position.hourlyWage);
      });
      console.log(data);

      datasets.push({
        type: 'line',
        label: 'Salary per hour in time',

        data,
      });
      const res: ChartData<'bar', { key: string; value: number }[]> = {
        labels: positions.map((position) => `${position.company.name} - ${'position.name'}`),
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
        aspectRatio: 0.6,
        plugins: {
          legend: {
            labels: {
              color: textColor,
            },
          },
        },
        scales: {
          x: {
            ticks: {
              color: textColorSecondary,
            },
            grid: {
              color: surfaceBorder,
            },
          },
          y: {
            ticks: {
              color: textColorSecondary,
            },
            grid: {
              color: surfaceBorder,
            },
          },
        },
      });
    });
  }
}
