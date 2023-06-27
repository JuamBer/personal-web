import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { filter } from 'rxjs/operators';
import { Naming, NumberMode } from 'src/app/shared/state/common/common.names';
import { publicLanguageReducer } from 'src/app/shared/state/languages/public-language.reducer';
import { certificateGroupNames } from '../tables/certificate-group/state/certificate-group.names';
import { certificateTypeNames } from '../tables/certificate-type/state/certificate-type.names';
import { certificateNames } from '../tables/certificate/state/certificate.names';
import { companyNames } from '../tables/company/state/company.names';
import { curriculumNames } from '../tables/curriculum/state/curriculum.names';
import { languageNames } from '../tables/language/state/language.names';

export interface Menu {
  name: string;
  icon: string;
  route: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  private translateSrv = inject(TranslateService);
  private router = inject(Router);
  private store = inject(Store);

  names: string[] = [
    certificateGroupNames.name(Naming.CAMEL_CASE, NumberMode.SINGULAR),
    certificateTypeNames.name(Naming.CAMEL_CASE, NumberMode.SINGULAR),
    certificateNames.name(Naming.CAMEL_CASE, NumberMode.SINGULAR),
    companyNames.name(Naming.CAMEL_CASE, NumberMode.SINGULAR),
    curriculumNames.name(Naming.CAMEL_CASE, NumberMode.SINGULAR),
    languageNames.name(Naming.CAMEL_CASE, NumberMode.SINGULAR),
  ];

  urls: string[] = [
    certificateGroupNames.name(Naming.KEBAB_CASE, NumberMode.PLURAL),
    certificateTypeNames.name(Naming.KEBAB_CASE, NumberMode.PLURAL),
    certificateNames.name(Naming.KEBAB_CASE, NumberMode.PLURAL),
    companyNames.name(Naming.KEBAB_CASE, NumberMode.PLURAL),
    curriculumNames.name(Naming.KEBAB_CASE, NumberMode.PLURAL),
    languageNames.name(Naming.KEBAB_CASE, NumberMode.PLURAL),
  ];

  data: any;
  options: any;

  ngOnInit(): void {
    this.store
      .select(publicLanguageReducer.getOne)
      .pipe(filter((i) => i != null))
      .subscribe((language) => {
        this.translateSrv.use(language.acronym);
      });

    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Dataset 1',
          fill: false,
          borderColor: documentStyle.getPropertyValue('--blue-500'),
          yAxisID: 'y',
          tension: 0.4,
          data: [65, 59, 80, 81, 56, 55, 10],
        },
        {
          label: 'Dataset 2',
          fill: false,
          borderColor: documentStyle.getPropertyValue('--green-500'),
          yAxisID: 'y1',
          tension: 0.4,
          data: [28, 48, 40, 19, 86, 27, 90],
        },
      ],
    };

    this.options = {
      stacked: false,
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
          type: 'linear',
          display: true,
          position: 'left',
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
          },
        },
        y1: {
          type: 'linear',
          display: true,
          position: 'right',
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            drawOnChartArea: false,
            color: surfaceBorder,
          },
        },
      },
    };
  }

  goTo(url: string) {
    this.router.navigate([url]);
  }
}
