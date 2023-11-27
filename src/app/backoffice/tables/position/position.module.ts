import { NgModule } from '@angular/core';
import { EntityModalAuditModule } from 'src/app/shared/components/entity-modal-audit/entity-modal-audit.module';
import { EntityModalButtonsModule } from 'src/app/shared/components/entity-modal-buttons/entity-modal-buttons.module';
import { GenericTableModule } from 'src/app/shared/components/generic-table/generic-table.module';

import { TitleCasePipe } from '@angular/common';
import { CalendarModule } from 'primeng/calendar';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { ToastModule } from 'primeng/toast';
import { InputTranslationsModule } from 'src/app/shared/components/input-translations/input-translations.module';
import { BasicModule } from 'src/app/shared/modules/basic.module';
import { LanguagesModule } from 'src/app/shared/modules/languages.module';
import { PipesModule } from 'src/app/shared/modules/pipes.module';
import { AccountStateModule } from 'src/app/shared/state/account/account.module';
import { CompanyStateModule } from '../company/state/company-state.module';
import { PositionListComponent } from './position-list/position-list.component';
import { PositionModalComponent } from './position-modal/position-modal.component';
import { PositionRoutingModule } from './position-routing.module';
import { PositionStateModule } from './state/position-state.module';

@NgModule({
  declarations: [PositionListComponent, PositionModalComponent],
  imports: [
    BasicModule,
    PositionRoutingModule,
    LanguagesModule,
    PositionStateModule,
    AccountStateModule,
    GenericTableModule,
    EntityModalButtonsModule,
    EntityModalAuditModule,
    CompanyStateModule,
    CalendarModule,
    PipesModule,
    DropdownModule,
    ToastModule,
    DialogModule,
    InputTranslationsModule,
  ],
  providers: [TitleCasePipe],
})
export class PositionModule {}
