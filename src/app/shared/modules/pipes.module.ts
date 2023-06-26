import { NgModule } from '@angular/core';
import { ErrorsPipe } from '../pipes/errors.pipe';
import { IsRequiredPipe } from '../pipes/is-required.pipe';
import { SafePipe } from '../pipes/safe.pipe';

@NgModule({
  declarations: [SafePipe, IsRequiredPipe, ErrorsPipe],
  exports: [SafePipe, IsRequiredPipe, ErrorsPipe],
})
export class PipesModule {}
