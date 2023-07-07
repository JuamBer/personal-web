import { NgModule } from '@angular/core';
import { CapitalizePipe } from '../pipes/capitalize.pipe';
import { ErrorsPipe } from '../pipes/errors.pipe';
import { IsRequiredPipe } from '../pipes/is-required.pipe';
import { SafePipe } from '../pipes/safe.pipe';

@NgModule({
  declarations: [SafePipe, IsRequiredPipe, ErrorsPipe, CapitalizePipe],
  exports: [SafePipe, IsRequiredPipe, ErrorsPipe, CapitalizePipe],
})
export class PipesModule {}
