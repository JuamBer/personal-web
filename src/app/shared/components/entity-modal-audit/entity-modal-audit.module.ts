import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { SkeletonModule } from 'primeng/skeleton';
import { DirectivesModule } from 'src/app/shared/modules/directives.module';
import { LanguagesModule } from 'src/app/shared/modules/languages.module';
import { PipesModule } from 'src/app/shared/modules/pipes.module';
import { EntityModalAuditComponent } from './entity-modal-audit.component';

@NgModule({
  declarations: [EntityModalAuditComponent],
  imports: [
    CommonModule,
    LanguagesModule,
    ButtonModule,
    ReactiveFormsModule,
    SkeletonModule,
    TranslateModule,
    PipesModule,
    DirectivesModule,
  ],
  exports: [EntityModalAuditComponent],
})
export class EntityModalAuditModule {}
