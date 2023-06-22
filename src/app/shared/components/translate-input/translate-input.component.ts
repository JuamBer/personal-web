import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Language } from '@app/backoffice/tables/languages/models/language.model';
import { publicLanguageReducer } from '@app/shared/state/languages/public-language.reducer';
import { PublicLanguageState } from '@app/shared/state/languages/public-language.state';
import { Store } from '@ngrx/store';
import { take } from 'rxjs/operators';
import { TextContent } from './models/text-content.model';
import { TranslateInputEvent } from './models/translate-input-event.model';
import { TranslateInputType } from './models/translate-input-type.model';
@Component({
  selector: 'app-translate-input',
  templateUrl: 'translate-input.component.html',
  styleUrls: ['translate-input.component.scss'],
})
export class TranslateInputComponent implements OnInit {
  visibility: boolean = false;
  languages: Language[] = [];
  language: Language;
  publicLanguage: Language;
  errores: string[] = [];

  @Input() fieldName: string;
  @Input() type: TranslateInputType = TranslateInputType.INPUT;
  @Input() value: TextContent;
  @Output() translateInputChange = new EventEmitter<TranslateInputEvent>();

  form: FormGroup = this.formBuilder.group({
    id: [undefined],
    translations: this.formBuilder.array([]),
  });

  constructor(private publicLanguageStore: Store<PublicLanguageState>, private formBuilder: FormBuilder) {}

  onHide() {
    Object.values(this.form.controls).forEach((control) => {
      control.markAsDirty();
    });
    this.translations.controls.forEach((formGroup: FormGroup) => {
      Object.values(formGroup.controls).forEach((control) => {
        control.markAsDirty();
      });
    });
    if (this.form.valid) {
      this.changeVisibility(false);
    }
  }

  ngOnInit(): void {
    this.form.patchValue({
      id: this.value?.id,
      translations: [],
    });
    this.form.valueChanges.subscribe((textContent: TextContent) => {
      this.translateInputChange.emit({
        actualTranslation: textContent.translations.find((t) => t.language.acronym === this.publicLanguage?.siglas)
          ?.translation,
        translateInput: textContent,
        valid: this.form.valid,
      });
    });

    this.publicLanguageStore.select(publicLanguageReducer.getAll).subscribe((languages) => {
      this.languages = languages;
      this.languages.forEach((language) => {
        const translation = this.value?.translations.find((t) => t.language.acronym === language.acronym);
        const languageForm = this.formBuilder.group({
          id: [translation?.id],
          language: [language, [Validators.required]],
          translation: [translation?.translation, [Validators.required]],
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
    const translation = this.value.translations.find((translation) => translation.language.acronym === language);
    if (translation) {
      return translation.translation;
    }
  }

  getActualTranslationControl() {
    return this.translations.controls.find(
      (translationForm) => translationForm.get('language').value.siglas === this.language.acronym,
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
    return translation.value.translation;
  }
  onActualTranslationChange(event: any) {
    const translation = this.getActualTranslationControl();
    translation.patchValue({
      id: translation.value.id,
      language: translation.value.language,
      translation: event.target.value,
    });
    translation.markAsDirty();
  }

  get translations() {
    return this.form.controls['translations'] as FormArray;
  }
}
