import { ChangeDetectionStrategy, Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { distinctUntilChanged, filter, startWith, take } from 'rxjs/operators';
import { Language } from 'src/app/backoffice/tables/language/models/language.model';
import { publicLanguageReducer } from 'src/app/shared/state/languages/public-language.reducer';
import { FormUtils } from 'src/app/shared/utils/form-utils';
import { TextContentFormGroup, TranslationFormGroup } from './models/text-content.model';
import { TranslateInputType } from './models/translate-input-type.model';
@Component({
  selector: 'app-translate-input',
  templateUrl: 'translate-input.component.html',
  styleUrls: ['translate-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class TranslateInputComponent implements OnInit {
  textContentForm: TextContentFormGroup = this.fb.group({
    translations: this.fb.array<TranslationFormGroup>([]),
  });

  @Input() form: TextContentFormGroup;
  @Input() type: TranslateInputType = TranslateInputType.INPUT;
  @Input() label: string = '';

  visibility: boolean = false;
  languages: Language[] = [];
  language: Language;
  publicLanguage: Language;

  constructor(private store: Store, private fb: FormBuilder) {}

  onHide() {
    FormUtils.markAllAsDirtyAndTouched(this.form);
    if (this.form.valid) {
      this.changeVisibility(false);
    }
  }

  ngOnInit(): void {
    this.form.valueChanges
      .pipe(
        startWith(this.form.value),
        filter((i) => !!i),
        distinctUntilChanged((a, b) => JSON.stringify(a) === JSON.stringify(b)),
      )
      .subscribe((value) => {
        if (value?.id && !this.form.controls?.id) {
          this.textContentForm.addControl('id', this.fb.control<string>(value.id, [Validators.required]));
        }
        this.textContentForm.patchValue(value);
      });

    this.textContentForm.valueChanges.subscribe((value) => {
      console.log(value);

      this.form.patchValue(value);
      console.log(this.form.value);
    });

    this.store.select(publicLanguageReducer.getAll).subscribe((languages) => {
      this.languages = languages;
      this.languages.forEach((language) => {
        const translation = this.form.value?.translations.find((t) => t.language.acronym === language.acronym);
        const languageForm: TranslationFormGroup = this.fb.group({
          language: [language, [Validators.required]],
          value: [translation?.value, [Validators.required]],
        });
        if (translation?.id) {
          languageForm.addControl('id', this.fb.control<string>(translation.id, [Validators.required]));
        }
        this.textContentForm.controls['translations'].push(languageForm);
      });
    });
    this.store
      .select(publicLanguageReducer.getOne)
      .pipe(take(1))
      .subscribe((language) => (this.language = language));
    this.store.select(publicLanguageReducer.getOne).subscribe((language) => (this.publicLanguage = language));
  }

  changeVisibility(visibility: boolean) {
    this.visibility = visibility;
  }

  getTraduction(language: string) {
    const translation = this.form.value.translations.find((translation) => translation.language.acronym === language);
    if (translation) {
      return translation.value;
    }
    return null;
  }

  getActualTranslationControl() {
    return this.translations.controls.find(
      (translationForm) => translationForm.controls['language'].value.acronym === this.language.acronym,
    );
  }
  getActualTranslationInvalid() {
    const translation = this.getActualTranslationControl();
    return translation.invalid;
  }
  getActualTranslationDirty() {
    const translation = this.getActualTranslationControl();
    return translation.dirty;
  }

  getActualTranslation() {
    const translation = this.getActualTranslationControl();
    return translation?.value?.value;
  }
  onActualTranslationChange(event: any) {
    const translation = this.getActualTranslationControl();
    translation.patchValue({
      language: translation.value.language,
      value: event.target.value,
    });
    if (translation.value?.id) {
      translation.controls['id'].setValue(translation.value.id);
    }
    translation.markAsDirty();
  }

  get translations() {
    return this.textContentForm.controls['translations'] as FormArray<FormGroup>;
  }
}
