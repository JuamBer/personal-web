import { Component, OnInit } from '@angular/core';
import { Language } from '@app/backoffice/tablas/languages/models/language.model';
import { publicLanguageActions } from '@app/shared/state/languages/public-language.actions';
import { publicLanguageReducer } from '@app/shared/state/languages/public-language.reducer';
import { PublicLanguageState } from '@app/shared/state/languages/public-language.state';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { MessageService } from 'primeng/api';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-language-select',
  templateUrl: 'language-select.component.html',
  styleUrls: ['language-select.component.scss'],
})
export class LanguageSelectComponent implements OnInit {
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
        this.languages = languages.filter((language) =>
          language.active ? true : false,
        );
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
    this.publicLanguageStore.dispatch(
      publicLanguageActions.loadOneSuccess({ payload: this.language }),
    );
  }
}
