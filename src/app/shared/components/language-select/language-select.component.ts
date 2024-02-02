import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
  ViewEncapsulation,
  inject,
  signal,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { PrimeNGConfig } from 'primeng/api';
import { DropdownChangeEvent } from 'primeng/dropdown';
import { SelectButtonChangeEvent } from 'primeng/selectbutton';
import { filter, take } from 'rxjs/operators';
import { Language } from 'src/app/backoffice/tables/language/models/language.model';
import { ActionStatus } from '../../state/common/common-state';
import { addActionId } from '../../state/common/common.actions';
import { publicLanguageActions } from '../../state/languages/public-language.actions';
import { publicLanguageReducer } from '../../state/languages/public-language.reducer';

@Component({
  selector: 'app-language-select',
  templateUrl: 'language-select.component.html',
  styleUrls: ['language-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class LanguageSelectComponent implements OnInit {
  private config = inject(PrimeNGConfig);
  private store = inject(Store);
  private translateSrv = inject(TranslateService);
  private ref = inject(ChangeDetectorRef);

  @Input()
  type: 'dropdown' | 'select-button' = 'dropdown';
  @Input()
  mode: 'simple' | 'complete' = 'simple';

  languages: Language[] = [];
  languagesSignal = signal<Language[]>([]);
  language: Language | undefined;
  languageSignal = signal<Language | undefined>(undefined);

  ngOnInit(): void {
    this.store
      .select(publicLanguageReducer.getAll)
      .pipe(filter((i) => i != null))
      .subscribe((languages) => {
        this.languages = languages
          .filter((language) => (language.active ? true : false))
          .sort((a, b) => a.nativeName.localeCompare(b.nativeName));
        this.languagesSignal.set(this.languages);
      });

    this.store.select(publicLanguageReducer.getOne).subscribe((language) => {
      if (!language) return;

      this.language = language;
      this.languageSignal.set(this.language);
      this.translateSrv.use(language.acronym);
      this.translateSrv
        .get('calendar')
        .pipe(take(1))
        .subscribe((res) => this.config.setTranslation(res));
    });
  }

  onLanguageChange(event: DropdownChangeEvent | SelectButtonChangeEvent) {
    this.language = event.value;
    if (!this.language) {
      return;
    }
    this.languageSignal.set(this.language);

    this.store.dispatch(
      publicLanguageActions.loadOneSuccess(
        addActionId({ feedback: new Set([ActionStatus.ERROR]), payload: this.language }),
      ),
    );
  }
}
