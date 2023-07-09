import { NgModule } from '@angular/core';
import { EntityModalAuditModule } from 'src/app/shared/components/entity-modal-audit/entity-modal-audit.module';
import { EntityModalButtonsModule } from 'src/app/shared/components/entity-modal-buttons/entity-modal-buttons.module';
import { GenericTableModule } from 'src/app/shared/components/generic-table/generic-table.module';

import { TitleCasePipe } from '@angular/common';
import { InputSwitchModule } from 'primeng/inputswitch';
import { BasicModule } from 'src/app/shared/modules/basic.module';
import { LanguagesModule as Lmodule } from 'src/app/shared/modules/languages.module';
import { PipesModule } from 'src/app/shared/modules/pipes.module';
import { PrimeNgModule } from 'src/app/shared/modules/primeng.module';
import { AccountStateModule } from 'src/app/shared/state/account/account.module';
import { LanguageListComponent } from './language-list/language-list.component';
import { LanguageModalComponent } from './language-modal/language-modal.component';
import { LanguageRoutingModule } from './language-routing.module';
import { LanguageStateModule } from './state/language-state.module';

@NgModule({
  declarations: [LanguageListComponent, LanguageModalComponent],
  imports: [
    BasicModule,
    PrimeNgModule,

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
  providers: [TitleCasePipe],
})
export class LanguageModule {}
