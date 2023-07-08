import { ChangeDetectionStrategy, Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { MessageService, PrimeNGConfig } from 'primeng/api';
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
  @Input() type: 'dropdown' | 'select-button' = 'dropdown';
  @Input() mode: 'simple' | 'complete' = 'simple';

  languages: Language[];
  language: Language;

  constructor(
    private config: PrimeNGConfig,
    private store: Store,
    private translateSrv: TranslateService,
    private messageSrv: MessageService,
  ) {}

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
