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
import { TabViewModule } from 'primeng/tabview';
import { ToastModule } from 'primeng/toast';
import { InputTranslationsModule } from 'src/app/shared/components/input-translations/input-translations.module';
import { BasicModule } from 'src/app/shared/modules/basic.module';
import { LanguagesModule } from 'src/app/shared/modules/languages.module';
import { PipesModule } from 'src/app/shared/modules/pipes.module';
import { CertificateTypeListComponent } from './certificate-type-list/certificate-type-list.component';
import { CertificateTypeModalComponent } from './certificate-type-modal/certificate-type-modal.component';
import { CertificateTypeRoutingModule } from './certificate-type-routing.module';
import { CertificateTypeStateModule } from './state/certificate-type-state.module';

@NgModule({
  declarations: [CertificateTypeListComponent, CertificateTypeModalComponent],
  imports: [
    BasicModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    ToastModule,
    ButtonModule,
    MessageModule,
    DialogModule,
    CardModule,
    ConfirmDialogModule,
    AutoCompleteModule,
    CalendarModule,
    DialogModule,
    DropdownModule,
    InputTextModule,
    InputSwitchModule,
    InputTextareaModule,
    TabViewModule,
    MultiSelectModule,
    LanguagesModule,
    PipesModule,

    PipesModule,
    GenericTableModule,
    EntityModalButtonsModule,
    EntityModalAuditModule,
    CertificateTypeStateModule,
    CertificateTypeRoutingModule,
    InputTranslationsModule,
  ],
})
export class CertificateTypeModule {}
