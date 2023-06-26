import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '@env/environment';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { PrimeNGConfig } from 'primeng/api';
import { Subscription } from 'rxjs';
import { AuthService } from './shared/services/auth.service';
import { AppState } from './shared/state/account/account.reducer';
import { PublicLanguageState } from './shared/state/languages/public-language.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];

  constructor(
    private config: PrimeNGConfig,
    private translateSrv: TranslateService,
    private publicLanguageStore: Store<PublicLanguageState>,
    private router: Router,
    // private authService: AuthService,
    private supabaseSrv: AuthService,

    private accountStore: Store<AppState>,
  ) {}
  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  ngOnInit() {
    console.log('Corriendo con la configuración: ', environment.name);

    this.supabaseSrv.getCurrentUser().subscribe((user) => {
      // console.log('getCurrentUser(): ', user);
      // if (typeof user != 'boolean') {
      //   this.accountStore.dispatch(
      //     AccountActions.loadUsuarioSuccess({ payload: user }),
      //   );
      // }
    });
    this.supabaseSrv.authChanges((_, session) => {
      // console.log('authChanges(): ', session);
      // this.accountStore.dispatch(
      //   AccountActions.loadUsuarioSuccess({ payload: session.user }),
      // );
    });
  }
}
