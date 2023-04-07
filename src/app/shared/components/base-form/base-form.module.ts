import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { TablaGenericaModule } from '../tabla-generica/tabla-generica.module';
import { BaseFormContainerComponent } from './base-form-container/base-form-container.component';
import { BaseFormComponent } from './base-form.component';

@NgModule({
  declarations: [BaseFormComponent, BaseFormContainerComponent],
  exports: [BaseFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,

    TablaGenericaModule,
    MultiSelectModule,
    DropdownModule,
    ButtonModule,
    InputTextModule,
    InputNumberModule,
    DropdownModule,

    CalendarModule,
    CardModule,
  ],
})
export class BaseFormModule {}
