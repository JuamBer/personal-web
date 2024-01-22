import { NgModule } from '@angular/core';
import { AppAutoFocusDirective } from '../directives/APP-autofocus.directive';
import { LetDirective } from '../directives/app-let.directive';
import { LoadingDirective } from '../directives/loading.directive';

@NgModule({
  declarations: [AppAutoFocusDirective, LoadingDirective, LetDirective],
  exports: [AppAutoFocusDirective, LoadingDirective, LetDirective],
})
export class DirectivesModule {}
