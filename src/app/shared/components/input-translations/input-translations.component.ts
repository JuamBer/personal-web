/* eslint-disable @ngrx/avoid-mapping-selectors */
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  Input,
  OnInit,
  ViewEncapsulation,
  inject,
  signal,
} from '@angular/core';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { faLanguage, faTimes, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable, combineLatest } from 'rxjs';
import { map, startWith, take } from 'rxjs/operators';
import { Language } from 'src/app/backoffice/tables/language/models/language.model';
import { publicLanguageReducer } from 'src/app/shared/state/languages/public-language.reducer';
import { FormUtils } from 'src/app/shared/utils/form-utils';
import { Translation, TranslationFormGroup } from '../../models/translation.model';
import { CapitalizePipe } from '../../pipes/capitalize.pipe';
import { InputTranslationsType } from './models/input-translations.models';
import { InputTranslationsService } from './services/input-translations.service';

@Component({
  selector: 'app-input-translations',
  templateUrl: 'input-translations.component.html',
  styleUrls: ['input-translations.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class InputTranslationsComponent implements OnInit {
  private store = inject(Store);
  private fb = inject(FormBuilder);
  private ref = inject(ChangeDetectorRef);
  private inputTranslationsService = inject(InputTranslationsService);
  private capitalizePipe = inject(CapitalizePipe);
  private destroyRef = inject(DestroyRef);

  @Input({
    required: true,
  })
  set translations(translations: Translation[]) {
    if (Array.isArray(translations)) {
      this.translations$.next(translations);
    }
  }

  _showErrors!: Observable<boolean>;
  @Input({
    required: true,
  })
  set showErrors(showErrors: Observable<boolean>) {
    this._showErrors = showErrors;
  }

  translations$ = new BehaviorSubject<Translation[]>([]);

  suggestions$ = new BehaviorSubject<Translation[]>([]);
  suggestions = toSignal(this.suggestions$, {
    initialValue: [],
  });

  @Input({
    required: true,
  })
  disabled!: boolean;
  @Input({
    required: true,
  })
  form!: FormArray<TranslationFormGroup>;
  @Input({
    required: true,
  })
  type: InputTranslationsType = InputTranslationsType.INPUT;
  @Input({
    required: true,
  })
  label: string = '';

  visibility: boolean = false;
  languages: Language[] = [];
  language!: Language;
  publicLanguage!: Language;

  languageToAddFormControl = new FormControl(null);

  languages$ = this.store.select(publicLanguageReducer.getAll);

  activeLanguages$ = this.store
    .select(publicLanguageReducer.getAll)
    .pipe(map((languages) => languages.filter((language) => language.active)));

  languagesToFill$!: Observable<Language[]>;
  languagesToFill = signal([] as Language[]);

  disabledLanguages$ = this.store
    .select(publicLanguageReducer.getAll)
    .pipe(map((languages) => languages.filter((language) => !language.active)));

  languagesToAdd$!: Observable<Language[]>;
  languagesToAdd = signal([] as Language[]);

  ngOnInit(): void {
    this._showErrors.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((showErrors) => {
      if (showErrors && this.form.invalid) {
        FormUtils.markAllAsDirtyAndTouched(this.form);
        this.visibility = true;
      }
    });

    this.store
      .select(publicLanguageReducer.getOne)
      .pipe(take(1), takeUntilDestroyed(this.destroyRef))
      .subscribe((language) => {
        if (language) {
          this.language = language;
        }
      });

    this.store
      .select(publicLanguageReducer.getOne)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((language) => {
        if (language) {
          this.publicLanguage = language;
        }
      });

    this.languagesToFill$ = combineLatest([
      this.languages$,
      this.form.valueChanges.pipe(startWith(this.form.value)),
    ]).pipe(
      takeUntilDestroyed(this.destroyRef),
      map(([languages, translations]) =>
        languages.filter(
          (language) =>
            !!translations.find((translation) => translation.language === language.acronym) || language.active,
        ),
      ),
    );
    this.languagesToFill$.subscribe((languages) => {
      this.languagesToFill.set(languages);
    });

    this.languagesToAdd$ = combineLatest([
      this.disabledLanguages$,
      this.form.valueChanges.pipe(startWith(this.form.value)),
    ]).pipe(
      takeUntilDestroyed(this.destroyRef),
      map(([disabledLanguages, translations]) => {
        const languagesToAdd = disabledLanguages.filter(
          (language) => !translations.find((translation) => translation.language === language.acronym),
        );
        return languagesToAdd;
      }),
    );
    this.languagesToAdd$.subscribe((languages) => {
      this.languagesToAdd.set(languages);
    });

    combineLatest([this.languagesToFill$, this.translations$])
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(([languages, translations]) => {
        languages.forEach((language) => {
          if (this.form.value.findIndex((translation) => translation.language === language.acronym) < 0) {
            const translation = translations.find((t) => t.language === language.acronym);
            const languageForm: TranslationFormGroup = this.fb.nonNullable.group({
              language: [language.acronym, [Validators.required]],
              value: [translation?.value, [Validators.required]],
            });
            this.form.push(languageForm);
            if (this.disabled) {
              this.form.disable();
              languageForm.disable();
            }
            this.ref.detectChanges();
            this.ref.markForCheck();
          }
        });
      });
  }

  onHide() {
    FormUtils.markAllAsDirtyAndTouched(this.form);
  }

  changeVisibility(visibility: boolean) {
    this.visibility = visibility;
  }

  getTraduction(language: string) {
    const translation = this.form.value.find((translation) => translation.language === language);
    if (translation) {
      return translation?.value;
    }
    return null;
  }

  getActualTranslationInvalid() {
    const translation = this.actualTranslationControl;
    return translation?.invalid;
  }
  getActualTranslationDirty() {
    const translation = this.actualTranslationControl;
    return translation?.dirty;
  }

  getActualTranslation() {
    const translation = this.actualTranslationControl;
    return translation?.value?.value ? translation?.value?.value : '';
  }

  onActualTranslationChange(event: Event) {
    const translation = this.actualTranslationControl;
    const value = event.target ? (event.target as HTMLInputElement).value : '';
    if (translation) {
      translation.patchValue({
        language: translation.value.language,
        value: value,
      });
      translation.markAsDirty();
    }
  }

  addLanguage(language: Language | null) {
    if (!language) return;

    const languageForm: TranslationFormGroup = this.fb.nonNullable.group({
      language: this.fb.nonNullable.control<string>(language.acronym, [Validators.required]),
      value: this.fb.nonNullable.control<string | undefined>('', [Validators.required]),
    });
    this.form.push(languageForm);
  }

  removeLanguage(acronym: string | null) {
    if (!acronym) return;

    const index = this.form.controls.findIndex((translationForm) => translationForm.value.language === acronym);
    this.form.removeAt(index);
  }

  showTimes(language: string | null, languages: Language[]) {
    return !languages?.find((lang) => lang.acronym === language)?.active;
  }

  setSuggestion(acronym: string | null) {
    if (!acronym) return;

    const spanishTranslation = this.form.value.find((translation) => translation.language === 'es')?.value;

    if (spanishTranslation) {
      this.inputTranslationsService
        .translate({
          q: [spanishTranslation],
          target: acronym,
          source: 'es',
        })
        .pipe(
          take(1),

          map((res) => this.capitalizePipe.transform(res.data.translations[0].translatedText)),
        )
        .subscribe((suggestion) => {
          const suggestionIndex = this.suggestions$.getValue().findIndex((s) => s.language === acronym);
          if (suggestionIndex >= 0) {
            this.suggestions$.next([
              ...this.suggestions$
                .getValue()
                .map((v, i) => (i === suggestionIndex ? { language: acronym, value: suggestion } : v)),
            ]);
          } else {
            this.suggestions$.next([...this.suggestions$.getValue(), { language: acronym, value: suggestion }]);
          }
        });
    }
  }

  getSuggestion(suggestions: Translation[], acronym: string | null) {
    if (!acronym) return;

    const suggestion = suggestions.find((s) => s.language === acronym)?.value;
    return suggestion ? suggestion : '';
  }

  onKeyPress(event: KeyboardEvent, acronym: string | null) {
    if (event.key === 'Tab') {
      this.form.controls
        .find((translationForm) => translationForm.value.language === acronym)
        ?.controls['value']?.setValue(this.getSuggestion(this.suggestions$.getValue(), acronym));
    }
  }

  get actualTranslationControl() {
    return this.form.controls.find(
      (translationForm) => translationForm.controls['language'].value === this.language?.acronym,
    );
  }

  get InputTranslationsType() {
    return InputTranslationsType;
  }
  get faTimes() {
    return faTimes;
  }
  get faTrash() {
    return faTrash;
  }
  get faLanguage() {
    return faLanguage;
  }
}
