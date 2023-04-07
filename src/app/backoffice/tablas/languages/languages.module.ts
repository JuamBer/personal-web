import { NgModule } from '@angular/core';
import { BaseFormModule } from '@app/shared/components/base-form/base-form.module';
import { TablaGenericaModule } from '@app/shared/components/tabla-generica/tabla-generica.module';
import { BasicModule } from '@app/shared/modules/basic.module';
import { LanguagesModule as Lmodule } from '@app/shared/modules/languages.module';
import { PrimeNgModule } from '@app/shared/modules/primeng.module';
import { AccountStateModule } from '@app/shared/state/account/account.module';
import { LanguageModalComponent } from './language-modal/language-modal.component';
import { LanguageComponent } from './language/language.component';
import { LanguagesRoutingModule } from './languages-routing.module';
import { LanguageStateModule } from './state/language-state.module';

@NgModule({
  declarations: [LanguageComponent, LanguageModalComponent],
  imports: [
    BasicModule,
    LanguagesRoutingModule,
    PrimeNgModule,
    TablaGenericaModule,
    BaseFormModule,
    Lmodule,

    LanguageStateModule,
    AccountStateModule,
  ],
})
export class LanguagesModule {}
