import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { publicLanguageReducer } from 'src/app/shared/state/languages/public-language.reducer';
import { PublicLanguageState } from 'src/app/shared/state/languages/public-language.state';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  pages: any[] = [];

  constructor(private publicLanguageStore: Store<PublicLanguageState>, private translateSrv: TranslateService) {}

  ngOnInit(): void {
    this.publicLanguageStore.select(publicLanguageReducer.getOne).subscribe((language) => {
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
}
