import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { environment } from '@env/environment';
import { Store } from '@ngrx/store';
import { take } from 'rxjs';
import { publicLanguageActions } from './shared/state/languages/public-language.actions';
import { publicLanguageReducer } from './shared/state/languages/public-language.reducer';

export const appRootTitle = 'Juan Sáez García';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  private store = inject(Store);

  languages$ = this.store.select(publicLanguageReducer.getAll);

  ngOnInit() {
    console.info('Running with configuration: ', environment.name);

    this.store.dispatch(publicLanguageActions.loadAll({}));
    this.languages$.pipe(take(2)).subscribe((languages) => {
      const userLanguage = (navigator.languages ? navigator.languages[0] : navigator.language).split('-')[0];
      const language = languages.find((l) => l.acronym === userLanguage);
      if (language) {
        this.store.dispatch(publicLanguageActions.loadOneByAcronym({ acronym: language.acronym }));
      }
    });
  }
}
