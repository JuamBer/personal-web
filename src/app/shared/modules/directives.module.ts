import { NgModule } from '@angular/core';
import { AutoFocusDirective } from '../directives/autofocus.directive';
import { SkeletonDirective } from '../directives/skeleton.directive';

@NgModule({
  declarations: [SkeletonDirective, AutoFocusDirective],
  imports: [],
  providers: [],
  exports: [SkeletonDirective, AutoFocusDirective],
})
export class DirectivesModule {}
