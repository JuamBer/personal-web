import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { filter } from 'rxjs/operators';
import { Language } from 'src/app/backoffice/tables/language/models/language.model';
import { publicLanguageReducer } from 'src/app/shared/state/languages/public-language.reducer';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvComponent implements OnInit, AfterViewInit {
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

  downloadCV(language: Language) {
    window.open('https://drive.google.com/file/d/1qDmAqZUd_F5VsvMGbSiUaeHLAvL_aPUf/view?usp=sharing', '_blank');
  }
}
