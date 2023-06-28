import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { ChartData, ChartDataset, ChartOptions } from 'chart.js';
import { ChartModule } from 'primeng/chart';
import { BehaviorSubject, Observable, filter, map } from 'rxjs';
import { CertificateStateModule } from 'src/app/backoffice/tables/certificate/state/certificate-state.module';
import { certificateActions } from 'src/app/backoffice/tables/certificate/state/certificate.actions';
import { certificateReducer } from 'src/app/backoffice/tables/certificate/state/certificate.reducer';
import { LanguagesModule } from 'src/app/shared/modules/languages.module';

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

  chartOptions$: BehaviorSubject<ChartOptions> = new BehaviorSubject<ChartOptions>({});
  chartData$: Observable<ChartData<'bar', any[]>> = this.store.select(certificateReducer.getAll).pipe(
    filter((certificates) => certificates.length > 0),
    map((certificates) => [...certificates].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())),
    map((certificates) => {
      const datasets: ChartDataset<any, any>[] = [];
      const fisrtCertificate = certificates[0];
      const lastCertificate = certificates[certificates.length - 1];

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
          certificates.filter((certificate) => {
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
        label: 'Certificates in Time',
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
}
