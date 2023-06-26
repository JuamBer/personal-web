import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EntityModalAuditModule } from 'src/app/shared/components/entity-modal-audit/entity-modal-audit.module';
import { EntityModalButtonsModule } from 'src/app/shared/components/entity-modal-buttons/entity-modal-buttons.module';
import { GenericTableModule } from 'src/app/shared/components/generic-table/generic-table.module';

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
import { BasicModule } from 'src/app/shared/modules/basic.module';
import { DirectivesModule } from 'src/app/shared/modules/directives.module';
import { LanguagesModule } from 'src/app/shared/modules/languages.module';
import { PipesModule } from 'src/app/shared/modules/pipes.module';
import { CertificateGroupListComponent } from './certificate-group-list/certificate-group-list.component';
import { CertificateGroupModalComponent } from './certificate-group-modal/certificate-group-modal.component';
import { CertificateGroupRoutingModule } from './certificate-group-routing.module';
import { CertificateGroupStateModule } from './state/certificate-group-state.module';

@NgModule({
  declarations: [CertificateGroupListComponent, CertificateGroupModalComponent],
  imports: [
    BasicModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

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

    PipesModule,
    EntityModalButtonsModule,
    EntityModalAuditModule,
    CertificateGroupStateModule,
    CertificateGroupStateModule,
    CertificateGroupRoutingModule,
  ],
})
export class CertificateGroupModule {}
