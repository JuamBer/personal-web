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
import { CertificateTypeListComponent } from './certificate-type-list/certificate-type-list.component';
import { CertificateTypeModalComponent } from './certificate-type-modal/certificate-type-modal.component';
import { CertificateTypesRoutingModule } from './certificate-types-routing.module';
import { CertificateTypesStateModule } from './state/certificate-type-state.module';

@NgModule({
  declarations: [CertificateTypeListComponent, CertificateTypeModalComponent],
  imports: [
    BasicModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ImagenesModule,
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
    GenericTableModule,
    TablaGenericaModule,
    PipesModule,
    EntityModalButtonsModule,
    EntityModalAuditModule,
    CertificateTypesStateModule,
    CertificateTypesRoutingModule,
  ],
})
export class CertificateTypesModule {}
