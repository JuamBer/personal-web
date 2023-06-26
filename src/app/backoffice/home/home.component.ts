import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { filter } from 'rxjs/operators';
import { Naming, NumberMode } from 'src/app/shared/state/common/common.names';
import { publicLanguageReducer } from 'src/app/shared/state/languages/public-language.reducer';
import { PublicLanguageState } from 'src/app/shared/state/languages/public-language.state';
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
})
export class HomeComponent implements OnInit {
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
  constructor(
    private translateSrv: TranslateService,
    private router: Router,
    private publicLanguageStore: Store<PublicLanguageState>,
  ) {}

  ngOnInit(): void {
    this.publicLanguageStore
      .select(publicLanguageReducer.getOne)
      .pipe(filter((i) => i != null))
      .subscribe((language) => {
        this.translateSrv.use(language.acronym);
      });
  }

  goTo(url: string) {
    this.router.navigate([url]);
  }
}
