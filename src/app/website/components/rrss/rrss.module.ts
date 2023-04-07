import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LanguagesModule } from '@app/shared/modules/languages.module';
import { RRSSComponent } from './rrss.component';

@NgModule({
  declarations: [RRSSComponent],
  imports: [CommonModule, LanguagesModule],
  exports: [RRSSComponent],
})
export class RRSSModule {}
