import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { LanguagesModule } from '@app/shared/modules/languages.module';
import { ButtonModule } from 'primeng/button';
import { EntityModalButtonsComponent } from './entity-modal-buttons.component';

@NgModule({
  declarations: [EntityModalButtonsComponent],
  imports: [CommonModule, LanguagesModule, ButtonModule, ReactiveFormsModule],
  exports: [EntityModalButtonsComponent],
})
export class EntityModalButtonsModule {}
