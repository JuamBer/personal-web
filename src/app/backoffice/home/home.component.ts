import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonNames } from '@app/shared/state/common/common.names';
import { publicLanguageReducer } from '@app/shared/state/languages/public-language.reducer';
import { PublicLanguageState } from '@app/shared/state/languages/public-language.state';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { filter } from 'rxjs/operators';
import { certificateGroupNames } from '../tablas/certificate-groups/state/certificate-group.names';
import { certificateTypeNames } from '../tablas/certificate-types/state/certificate-type.names';
import { certificateNames } from '../tablas/certificates/state/certificate.names';
import { companyNames } from '../tablas/companies/state/company.names';
import { curriculumNames } from '../tablas/curriculums/state/curriculum.names';
import { languageNames } from '../tablas/languages/state/language.names';
import { mountNames } from '../tablas/mounts/state/mount.names';
import { positionNames } from '../tablas/positions/state/position.names';
import { proyectNames } from '../tablas/proyects/state/proyect.names';
import { skillTypeNames } from '../tablas/skill-types/state/skill-type.names';
import { skillNames } from '../tablas/skills/state/skill.names';

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
  names: CommonNames[] = [
    certificateGroupNames,
    certificateTypeNames,
    certificateNames,
    companyNames,
    curriculumNames,
    languageNames,
    mountNames,
    positionNames,
    proyectNames,
    skillTypeNames,
    skillNames,
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
