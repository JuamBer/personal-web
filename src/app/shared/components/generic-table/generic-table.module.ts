import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ProgressBarModule } from 'primeng/progressbar';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { TooltipModule } from 'primeng/tooltip';
import { DirectivesModule } from '../../modules/directives.module';
import { GenericTableButtonComponent } from './generic-table-button/generic-table-button.component';
import { GenericTableColumnComponent } from './generic-table-column/generic-table-column.component';
import { GenericTableHeaderColumnComponent } from './generic-table-header-column/generic-table-header-column.component';
import { GenericTableComponent } from './generic-table.component';

@NgModule({
  declarations: [
    GenericTableComponent,
    GenericTableHeaderColumnComponent,
    GenericTableColumnComponent,
    GenericTableButtonComponent,
  ],
  imports: [
    CommonModule,
    TableModule,
    InputTextModule,
    DropdownModule,
    MultiSelectModule,
    TagModule,
    ProgressBarModule,
    ButtonModule,
    TooltipModule,
    OverlayPanelModule,
    ReactiveFormsModule,
    RadioButtonModule,
    TranslateModule,
    FontAwesomeModule,
    DirectivesModule,
  ],
  exports: [GenericTableComponent],
})
export class GenericTableModule {}
