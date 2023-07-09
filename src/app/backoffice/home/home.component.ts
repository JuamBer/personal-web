import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { Naming, NumberMode } from 'src/app/shared/state/common/common.names';
import { certificateGroupNames } from '../tables/certificate-group/state/certificate-group.names';
import { certificateTypeNames } from '../tables/certificate-type/state/certificate-type.names';
import { certificateNames } from '../tables/certificate/state/certificate.names';
import { companyNames } from '../tables/company/state/company.names';
import { languageNames } from '../tables/language/state/language.names';
import { positionNames } from '../tables/position/state/position.names';
import { skillTypeNames } from '../tables/skill-type/state/skill-type.names';
import { skillNames } from '../tables/skill/state/skill.names';

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
    languageNames.name(Naming.CAMEL_CASE, NumberMode.SINGULAR),
    positionNames.name(Naming.CAMEL_CASE, NumberMode.SINGULAR),
    skillNames.name(Naming.CAMEL_CASE, NumberMode.SINGULAR),
    skillTypeNames.name(Naming.CAMEL_CASE, NumberMode.SINGULAR),
  ];

  urls: string[] = [
    certificateGroupNames.name(Naming.KEBAB_CASE, NumberMode.PLURAL),
    certificateTypeNames.name(Naming.KEBAB_CASE, NumberMode.PLURAL),
    certificateNames.name(Naming.KEBAB_CASE, NumberMode.PLURAL),
    companyNames.name(Naming.KEBAB_CASE, NumberMode.PLURAL),
    languageNames.name(Naming.KEBAB_CASE, NumberMode.PLURAL),
    positionNames.name(Naming.KEBAB_CASE, NumberMode.PLURAL),
    skillNames.name(Naming.KEBAB_CASE, NumberMode.PLURAL),
    skillTypeNames.name(Naming.KEBAB_CASE, NumberMode.PLURAL),
  ];

  ngOnInit(): void {}

  goTo(url: string) {
    this.router.navigate([url]);
  }
}
