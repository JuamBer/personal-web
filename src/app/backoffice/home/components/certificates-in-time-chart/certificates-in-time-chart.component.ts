import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { ChartData, ChartDataset, ChartOptions } from 'chart.js';
import { ChartModule } from 'primeng/chart';
import { BehaviorSubject, Observable, combineLatest, filter, map, switchMap } from 'rxjs';
import { Certificate } from 'src/app/backoffice/tables/certificate/models/certificate.model';
import { CertificateStateModule } from 'src/app/backoffice/tables/certificate/state/certificate-state.module';
import { certificateActions } from 'src/app/backoffice/tables/certificate/state/certificate.actions';
import { certificateReducer } from 'src/app/backoffice/tables/certificate/state/certificate.reducer';
import { Language } from 'src/app/backoffice/tables/language/models/language.model';
import { LanguagesModule } from 'src/app/shared/modules/languages.module';
import { publicLanguageReducer } from 'src/app/shared/state/languages/public-language.reducer';
import { TranslationUtils } from 'src/app/shared/utils/translation.utils';

@Component({
  selector: 'app-certificates-in-time-chart',
  templateUrl: './certificates-in-time-chart.component.html',
  styleUrls: ['./certificates-in-time-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, LanguagesModule, ChartModule, CertificateStateModule],
})
export class CertificatesInTimeChartComponent implements OnInit {
  private store = inject(Store);
  private translateSrv = inject(TranslateService);

  language$: Observable<Language> = this.store.select(publicLanguageReducer.getOne);
  chartOptions$: BehaviorSubject<ChartOptions> = new BehaviorSubject<ChartOptions>({});
  chartData$: Observable<ChartData<'bar', any[]>> = combineLatest([
    this.store.select(certificateReducer.getAll),
    this.language$,
  ]).pipe(
    filter(([certificates, language]) => certificates.length > 0),
    switchMap(([certificates, language]) =>
      this.translateSrv
        .get('charts.certificatesInTime.title')
        .pipe(map((chartTitle: string) => [certificates, language, chartTitle] as [Certificate[], Language, string])),
    ),
    map(([certificates, language, chartTitle]) => {
      const certificatesSorted = [...certificates].sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
      );
      const datasets: ChartDataset<any, any>[] = [];
      const fisrtCertificate = certificatesSorted[0];
      const lastCertificate = certificatesSorted[certificatesSorted.length - 1];

      const labels: string[] = [];
      const labelsData: any[] = [];
      const firstCertificateDate = new Date(fisrtCertificate.date);
      const lastCertificateDate = new Date(lastCertificate.date);
      for (let d = firstCertificateDate; d <= lastCertificateDate; d.setMonth(d.getMonth() + 1)) {
        labels.push(`${d.getMonth() + 1}/${d.getFullYear()}`);
        labelsData.push({
          key: `${d.getMonth() + 1}/${d.getFullYear()}`,
          year: d.getFullYear(),
          month: d.getMonth() + 1,
        });
      }
      let aux = 0;
      const data = [];
      labelsData.forEach((labelData) => {
        const certificatesPerMonth =
          aux +
          certificatesSorted.filter((certificate) => {
            const certificateDate = new Date(certificate.date);
            return (
              certificateDate.getFullYear() === labelData.year && certificateDate.getMonth() + 1 === labelData.month
            );
          }).length;
        aux = certificatesPerMonth;
        data.push(certificatesPerMonth);
      });
      datasets.push({
        type: 'line',
        label: chartTitle,
        data,
      });

      const res: ChartData<'bar', { key: string; value: number }[]> = {
        labels,
        datasets,
      };
      return res;
    }),
  );

  ngOnInit(): void {
    this.store.dispatch(certificateActions.loadAll({}));

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
