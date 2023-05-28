import { NgModule } from '@angular/core';
import { AutoFocusDirective } from '../directives/autofocus.directive';
import { GhostDirective } from '../directives/ghost.directive';
import { SkeletonDirective } from '../directives/skeleton.directive';

@NgModule({
  declarations: [SkeletonDirective, AutoFocusDirective, GhostDirective],
  imports: [],
  providers: [],
  exports: [SkeletonDirective, AutoFocusDirective, GhostDirective],
})
export class DirectivesModule {}
