import { ChangeDetectionStrategy, Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { MessageService } from 'primeng/api';
import { filter } from 'rxjs/operators';
import { Language } from 'src/app/backoffice/tables/language/models/language.model';
import { publicLanguageActions } from '../../state/languages/public-language.actions';
import { publicLanguageReducer } from '../../state/languages/public-language.reducer';
import { PublicLanguageState } from '../../state/languages/public-language.state';

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
    private publicLanguageStore: Store<PublicLanguageState>,
    private translateSrv: TranslateService,
    private messageSrv: MessageService,
  ) {}

  ngOnInit(): void {
    this.publicLanguageStore
      .select(publicLanguageReducer.getAll)
      .pipe(filter((i) => i != null))
      .subscribe((languages) => {
        this.languages = languages.filter((language) => (language.active ? true : false));
      });

    this.publicLanguageStore
      .select(publicLanguageReducer.getOne)
      .pipe(filter((i) => i != null))
      .subscribe((idioma) => {
        this.language = idioma;
        this.translateSrv.use(idioma.acronym);
        if (idioma.acronym === 'en') {
          this.messageSrv.add({
            life: 1000,
            severity: 'warn',
            summary: 'Incomplete Translations',
            detail: 'Some text entries are waiting to be translated',
          });
        }
      });
  }

  onLanguageChange() {
    this.publicLanguageStore.dispatch(publicLanguageActions.loadOneSuccess({ payload: this.language }));
  }
}
