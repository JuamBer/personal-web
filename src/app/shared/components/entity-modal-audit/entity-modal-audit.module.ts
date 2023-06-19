import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { LanguagesModule } from '@app/shared/modules/languages.module';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { SkeletonModule } from 'primeng/skeleton';
import { EntityModalAuditComponent } from './entity-modal-audit.component';

@NgModule({
  declarations: [EntityModalAuditComponent],
  imports: [CommonModule, LanguagesModule, ButtonModule, ReactiveFormsModule, SkeletonModule, TranslateModule],
  exports: [EntityModalAuditComponent],
})
export class EntityModalAuditModule {}
