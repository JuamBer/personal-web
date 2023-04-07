import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProyectsStateModule } from '@app/backoffice/tablas/proyects/state/proyect-state.module';
import { ProyectsRoutingModule } from './proyects-routing.module';
import { ProyectsComponent } from './proyects.component';

@NgModule({
  declarations: [ProyectsComponent],
  imports: [CommonModule, ProyectsRoutingModule, ProyectsStateModule],
})
export class ProyectsModule {}
