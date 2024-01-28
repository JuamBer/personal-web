/* eslint-disable @typescript-eslint/no-explicit-any */
import { CommonModule, TitleCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { ChartData, ChartDataset, ChartOptions } from 'chart.js';
import { ChartModule } from 'primeng/chart';
import { Observable, combineLatest, map, startWith } from 'rxjs';
import { PositionStateModule } from 'src/app/backoffice/tables/position/state/position-state.module';
import { positionActions } from 'src/app/backoffice/tables/position/state/position.actions';
import { positionReducer } from 'src/app/backoffice/tables/position/state/position.reducer';
import { TranslationProvider } from 'src/app/shared/models/translation-provider.model';
import { LanguagesModule } from 'src/app/shared/modules/languages.module';
import { publicLanguageReducer } from 'src/app/shared/state/languages/public-language.reducer';

@Component({
  selector: 'app-salary-in-time-chart',
  templateUrl: './salary-in-time-chart.component.html',
  styleUrls: ['./salary-in-time-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, LanguagesModule, ChartModule, PositionStateModule],
  providers: [TitleCasePipe],
})
export class SalaryInTimeChartComponent extends TranslationProvider implements OnInit {
  private store = inject(Store);
  private translateSrv = inject(TranslateService);
  private titleCasePipe = inject(TitleCasePipe);

  language$ = this.store.select(publicLanguageReducer.getOne);
  chartOptions$: Observable<ChartOptions> = this.translateSrv.onLangChange.pipe(
    startWith(this.translateSrv.currentLang),
    map(() => ({
      maintainAspectRatio: false,
      aspectRatio: 0.6,
      plugins: {
        legend: {
          display: false,
        },
        title: {
          display: true,
          text: this.titleCasePipe.transform(this.translateSrv.instant('charts.salaryInTime.title')),
          font: {
            weight: 'normal',
            size: 18,
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: getComputedStyle(document.documentElement).getPropertyValue('--text-color-secondary'),
          },
          grid: {
            color: getComputedStyle(document.documentElement).getPropertyValue('--surface-border'),
          },
          title: {
            display: true,
            text: this.titleCasePipe.transform(this.translateSrv.instant('charts.salaryInTime.xAxis')),
            color: getComputedStyle(document.documentElement).getPropertyValue('--text-color'),
            font: {
              weight: 'normal',
              size: 18,
            },
          },
        },
        y: {
          ticks: {
            color: getComputedStyle(document.documentElement).getPropertyValue('--text-color-secondary'),
          },
          grid: {
            color: getComputedStyle(document.documentElement).getPropertyValue('--surface-border'),
          },
          title: {
            display: true,
            text: this.titleCasePipe.transform(this.translateSrv.instant('charts.salaryInTime.yAxis')),
            color: getComputedStyle(document.documentElement).getPropertyValue('--text-color'),
            font: {
              weight: 'normal',
              size: 18,
            },
          },
        },
      },
    })),
  );
  chartOptions = toSignal(this.chartOptions$);

  chartData$: Observable<ChartData<'bar', any[]>> = combineLatest([
    this.store.select(positionReducer.getAll),
    this.language$,
  ]).pipe(
    map(([positions, language]) => {
      const positionsFiltered = [...positions].filter((position) => !!position.hourlyWage);
      const positionsSorted = positionsFiltered.sort(
        (a, b) => new Date(a.dateFrom).getTime() - new Date(b.dateFrom).getTime(),
      );

      const datasets: ChartDataset<any, any>[] = [];
      const data: any[] = [];
      positionsSorted.forEach((position) => {
        data.push(position.hourlyWage);
      });
      datasets.push({
        type: 'line',
        data,
      });
      const res: ChartData<'bar', { key: string; value: number }[]> = {
        labels: positionsSorted.map(
          (position) =>
            `${position.company.name} - ${this.getTranslation(language?.acronym, position?.nameTranslations)}`,
        ),
        datasets,
      };
      return res;
    }),
  );
  chartData = toSignal(this.chartData$);

  ngOnInit() {
    this.store.dispatch(positionActions.loadAll({}));
  }
}
