import { NgModule } from '@angular/core';
import { LetDirective } from '../directives/app-let.directive';
import { AutoFocusDirective } from '../directives/autofocus.directive';
import { LoadingDirective } from '../directives/loading.directive';

@NgModule({
  declarations: [AutoFocusDirective, LoadingDirective, LetDirective],
  exports: [AutoFocusDirective, LoadingDirective, LetDirective],
})
export class DirectivesModule {}
