import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { ChartData, ChartDataset, ChartOptions } from 'chart.js';
import { ChartModule } from 'primeng/chart';
import { BehaviorSubject, Observable, combineLatest, map, switchMap } from 'rxjs';
import { Language } from 'src/app/backoffice/tables/language/models/language.model';
import { Position } from 'src/app/backoffice/tables/position/models/position.model';
import { PositionStateModule } from 'src/app/backoffice/tables/position/state/position-state.module';
import { positionActions } from 'src/app/backoffice/tables/position/state/position.actions';
import { positionReducer } from 'src/app/backoffice/tables/position/state/position.reducer';
import { LanguagesModule } from 'src/app/shared/modules/languages.module';
import { publicLanguageReducer } from 'src/app/shared/state/languages/public-language.reducer';
import { TranslationUtils } from 'src/app/shared/utils/translation.utils';

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

  language$: Observable<Language> = this.store.select(publicLanguageReducer.getOne);
  chartOptions$: BehaviorSubject<ChartOptions> = new BehaviorSubject<ChartOptions>({});
  chartData$: Observable<ChartData<'bar', any[]>> = combineLatest([
    this.store.select(positionReducer.getAll),
    this.language$,
  ]).pipe(
    switchMap(([positions, language]) =>
      this.translateSrv
        .get('charts.salaryInTime.title')
        .pipe(map((chartTitle: string) => [positions, language, chartTitle] as [Position[], Language, string])),
    ),
    map(([positions, language, chartTitle]) => {
      const positionsFiltered = [...positions].filter((position) => !!position.hourlyWage);
      const positionsSorted = positionsFiltered.sort(
        (a, b) => new Date(a.dateFrom).getTime() - new Date(b.dateFrom).getTime(),
      );

      const datasets: ChartDataset<any, any>[] = [];
      const data = [];
      positionsSorted.forEach((position, index) => {
        data.push(position.hourlyWage);
      });
      datasets.push({
        type: 'line',
        label: chartTitle,
        data,
      });
      const res: ChartData<'bar', { key: string; value: number }[]> = {
        labels: positionsSorted.map(
          (position) =>
            `${position.company.name} - ${this.getTranslation(language.acronym, position.nameTranslations)}`,
        ),
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

  get getTranslation() {
    return TranslationUtils.getTranslation;
  }
}
