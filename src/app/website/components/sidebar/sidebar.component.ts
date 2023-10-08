import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { publicLanguageReducer } from 'src/app/shared/state/languages/public-language.reducer';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent implements OnInit {
  private store = inject(Store);
  private translateSrv = inject(TranslateService);

  pages: any[] = [];

  ngOnInit(): void {
    this.store.select(publicLanguageReducer.getOne).subscribe((language) => {
      if (language) this.translateSrv.use(language.acronym);
    });

    this.translateSrv.onLangChange.subscribe((lang) => {
      this.loadPage();
    });
  }

  loadPage() {
    this.pages = [
      {
        name: this.translateSrv.instant('pages.home'),
        page: 'home',
      },
      {
        name: this.translateSrv.instant('pages.certificates'),
        page: 'certificates',
      },
    ];
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
    return faBars
  }
}
