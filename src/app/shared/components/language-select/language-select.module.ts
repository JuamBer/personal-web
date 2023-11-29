import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { SelectButtonModule } from 'primeng/selectbutton';
import { PublicLanguageStateModule } from '../../state/languages/public-language-state.module';
import { LanguageSelectComponent } from './language-select.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    PublicLanguageStateModule,
    DropdownModule,
    SelectButtonModule,
  ],
  declarations: [LanguageSelectComponent],
  exports: [LanguageSelectComponent],
})
export class LanguageSelectModule {}
