import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EntityModalAuditModule } from '@app/shared/components/entity-modal-audit/entity-modal-audit.module';
import { EntityModalButtonsModule } from '@app/shared/components/entity-modal-buttons/entity-modal-buttons.module';
import { GenericTableModule } from '@app/shared/components/generic-table/generic-table.module';
import { ImagenesModule } from '@app/shared/components/imagenes/imagenes.module';
import { TablaGenericaModule } from '@app/shared/components/tabla-generica/tabla-generica.module';
import { BasicModule } from '@app/shared/modules/basic.module';
import { LanguagesModule } from '@app/shared/modules/languages.module';
import { PipesModule } from '@app/shared/modules/pipes.module';
import { AccountStateModule } from '@app/shared/state/account/account.module';
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
import { CertificateGroupsStateModule } from '../certificate-groups/state/certificate-group-state.module';
import { CertificateTypesStateModule } from '../certificate-types/state/certificate-type-state.module';
import { CompaniesStateModule } from '../companies/state/company-state.module';
import { CertificateListComponent } from './certificate-list/certificate-list.component';
import { CertificateModalComponent } from './certificate-modal/certificate-modal.component';
import { CertificatesRoutingModule } from './certificates-routing.module';
import { CertificateStateModule } from './state/certificate-state.module';

@NgModule({
  declarations: [CertificateListComponent, CertificateModalComponent],
  imports: [
    BasicModule,
    CertificatesRoutingModule,
    HttpClientModule,

    FormsModule,
    ReactiveFormsModule,
    ImagenesModule,

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

    CertificateTypesStateModule,
    CertificateGroupsStateModule,
    CompaniesStateModule,

    TablaGenericaModule,
    PipesModule,
    PipesModule,
    GenericTableModule,
    EntityModalButtonsModule,
    EntityModalAuditModule,
    CertificateStateModule,
    CertificatesRoutingModule,
  ],
})
export class CertificatesModule {}
