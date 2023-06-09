import { ChangeDetectionStrategy, Component, Input, OnInit, ViewEncapsulation, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { PrimeNGConfig } from 'primeng/api';
import { filter, take } from 'rxjs/operators';
import { Language } from 'src/app/backoffice/tables/language/models/language.model';
import { publicLanguageActions } from '../../state/languages/public-language.actions';
import { publicLanguageReducer } from '../../state/languages/public-language.reducer';

@Component({
  selector: 'app-language-select',
  templateUrl: 'language-select.component.html',
  styleUrls: ['language-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class LanguageSelectComponent implements OnInit {
  private config = inject(PrimeNGConfig);
  private store = inject(Store);
  private translateSrv = inject(TranslateService);

  @Input() type: 'dropdown' | 'select-button' = 'dropdown';
  @Input() mode: 'simple' | 'complete' = 'simple';

  languages: Language[];
  language: Language;

  ngOnInit(): void {
    this.store
      .select(publicLanguageReducer.getAll)
      .pipe(filter((i) => i != null))
      .subscribe((languages) => {
        this.languages = languages.filter((language) => (language.active ? true : false));
      });

    this.store
      .select(publicLanguageReducer.getOne)
      .pipe(filter((i) => i != null))
      .subscribe((idioma) => {
        this.language = idioma;
        this.translateSrv.use(idioma.acronym);
        this.translateSrv
          .get('calendar')
          .pipe(take(1))
          .subscribe((res) => this.config.setTranslation(res));
      });
  }

  onLanguageChange() {
    this.store.dispatch(publicLanguageActions.loadOneSuccess({ payload: this.language }));
  }
}
