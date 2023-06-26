import { ChangeDetectionStrategy, Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { take } from 'rxjs/operators';
import { Language } from 'src/app/backoffice/tables/language/models/language.model';
import { publicLanguageReducer } from 'src/app/shared/state/languages/public-language.reducer';
import { PublicLanguageState } from 'src/app/shared/state/languages/public-language.state';
import { FormUtils } from 'src/app/shared/utils/form-utils';
import { TextContentFormGroup } from './models/text-content.model';
import { TranslateInputType } from './models/translate-input-type.model';
@Component({
  selector: 'app-translate-input',
  templateUrl: 'translate-input.component.html',
  styleUrls: ['translate-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class TranslateInputComponent implements OnInit {
  @Input() textContentForm: TextContentFormGroup;
  @Input() form: TextContentFormGroup;
  @Input() type: TranslateInputType = TranslateInputType.INPUT;
  @Input() label: string = '';

  visibility: boolean = false;
  languages: Language[] = [];
  language: Language;
  publicLanguage: Language;

  constructor(private publicLanguageStore: Store<PublicLanguageState>, private formBuilder: FormBuilder) {}

  onHide() {
    FormUtils.markAllAsDirtyAndTouched(this.form);
    if (this.form.valid) {
      this.changeVisibility(false);
    }
  }

  ngOnInit(): void {
    this.publicLanguageStore.select(publicLanguageReducer.getAll).subscribe((languages) => {
      this.languages = languages;
      this.languages.forEach((language) => {
        const translation = this.form.value?.translations.find((t) => t.language.acronym === language.acronym);
        const languageForm = this.formBuilder.group({
          id: [translation?.id],
          language: [language, [Validators.required]],
          value: [translation?.value, [Validators.required]],
        });
        this.translations.push(languageForm);
      });
    });
    this.publicLanguageStore
      .select(publicLanguageReducer.getOne)
      .pipe(take(1))
      .subscribe((language) => (this.language = language));
    this.publicLanguageStore
      .select(publicLanguageReducer.getOne)
      .subscribe((language) => (this.publicLanguage = language));
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
      id: translation.value.id,
      language: translation.value.language,
      value: event.target.value,
    });
    translation.markAsDirty();
  }

  get translations() {
    return this.form.controls['translations'] as FormArray<FormGroup>;
  }
}
