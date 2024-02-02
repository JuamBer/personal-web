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
import { addActionId } from 'src/app/shared/state/common/common.actions';
import { publicLanguageReducer } from 'src/app/shared/state/languages/public-language.reducer';

@Component({
  selector: 'app-positions-in-time-chart',
  templateUrl: './positions-in-time-chart.component.html',
  styleUrls: ['./positions-in-time-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, LanguagesModule, ChartModule, PositionStateModule],
  providers: [TitleCasePipe],
})
export class PositionsInTimeChartComponent extends TranslationProvider implements OnInit {
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
          labels: {
            color: 'var(--text-color)',
          },
        },
        title: {
          display: true,
          text: this.titleCasePipe.transform(this.translateSrv.instant('charts.positionsInTime.title')),
          font: {
            weight: 'normal',
            size: 18,
          },
        },
      },
      scales: {
        x: {
          stacked: true,
          ticks: {
            color: 'var(--text-color-secondary)',
          },
          grid: {
            color: 'var(--surface-border)',
          },
          title: {
            display: true,
            text: this.titleCasePipe.transform(this.translateSrv.instant('charts.positionsInTime.xAxis')),
            color: 'var(--text-color)',
            font: {
              weight: 'normal',
              size: 18,
            },
          },
        },
        y: {
          stacked: true,
          ticks: {
            color: 'var(--text-color-secondary)',
          },
          grid: {
            color: 'var(--surface-border)',
          },
          title: {
            display: true,
            text: this.titleCasePipe.transform(this.translateSrv.instant('charts.positionsInTime.yAxis')),
            color: 'var(--text-color)',
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
      const positionsSorted = [...positions].sort((a, b) => a.dateFrom.getTime() - b.dateFrom.getTime());
      const datasets: ChartDataset<any, any>[] = [];

      const companies = positionsSorted
        .map((position) => position.company)
        .filter((company, index, self) => self.findIndex((c) => c && company && c.id === company.id) === index);

      companies.forEach((company) => {
        const companyPositions = positionsSorted
          .filter((position) => position.company && position.company.id === company?.id)
          .sort((a, b) => a.dateFrom.getTime() - b.dateFrom.getTime());

        companyPositions.forEach((position) => {
          const dateFrom = position.dateFrom;

          const dateTo = position.dateTo ? new Date() : new Date();
          const timeInSeconds = Math.abs(dateTo.getTime() - dateFrom.getTime()) / 1000;
          const timeInYears = timeInSeconds / 31536000;

          datasets.push({
            type: 'bar',
            label: `${company?.name} - ${this.getTranslation(language?.acronym, position?.nameTranslations)}`,
            data: companies.map((c) => (c && c.id === company?.id ? timeInYears : 0)),
          });
        });
      });

      const res: ChartData<'bar', { key: string; value: number }[]> = {
        labels: companies.map((company) => company?.name),
        datasets,
      };
      return res;
    }),
  );
  chartData = toSignal(this.chartData$);

  ngOnInit() {
    this.store.dispatch(positionActions.loadAll(addActionId({})));
  }
}
