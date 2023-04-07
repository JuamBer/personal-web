import { NgModule } from '@angular/core';
import { BasicModule } from '@app/shared/modules/basic.module';
import { PublicLanguageStateModule } from '@app/shared/state/languages/public-language-state.module';
import { DropdownModule } from 'primeng/dropdown';
import { LanguageSelectComponent } from './language-select.component';

@NgModule({
  imports: [BasicModule, PublicLanguageStateModule, DropdownModule],
  declarations: [LanguageSelectComponent],
  exports: [LanguageSelectComponent],
})
export class LanguageSelectModule {}
