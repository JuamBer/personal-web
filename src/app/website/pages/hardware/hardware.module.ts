import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LanguagesModule } from '@app/shared/modules/languages.module';
import { PipesModule } from '@app/shared/modules/pipes.module';
import { HardwareRoutingModule } from './hardware-routing.module';
import { HardwareComponent } from './hardware.component';

@NgModule({
  declarations: [HardwareComponent],
  imports: [CommonModule, HardwareRoutingModule, LanguagesModule, PipesModule],
})
export class HardwareModule {}
