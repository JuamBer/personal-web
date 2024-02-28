import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, Component, Inject, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormBuilder } from '@angular/forms';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { Observable, map } from 'rxjs';
import { LangService } from 'src/app/shared/services/lang.service';
import { publicLanguageReducer } from 'src/app/shared/state/languages/public-language.reducer';
import { Page } from './models/page.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent implements OnInit, AfterViewInit {
  private store = inject(Store);
  private translateSrv = inject(TranslateService);
  private fb = inject(FormBuilder);
  private langSrv = inject(LangService);

  colorModeFormControl = this.fb.nonNullable.control<boolean>(true);

  language$ = this.store.select(publicLanguageReducer.getOne);

  lang$ = this.langSrv.lang$;
  lang = this.langSrv.lang;

  pages$: Observable<Page[]> = this.lang$.pipe(
    map((lang) => [
      {
        name: this.translateSrv.instant('pages.home.title'),
        routerLink: `/${lang}/home`,
      },
      {
        name: this.translateSrv.instant('pages.projects.title'),
        routerLink: `/${lang}/projects`,
      },
      {
        name: this.translateSrv.instant('pages.certificates.title'),
        routerLink: `/${lang}/certificates`,
      },
    ]),
  );
  pages = toSignal(this.pages$, {
    initialValue: [],
  });

  publicLanguage$ = this.store.select(publicLanguageReducer.getOne);

  // eslint-disable-next-line @typescript-eslint/ban-types
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    this.handleColorModeChange();

    this.publicLanguage$.subscribe((language) => {
      if (language) this.translateSrv.use(language.acronym);
    });
  }

  ngAfterViewInit(): void {
    this.handleColorModeChange();
  }

  handleColorModeChange() {
    if (isPlatformBrowser(this.platformId)) {
      const deviceMode = window.matchMedia('(prefers-color-scheme: dark)');
      this.colorModeFormControl.setValue(!deviceMode.matches);
      this.colorModeFormControl.valueChanges.subscribe((value) => {
        document.body.classList.remove('dark', 'light');
        document.body.classList.add(value ? 'light' : 'dark');
      });
    }
  }

  openNav() {
    const nav = document.getElementById('myNav');
    if (nav) {
      nav.style.width = '100%';
    }
  }

  closeNav() {
    const nav = document.getElementById('myNav');
    if (nav) {
      nav.style.width = '0%';
    }
  }

  get faBars() {
    return faBars;
  }
}
