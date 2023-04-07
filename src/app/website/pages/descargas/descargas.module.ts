import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LanguagesModule } from '@app/shared/modules/languages.module';
import { PipesModule } from '@app/shared/modules/pipes.module';
import { DescargaRoutingModule } from './descargas-routing.module';
import { DescargaComponent } from './descargas.component';

@NgModule({
  declarations: [DescargaComponent],
  imports: [CommonModule, DescargaRoutingModule, LanguagesModule, PipesModule],
})
export class DescargaModule {}
