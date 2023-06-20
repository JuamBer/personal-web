import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Naming, NumberMode } from '@app/shared/state/common/common.names';
import { publicLanguageReducer } from '@app/shared/state/languages/public-language.reducer';
import { PublicLanguageState } from '@app/shared/state/languages/public-language.state';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { filter } from 'rxjs/operators';
import { certificateGroupNames } from '../tablas/certificate-groups/state/certificate-group.names';
import { certificateTypeNames } from '../tablas/certificate-types/state/certificate-type.names';

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
    certificateGroupNames.name(Naming.KEBAB_CASE, NumberMode.PLURAL),
    certificateTypeNames.name(Naming.KEBAB_CASE, NumberMode.PLURAL),
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
