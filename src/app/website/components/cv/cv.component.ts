import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { filter } from 'rxjs/operators';
import { Curriculum } from 'src/app/backoffice/tables/curriculum/models/curriculum.model';
import { Language } from 'src/app/backoffice/tables/language/models/language.model';
import { publicLanguageReducer } from 'src/app/shared/state/languages/public-language.reducer';
import { CVService } from './cv.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvComponent implements OnInit, AfterViewInit {
  private cvService = inject(CVService);
  private translateSrv = inject(TranslateService);
  private store = inject(Store);

  language!: Language;

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.store
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
