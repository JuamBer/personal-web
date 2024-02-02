import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, Component, Inject, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { take } from 'rxjs';
import { ActionStatus } from './shared/state/common/common-state';
import { addActionId } from './shared/state/common/common.actions';
import { publicLanguageActions } from './shared/state/languages/public-language.actions';
import { publicLanguageReducer } from './shared/state/languages/public-language.reducer';

export const appRootTitle = 'Juan Sáez García';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit, AfterViewInit {
  private store = inject(Store);

  mode: 'dark' | 'light' = 'light';

  languages$ = this.store.select(publicLanguageReducer.getAll);

  // eslint-disable-next-line @typescript-eslint/ban-types
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    this.handleLanguage();
    this.handleColorMode();
  }

  ngAfterViewInit() {
    this.handleLanguage();
    this.handleColorMode();
  }

  handleLanguage() {
    if (isPlatformBrowser(this.platformId)) {
      this.store.dispatch(publicLanguageActions.loadAll(addActionId({ feedback: new Set([ActionStatus.ERROR]) })));
      this.languages$.pipe(take(2)).subscribe((languages) => {
        const userLanguage = (navigator.languages ? navigator.languages[0] : navigator.language).split('-')[0];
        const language = languages.find((l) => l.acronym === userLanguage);
        if (language) {
          this.store.dispatch(publicLanguageActions.loadOneByAcronym({ acronym: language.acronym }));
        }
      });
    } else {
      this.store.dispatch(publicLanguageActions.loadAll(addActionId({ feedback: new Set([ActionStatus.ERROR]) })));
      this.languages$.pipe(take(2)).subscribe(() => {
        this.store.dispatch(publicLanguageActions.loadOneByAcronym({ acronym: 'es' }));
      });
    }
  }

  handleColorMode() {
    if (isPlatformBrowser(this.platformId)) {
      const deviceMode = window.matchMedia('(prefers-color-scheme: dark)');
      this.mode = deviceMode.matches ? 'dark' : 'light';
      document.body.classList.remove('dark', 'light');
      document.body.classList.add(this.mode);
    }
  }
}
