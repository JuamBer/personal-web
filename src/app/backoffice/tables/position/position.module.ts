import { NgModule } from '@angular/core';
import { EntityModalAuditModule } from 'src/app/shared/components/entity-modal-audit/entity-modal-audit.module';
import { EntityModalButtonsModule } from 'src/app/shared/components/entity-modal-buttons/entity-modal-buttons.module';
import { GenericTableModule } from 'src/app/shared/components/generic-table/generic-table.module';

import { CommonModule, TitleCasePipe } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { ToastModule } from 'primeng/toast';
import { InputTranslationsModule } from 'src/app/shared/components/input-translations/input-translations.module';
import { DirectivesModule } from 'src/app/shared/modules/directives.module';
import { LanguagesModule } from 'src/app/shared/modules/languages.module';
import { PipesModule } from 'src/app/shared/modules/pipes.module';
import { CompanyStateModule } from '../company/state/company-state.module';
import { PositionListComponent } from './position-list/position-list.component';
import { PositionModalComponent } from './position-modal/position-modal.component';
import { PositionRoutingModule } from './position-routing.module';
import { PositionStateModule } from './state/position-state.module';

@NgModule({
  declarations: [PositionListComponent, PositionModalComponent],
  imports: [
    CommonModule,
    PositionRoutingModule,
    LanguagesModule,
    PositionStateModule,
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
    DirectivesModule,
    ReactiveFormsModule,
  ],
  providers: [TitleCasePipe],
})
export class PositionModule {}
