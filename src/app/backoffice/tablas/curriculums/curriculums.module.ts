import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { FileUploadModule } from 'primeng/fileupload';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MessageModule } from 'primeng/message';
import { MultiSelectModule } from 'primeng/multiselect';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { ToastModule } from 'primeng/toast';
import { CurriculumModalComponent } from './curriculum-modal/curriculum-modal.component';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { CurriculumsRoutingModule } from './curriculums-routing.module';
import { CurriculumsStateModule } from './state/curriculum-state.module';

@NgModule({
  declarations: [CurriculumComponent, CurriculumModalComponent],
  imports: [
    BasicModule,
    CurriculumsRoutingModule,
    HttpClientModule,

    FormsModule,
    ReactiveFormsModule,
    ImagenesModule,
    FileUploadModule,

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

    CurriculumsStateModule,
    TablaGenericaModule,
    PipesModule,
  ],
})
export class CurriculumsModule {}
