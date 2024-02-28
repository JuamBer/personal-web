import { CommonModule, TitleCasePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { ChipsModule } from 'primeng/chips';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MessageModule } from 'primeng/message';
import { MultiSelectModule } from 'primeng/multiselect';
import { SliderModule } from 'primeng/slider';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { ToastModule } from 'primeng/toast';
import { EntityModalAuditModule } from 'src/app/shared/components/entity-modal-audit/entity-modal-audit.module';
import { EntityModalButtonsModule } from 'src/app/shared/components/entity-modal-buttons/entity-modal-buttons.module';
import { GenericTableModule } from 'src/app/shared/components/generic-table/generic-table.module';
import { InputTranslationsModule } from 'src/app/shared/components/input-translations/input-translations.module';
import { DirectivesModule } from 'src/app/shared/modules/directives.module';
import { LanguagesModule } from 'src/app/shared/modules/languages.module';
import { PipesModule } from 'src/app/shared/modules/pipes.module';
import { CompanyStateModule } from '../company/state/company-state.module';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectModalComponent } from './project-modal/project-modal.component';
import { ProjectRoutingModule } from './project-routing.module';
import { ProjectStateModule } from './state/project-state.module';

@NgModule({
  declarations: [ProjectListComponent, ProjectModalComponent],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    HttpClientModule,
    DirectivesModule,
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
    SliderModule,
    DropdownModule,
    InputTextModule,
    InputSwitchModule,
    InputTextareaModule,
    TabViewModule,
    MultiSelectModule,
    LanguagesModule,

    ProjectStateModule,
    CompanyStateModule,

    PipesModule,
    EntityModalAuditModule,
    EntityModalButtonsModule,
    GenericTableModule,
    InputTranslationsModule,
    ChipsModule,
    DividerModule,
  ],
  providers: [TitleCasePipe],
})
export class ProjectModule {}
