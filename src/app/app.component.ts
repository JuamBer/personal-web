import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, Component, Inject, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { combineLatest, distinctUntilChanged, filter, shareReplay, skip, tap } from 'rxjs';
import { configuration } from 'src/assets/configuration';
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
  private router = inject(Router);

  mode: 'dark' | 'light' = 'light';

  languages$ = this.store.select(publicLanguageReducer.getAll);
  selectedLanguage$ = this.store.select(publicLanguageReducer.getOne).pipe(
    distinctUntilChanged((a, b) => a?.acronym === b?.acronym),
    shareReplay(1),
  );
  selectedLanguage = toSignal(this.selectedLanguage$);

  previousLanguage: string | undefined;

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
    this.store.dispatch(publicLanguageActions.loadAll(addActionId({ feedback: new Set([ActionStatus.ERROR]) })));

    combineLatest([this.selectedLanguage$, this.languages$, this.router.events]).subscribe(
      ([selectedLanguage, languages]) => {
        const urlLanguage: string | undefined = this.router.url.split('/')[1] || undefined;
        let userLanguage: string | undefined = undefined;
        let languageToLoad: string | undefined = undefined;

        if (isPlatformBrowser(this.platformId)) {
          userLanguage = (navigator.languages ? navigator.languages[0] : navigator.language).split('-')[0];

          if (urlLanguage) {
            languageToLoad = urlLanguage;
          } else if (userLanguage) {
            languageToLoad = userLanguage;
          } else {
            languageToLoad = configuration.defaultLanguage;
          }

          const language = languages.find((l) => l.acronym === languageToLoad);
          if (language && selectedLanguage?.acronym !== language.acronym) {
            this.store.dispatch(publicLanguageActions.loadOneByAcronym({ acronym: language.acronym }));
          }
        } else {
          if (urlLanguage) {
            languageToLoad = urlLanguage;
          } else {
            languageToLoad = configuration.defaultLanguage;
          }

          if (languageToLoad && selectedLanguage?.acronym !== languageToLoad) {
            this.store.dispatch(publicLanguageActions.loadOneByAcronym({ acronym: languageToLoad }));
          }
        }
      },
    );

    this.selectedLanguage$
      .pipe(
        filter(
          (selectedLanguage) => selectedLanguage !== undefined && selectedLanguage?.acronym !== this.previousLanguage,
        ),
        tap((selectedLanguage) => {
          this.previousLanguage = selectedLanguage?.acronym;
        }),
        skip(1),
      )
      .subscribe((selectedLanguage) => {
        if (!selectedLanguage) {
          return;
        }

        const urlLanguage: string | undefined = this.router.url.split('/')[1] || undefined;

        if (urlLanguage !== selectedLanguage?.acronym) {
          this.router.navigate([selectedLanguage.acronym, ...this.router.url.split('/').slice(3)]);
        }

        if (isPlatformBrowser(this.platformId)) {
          document.documentElement.lang = selectedLanguage.acronym;
        }
      });
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
