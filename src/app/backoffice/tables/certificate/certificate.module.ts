import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EntityModalAuditModule } from 'src/app/shared/components/entity-modal-audit/entity-modal-audit.module';
import { EntityModalButtonsModule } from 'src/app/shared/components/entity-modal-buttons/entity-modal-buttons.module';
import { GenericTableModule } from 'src/app/shared/components/generic-table/generic-table.module';

import { TitleCasePipe } from '@angular/common';
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
import { CertificateGroupStateModule } from '../certificate-group/state/certificate-group-state.module';
import { CertificateTypeStateModule } from '../certificate-type/state/certificate-type-state.module';
import { CompanyStateModule } from '../company/state/company-state.module';
import { CertificateListComponent } from './certificate-list/certificate-list.component';
import { CertificateModalComponent } from './certificate-modal/certificate-modal.component';
import { CertificateRoutingModule } from './certificate-routing.module';
import { CertificateStateModule } from './state/certificate-state.module';

@NgModule({
  declarations: [CertificateListComponent, CertificateModalComponent],
  imports: [
    BasicModule,
    CertificateRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    InputTranslationsModule,
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
    CertificateTypeStateModule,
    CertificateGroupStateModule,
    CompanyStateModule,
    PipesModule,
    PipesModule,
    GenericTableModule,
    EntityModalButtonsModule,
    EntityModalAuditModule,
    CertificateStateModule,
    CertificateRoutingModule,
    InputTextModule,
  ],
  providers: [TitleCasePipe],
})
export class CertificateModule {}
