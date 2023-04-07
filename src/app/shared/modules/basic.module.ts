import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectivesModule } from './directives.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, DirectivesModule],
  exports: [CommonModule, FormsModule, ReactiveFormsModule, DirectivesModule],
  providers: [],
})
export class BasicModule {}
