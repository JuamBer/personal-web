/* eslint-disable @typescript-eslint/ban-types */
import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { LangService } from '../services/lang.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  lang$ = this.langSrv.lang$;
  lang = this.langSrv.lang;

  constructor(
    private langSrv: LangService,
    private auth: AuthService,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object,
  ) {}

  canActivate(): Observable<boolean | UrlTree> {
    if (!isPlatformBrowser(this.platformId)) {
      this.router.navigate([this.lang(), 'login']);
    }

    return this.auth.getCurrentUser().pipe(
      take(1),
      map((isAuthenticated) => {
        if (isAuthenticated) {
          return true;
        } else {
          this.router.navigate([`/${this.lang()}/login`]);
          return false;
        }
      }),
    );
  }
}
