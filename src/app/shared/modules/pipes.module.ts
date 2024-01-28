import { NgModule } from '@angular/core';
import { CapitalizePipe } from '../pipes/capitalize.pipe';
import { ErrorsPipe } from '../pipes/errors.pipe';
import { IsRequiredPipe } from '../pipes/is-required.pipe';
import { SafePipe } from '../pipes/safe.pipe';
import { SorByPipe } from '../pipes/sort-by.pipe';

@NgModule({
  declarations: [SafePipe, IsRequiredPipe, ErrorsPipe, CapitalizePipe, SorByPipe],
  exports: [SafePipe, IsRequiredPipe, ErrorsPipe, CapitalizePipe, SorByPipe],
})
export class PipesModule {}
