import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EntityModalAuditModule } from 'src/app/shared/components/entity-modal-audit/entity-modal-audit.module';
import { EntityModalButtonsModule } from 'src/app/shared/components/entity-modal-buttons/entity-modal-buttons.module';
import { GenericTableModule } from 'src/app/shared/components/generic-table/generic-table.module';

import { AutoCompleteModule } from 'primeng/autocomplete';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MessageModule } from 'primeng/message';
import { MultiSelectModule } from 'primeng/multiselect';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { ToastModule } from 'primeng/toast';
import { InputTranslationsModule } from 'src/app/shared/components/input-translations/input-translations.module';
import { BasicModule } from 'src/app/shared/modules/basic.module';
import { LanguagesModule } from 'src/app/shared/modules/languages.module';
import { PipesModule } from 'src/app/shared/modules/pipes.module';
import { AccountStateModule } from 'src/app/shared/state/account/account.module';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyModalComponent } from './company-modal/company-modal.component';
import { CompanyRoutingModule } from './company-routing.module';
import { CompanyStateModule } from './state/company-state.module';

@NgModule({
  declarations: [CompanyListComponent, CompanyModalComponent],
  imports: [
    BasicModule,
    CompanyRoutingModule,
    HttpClientModule,
    InputTranslationsModule,

    FormsModule,
    ReactiveFormsModule,

    ToastModule,
    ButtonModule,
    MessageModule,
    DialogModule,
    TableModule,
    CardModule,
    ConfirmDialogModule,
    AutoCompleteModule,
    ButtonModule,
    CalendarModule,
    DialogModule,
    DropdownModule,
    InputTextModule,
    InputSwitchModule,
    InputTextareaModule,
    TabViewModule,
    MultiSelectModule,
    LanguagesModule,
    AccountStateModule,

    CompanyStateModule,
    EntityModalButtonsModule,
    EntityModalAuditModule,

    PipesModule,
    GenericTableModule,
  ],
})
export class CompanyModule {}
