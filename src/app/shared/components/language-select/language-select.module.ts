import { NgModule } from '@angular/core';
import { DropdownModule } from 'primeng/dropdown';
import { BasicModule } from '../../modules/basic.module';
import { PublicLanguageStateModule } from '../../state/languages/public-language-state.module';
import { LanguageSelectComponent } from './language-select.component';

@NgModule({
  imports: [BasicModule, PublicLanguageStateModule, DropdownModule],
  declarations: [LanguageSelectComponent],
  exports: [LanguageSelectComponent],
})
export class LanguageSelectModule {}
