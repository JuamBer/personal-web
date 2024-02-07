import { Injectable, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { TranslateService } from '@ngx-translate/core';
import { map, startWith } from 'rxjs';
import { configuration } from 'src/assets/configuration';

@Injectable({ providedIn: 'root' })
export class LangService {
  private translateSrv = inject(TranslateService);

  lang$ = this.translateSrv.onLangChange.pipe(
    map((event) => event.lang),
    startWith(this.translateSrv.currentLang),
    map((lang) => lang || configuration.defaultLanguage),
  );

  lang = toSignal(this.lang$, {
    initialValue: this.translateSrv.currentLang || configuration.defaultLanguage,
  });
}
