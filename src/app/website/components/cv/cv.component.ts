import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Curriculum } from '@app/backoffice/tables/curriculum/models/curriculum.model';
import { Language } from '@app/backoffice/tables/language/models/language.model';
import { publicLanguageReducer } from '@app/shared/state/languages/public-language.reducer';
import { PublicLanguageState } from '@app/shared/state/languages/public-language.state';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { filter } from 'rxjs/operators';
import { CVService } from './cv.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss'],
})
export class CvComponent implements OnInit, AfterViewInit {
  language!: Language;

  constructor(
    private cvService: CVService,
    private translateSrv: TranslateService,
    private publicLanguageStore: Store<PublicLanguageState>,
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.publicLanguageStore
      .select(publicLanguageReducer.getOne)
      .pipe(filter((i) => !!i))
      .subscribe((language) => {
        if (language) this.language = language;
        if (language) this.translateSrv.use(language.acronym);
      });
  }

  async downloadCV(language: Language) {
    const cv: Curriculum = await this.cvService.getCV(language);
    window.open(cv.pdf, '_blank');
  }
}
