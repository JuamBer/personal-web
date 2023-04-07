import {
HttpEvent,
HttpHandler,
HttpInterceptor,
HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { publicLanguageReducer } from '@app/shared/state/languages/public-language.reducer';
import { PublicLanguageState } from '@app/shared/state/languages/public-language.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { switchMap,take } from 'rxjs/operators';

@Injectable()
export class LanguageInterceptor implements HttpInterceptor {
  constructor(private publicLanguageStore: Store<PublicLanguageState>) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    return next.handle(request);
    if (request.method !== 'GET') {
      return next.handle(request);
    }
    return this.publicLanguageStore.select(publicLanguageReducer.getOne).pipe(
      take(1),
      switchMap((language) => {
        request = language
          ? request.clone({
              setParams: {
                lang: language.acronym,
              },
            })
          : request.clone();
        return next.handle(request);
      }),
    );

    // request = request.clone({
    //   setParams:{
    //     language: "es"
    //   }
    // });
    // return next.handle(request);
  }
}
