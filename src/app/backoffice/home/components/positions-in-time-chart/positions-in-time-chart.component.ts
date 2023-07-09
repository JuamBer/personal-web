import { CommonModule, TitleCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { ChartData, ChartDataset, ChartOptions } from 'chart.js';
import { ChartModule } from 'primeng/chart';
import { Observable, combineLatest, map, startWith } from 'rxjs';
import { Language } from 'src/app/backoffice/tables/language/models/language.model';
import { PositionStateModule } from 'src/app/backoffice/tables/position/state/position-state.module';
import { positionActions } from 'src/app/backoffice/tables/position/state/position.actions';
import { positionReducer } from 'src/app/backoffice/tables/position/state/position.reducer';
import { LanguagesModule } from 'src/app/shared/modules/languages.module';
import { publicLanguageReducer } from 'src/app/shared/state/languages/public-language.reducer';
import { TranslationUtils } from 'src/app/shared/utils/translation.utils';

@Component({
  selector: 'app-positions-in-time-chart',
  templateUrl: './positions-in-time-chart.component.html',
  styleUrls: ['./positions-in-time-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, LanguagesModule, ChartModule, PositionStateModule],
  providers: [TitleCasePipe],
})
export class PositionsInTimeChartComponent implements OnInit {
  private store = inject(Store);
  private translateSrv = inject(TranslateService);
  private titleCasePipe = inject(TitleCasePipe);

  language$: Observable<Language> = this.store.select(publicLanguageReducer.getOne);
  chartOptions$: Observable<ChartOptions> = this.translateSrv.onLangChange.pipe(
    startWith(this.translateSrv.currentLang),
    map(() => ({
      maintainAspectRatio: false,
      aspectRatio: 0.6,
      plugins: {
        legend: {
          labels: {
            color: getComputedStyle(document.documentElement).getPropertyValue('--text-color'),
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
            color: getComputedStyle(document.documentElement).getPropertyValue('--text-color-secondary'),
          },
          grid: {
            color: getComputedStyle(document.documentElement).getPropertyValue('--surface-border'),
          },
          title: {
            display: true,
            text: this.titleCasePipe.transform(this.translateSrv.instant('charts.positionsInTime.xAxis')),
            color: getComputedStyle(document.documentElement).getPropertyValue('--text-color'),
            font: {
              weight: 'normal',
              size: 18,
            },
          },
        },
        y: {
          stacked: true,
          ticks: {
            color: getComputedStyle(document.documentElement).getPropertyValue('--text-color-secondary'),
          },
          grid: {
            color: getComputedStyle(document.documentElement).getPropertyValue('--surface-border'),
          },
          title: {
            display: true,
            text: this.titleCasePipe.transform(this.translateSrv.instant('charts.positionsInTime.yAxis')),
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
  chartData$: Observable<ChartData<'bar', any[]>> = combineLatest([
    this.store.select(positionReducer.getAll),
    this.language$,
  ]).pipe(
    map(([positions, language]) => {
      const positionsSorted = [...positions].sort(
        (a, b) => new Date(a.dateFrom).getTime() - new Date(b.dateFrom).getTime(),
      );
      const datasets: ChartDataset<any, any>[] = [];

      const companies = positionsSorted
        .map((position) => position.company)
        .filter((company, index, self) => self.findIndex((c) => c.id === company.id) === index);

      companies.forEach((company) => {
        const companyPositions = positionsSorted
          .filter((position) => position.company.id === company.id)
          .sort((a, b) => new Date(a.dateFrom).getTime() - new Date(b.dateFrom).getTime());

        companyPositions.forEach((position) => {
          const dateFrom = new Date(position.dateFrom);

          const dateTo = position.dateTo ? new Date(position.dateTo) : new Date();
          const timeInSeconds = Math.abs(dateTo.getTime() - dateFrom.getTime()) / 1000;
          const timeInYears = timeInSeconds / 31536000;

          datasets.push({
            type: 'bar',
            label: `${company.name} - ${this.getTranslation(language.acronym, position.nameTranslations)}`,
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
  }

  get getTranslation() {
    return TranslationUtils.getTranslation;
  }
}
