import { NgModule } from '@angular/core';
import { BaseFormModule } from '@app/shared/components/base-form/base-form.module';
import { EntityModalAuditModule } from '@app/shared/components/entity-modal-audit/entity-modal-audit.module';
import { EntityModalButtonsModule } from '@app/shared/components/entity-modal-buttons/entity-modal-buttons.module';
import { GenericTableModule } from '@app/shared/components/generic-table/generic-table.module';
import { TablaGenericaModule } from '@app/shared/components/tabla-generica/tabla-generica.module';
import { BasicModule } from '@app/shared/modules/basic.module';
import { LanguagesModule as Lmodule } from '@app/shared/modules/languages.module';
import { PipesModule } from '@app/shared/modules/pipes.module';
import { PrimeNgModule } from '@app/shared/modules/primeng.module';
import { AccountStateModule } from '@app/shared/state/account/account.module';
import { InputSwitchModule } from 'primeng/inputswitch';
import { LanguageListComponent } from './language-list/language-list.component';
import { LanguageModalComponent } from './language-modal/language-modal.component';
import { LanguageRoutingModule } from './language-routing.module';
import { LanguageStateModule } from './state/language-state.module';

@NgModule({
  declarations: [LanguageListComponent, LanguageModalComponent],
  imports: [
    BasicModule,
    PrimeNgModule,
    TablaGenericaModule,
    BaseFormModule,
    Lmodule,

    LanguageStateModule,
    AccountStateModule,
    LanguageRoutingModule,
    GenericTableModule,
    EntityModalButtonsModule,
    EntityModalAuditModule,
    PipesModule,
    InputSwitchModule,
  ],
})
export class LanguageModule {}
