import { NgModule } from '@angular/core';
import { EntityModalAuditModule } from 'src/app/shared/components/entity-modal-audit/entity-modal-audit.module';
import { EntityModalButtonsModule } from 'src/app/shared/components/entity-modal-buttons/entity-modal-buttons.module';
import { GenericTableModule } from 'src/app/shared/components/generic-table/generic-table.module';

import { CommonModule, TitleCasePipe } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { DirectivesModule } from 'src/app/shared/modules/directives.module';
import { LanguagesModule as _LanguagesModule } from 'src/app/shared/modules/languages.module';
import { PipesModule } from 'src/app/shared/modules/pipes.module';
import { LanguageListComponent } from './language-list/language-list.component';
import { LanguageModalComponent } from './language-modal/language-modal.component';
import { LanguageRoutingModule } from './language-routing.module';
import { LanguageStateModule } from './state/language-state.module';

@NgModule({
  declarations: [LanguageListComponent, LanguageModalComponent],
  imports: [
    _LanguagesModule,
    LanguageStateModule,
    DialogModule,
    ToastModule,
    LanguageRoutingModule,
    GenericTableModule,
    EntityModalButtonsModule,
    EntityModalAuditModule,
    PipesModule,
    InputSwitchModule,
    ReactiveFormsModule,
    DirectivesModule,
    InputTextModule,
    CommonModule,
  ],
  providers: [TitleCasePipe],
})
export class LanguageModule {}
