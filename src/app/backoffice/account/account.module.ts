import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BaseFormModule } from '@app/shared/components/base-form/base-form.module';
import { LanguageSelectModule } from '@app/shared/components/language-select/language-select.module';
import { TablaGenericaModule } from '@app/shared/components/tabla-generica/tabla-generica.module';
import { BasicModule } from '@app/shared/modules/basic.module';
import { LanguagesModule } from '@app/shared/modules/languages.module';
import { PrimeNgModule } from '@app/shared/modules/primeng.module';
import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';

@NgModule({
  declarations: [AccountComponent],
  imports: [
    LanguageSelectModule,
    LanguagesModule,
    CommonModule,
    BasicModule,
    PrimeNgModule,
    AccountRoutingModule,
    BasicModule,
    PrimeNgModule,
    TablaGenericaModule,
    BaseFormModule,
  ],
  providers: [],
  exports: [RouterModule, AccountComponent],
})
export class AccountModule {}
