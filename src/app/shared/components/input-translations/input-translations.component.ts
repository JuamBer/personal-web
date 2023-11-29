import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
  ViewEncapsulation,
  inject,
} from '@angular/core';
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

  @Input({
    required: true,
  })
  set translations(translations: Translation[]) {
    if (Array.isArray(translations)) {
      this.translations$.next(translations);
    }
  }

  _showErrors: Observable<boolean>;
  @Input({
    required: true,
  })
  set showErrors(showErrors: Observable<boolean>) {
    this._showErrors = showErrors;
  }

  translations$: BehaviorSubject<Translation[]> = new BehaviorSubject<Translation[]>([]);
  suggestions$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  @Input({
    required: true,
  })
  disabled: boolean;
  @Input({
    required: true,
  })
  form: FormArray<TranslationFormGroup>;
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
  language: Language;
  publicLanguage: Language;

  languageToAddFormControl = new FormControl(null);
  languages$: Observable<Language[]> = this.store.select(publicLanguageReducer.getAll);
  activeLanguages$: Observable<Language[]> = this.store
    .select(publicLanguageReducer.getAll)
    .pipe(map((languages) => languages.filter((language) => language.active)));
  languagesToFill$: Observable<Language[]>;
  disabledLanguages$: Observable<Language[]> = this.store
    .select(publicLanguageReducer.getAll)
    .pipe(map((languages) => languages.filter((language) => !language.active)));
  languagesToAdd$: Observable<Language[]>;

  onHide() {
    FormUtils.markAllAsDirtyAndTouched(this.form);
    this.changeVisibility(false);
  }

  ngOnInit(): void {
    this._showErrors.subscribe((showErrors) => {
      if (showErrors && this.form.invalid) {
        FormUtils.markAllAsDirtyAndTouched(this.form);
        this.visibility = true;
      }
    });
    this.languagesToFill$ = combineLatest([
      this.languages$,
      this.form.valueChanges.pipe(startWith(this.form.value)),
    ]).pipe(
      map(([languages, translations]) =>
        languages.filter(
          (language) =>
            !!translations.find((translation) => translation.language === language.acronym) || language.active,
        ),
      ),
    );
    this.languagesToAdd$ = combineLatest([
      this.disabledLanguages$,
      this.form.valueChanges.pipe(startWith(this.form.value)),
    ]).pipe(
      map(([disabledLanguages, translations]) => {
        const languagesToAdd = disabledLanguages.filter(
          (language) => !translations.find((translation) => translation.language === language.acronym),
        );
        return languagesToAdd;
      }),
    );
    combineLatest([this.languagesToFill$, this.translations$]).subscribe(([languages, translations]) => {
      languages.forEach((language) => {
        if (this.form.value.findIndex((translation) => translation.language === language.acronym) < 0) {
          const translation = translations.find((t) => t.language === language.acronym);
          const languageForm: TranslationFormGroup = this.fb.group({
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
    this.store
      .select(publicLanguageReducer.getOne)
      .pipe(take(1))
      .subscribe((language) => {
        this.language = language;
      });
    this.store.select(publicLanguageReducer.getOne).subscribe((language) => (this.publicLanguage = language));
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
  onActualTranslationChange(event: any) {
    const translation = this.actualTranslationControl;
    translation.patchValue({
      language: translation.value.language,
      value: event.target.value,
    });
    translation.markAsDirty();
  }

  get actualTranslationControl() {
    return this.form.controls.find(
      (translationForm) => translationForm.controls['language'].value === this.language?.acronym,
    );
  }

  addLanguage(language: Language) {
    const languageForm: TranslationFormGroup = this.fb.group({
      language: [language.acronym, [Validators.required]],
      value: ['', [Validators.required]],
    });
    this.form.push(languageForm);
  }

  deleteLanguage(language: string) {
    const index = this.form.controls.findIndex((translationForm) => translationForm.value.language === language);
    this.form.removeAt(index);
  }

  showTimes(language: string, languages: Language[]) {
    return !languages?.find((lang) => lang.acronym === language)?.active;
  }

  setSuggestion(acronym: string) {
    const spanishTranslation = this.form.value.find((translation) => translation.language === 'es').value;

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
  getSuggestion(suggestions: any[], acronym: string) {
    const suggestion = suggestions.find((s) => s.language === acronym)?.value;
    return suggestion ? suggestion : '';
  }

  onKeyPress(event: KeyboardEvent, acronym: string) {
    if (event.key === 'Tab') {
      this.form.controls
        .find((translationForm) => translationForm.value.language === acronym)
        .controls['value'].setValue(this.getSuggestion(this.suggestions$.getValue(), acronym));
    }
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
