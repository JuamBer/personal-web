import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { User } from '@supabase/supabase-js';
import { filter } from 'rxjs/operators';
import { AccountState } from 'src/app/shared/state/account/account.reducer';
import { PublicLanguageState } from 'src/app/shared/state/languages/public-language.state';
import * as fromAccount from '../../../../shared/state/account/account.reducer';
import { MainComponent } from '../main/main.component';
@Component({
  selector: 'app-topbar',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  user: User;

  constructor(
    public app: MainComponent,
    private translateSrv: TranslateService,
    private publicLanguageStore: Store<PublicLanguageState>,
    private accountStore: Store<AccountState>,
  ) {}

  ngOnInit(): void {
    this.accountStore
      .select(fromAccount.getUsuario)
      .pipe(filter((i) => !!i))
      .subscribe((user) => (this.user = user));
  }
}
