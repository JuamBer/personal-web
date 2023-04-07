import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class LoggedGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean | UrlTree> {
    return this.auth.getCurrentUser().pipe(
      filter((val) => val !== null), // Filter out initial Behavior subject value
      take(1), // Otherwise the Observable doesn't complete!
      map((isAuthenticated) => {
        if (isAuthenticated) {
          return false;
        } else {
          // this.router.navigate(['backoffice']);
          return true;
        }
      }),
    );
  }
}
