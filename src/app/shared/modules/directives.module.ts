import { NgModule } from '@angular/core';
import { LetDirective } from '../directives/app-let.directive';
import { AutoFocusDirective } from '../directives/autofocus.directive';
import { GhostDirective } from '../directives/ghost.directive';
import { LoadingDirective } from '../directives/loading.directive';
import { SkeletonDirective } from '../directives/skeleton.directive';

@NgModule({
  declarations: [SkeletonDirective, AutoFocusDirective, GhostDirective, LoadingDirective, LetDirective],
  imports: [],
  providers: [],
  exports: [SkeletonDirective, AutoFocusDirective, GhostDirective, LoadingDirective, LetDirective],
})
export class DirectivesModule {}
