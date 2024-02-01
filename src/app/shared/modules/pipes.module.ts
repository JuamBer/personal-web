import { NgModule } from '@angular/core';
import { CapitalizePipe } from '../pipes/capitalize.pipe';
import { ErrorsPipe } from '../pipes/errors.pipe';
import { IsRequiredPipe } from '../pipes/is-required.pipe';
import { SafePipe } from '../pipes/safe.pipe';
import { SortByPipe } from '../pipes/sort-by.pipe';

@NgModule({
  declarations: [SafePipe, IsRequiredPipe, ErrorsPipe, CapitalizePipe, SortByPipe],
  exports: [SafePipe, IsRequiredPipe, ErrorsPipe, CapitalizePipe, SortByPipe],
})
export class PipesModule {}
