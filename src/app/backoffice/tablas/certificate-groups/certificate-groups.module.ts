import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EntityModalAuditModule } from '@app/shared/components/entity-modal-audit/entity-modal-audit.module';
import { EntityModalButtonsModule } from '@app/shared/components/entity-modal-buttons/entity-modal-buttons.module';
import { GenericTableModule } from '@app/shared/components/generic-table/generic-table.module';
import { ImagenesModule } from '@app/shared/components/imagenes/imagenes.module';
import { TablaGenericaModule } from '@app/shared/components/tabla-generica/tabla-generica.module';
import { BasicModule } from '@app/shared/modules/basic.module';
import { DirectivesModule } from '@app/shared/modules/directives.module';
import { LanguagesModule } from '@app/shared/modules/languages.module';
import { PipesModule } from '@app/shared/modules/pipes.module';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MessageModule } from 'primeng/message';
import { MultiSelectModule } from 'primeng/multiselect';
import { SkeletonModule } from 'primeng/skeleton';
import { TabViewModule } from 'primeng/tabview';
import { CertificateGroupListComponent } from './certificate-group-list/certificate-group-list.component';
import { CertificateGroupModalComponent } from './certificate-group-modal/certificate-group-modal.component';
import { CertificateGroupsRoutingModule } from './certificate-groups-routing.module';
import { CertificateGroupsStateModule } from './state/certificate-group-state.module';

@NgModule({
  declarations: [CertificateGroupListComponent, CertificateGroupModalComponent],
  imports: [
    BasicModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ImagenesModule,
    MessageModule,
    DialogModule,
    CardModule,
    ConfirmDialogModule,
    ButtonModule,
    CalendarModule,
    InputTextModule,
    InputSwitchModule,
    InputTextareaModule,
    TabViewModule,
    MultiSelectModule,
    LanguagesModule,
    SkeletonModule,
    DirectivesModule,
    PipesModule,
    SkeletonModule,
    GenericTableModule,
    TablaGenericaModule,
    PipesModule,
    EntityModalButtonsModule,
    EntityModalAuditModule,
    CertificateGroupsRoutingModule,
    CertificateGroupsStateModule,
  ],
})
export class CertificateGroupsModule {}
