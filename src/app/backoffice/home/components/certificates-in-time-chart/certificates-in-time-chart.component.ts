import { CommonModule, TitleCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { ChartData, ChartDataset, ChartOptions } from 'chart.js';
import { ChartModule } from 'primeng/chart';
import { Observable, combineLatest, filter, map, startWith } from 'rxjs';
import { CertificateStateModule } from 'src/app/backoffice/tables/certificate/state/certificate-state.module';
import { certificateActions } from 'src/app/backoffice/tables/certificate/state/certificate.actions';
import { certificateReducer } from 'src/app/backoffice/tables/certificate/state/certificate.reducer';
import { Language } from 'src/app/backoffice/tables/language/models/language.model';
import { TranslationProvider } from 'src/app/shared/classes/translation';
import { LanguagesModule } from 'src/app/shared/modules/languages.module';
import { publicLanguageReducer } from 'src/app/shared/state/languages/public-language.reducer';

@Component({
  selector: 'app-certificates-in-time-chart',
  templateUrl: './certificates-in-time-chart.component.html',
  styleUrls: ['./certificates-in-time-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, LanguagesModule, ChartModule, CertificateStateModule],
  providers: [TitleCasePipe],
})
export class CertificatesInTimeChartComponent extends TranslationProvider implements OnInit {
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
          display: false,
        },
        title: {
          display: true,
          text: this.titleCasePipe.transform(this.translateSrv.instant('charts.certificatesInTime.title')),
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
            text: this.titleCasePipe.transform(this.translateSrv.instant('charts.certificatesInTime.xAxis')),
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
            text: this.titleCasePipe.transform(this.translateSrv.instant('charts.certificatesInTime.yAxis')),
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
    this.store.select(certificateReducer.getAll),
    this.language$,
  ]).pipe(
    filter(([certificates, language]) => certificates.length > 0),
    map(([certificates, language]) => {
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
  }
}
