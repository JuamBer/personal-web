import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateModule } from '@ngx-translate/core';
import { DirectivesModule } from 'src/app/shared/modules/directives.module';
import { LanguagesModule } from 'src/app/shared/modules/languages.module';
import { PipesModule } from 'src/app/shared/modules/pipes.module';
import { GenericErrorComponent } from './generic-error.component';

@NgModule({
  declarations: [GenericErrorComponent],
  imports: [CommonModule, LanguagesModule, TranslateModule, PipesModule, DirectivesModule, FontAwesomeModule],
  exports: [GenericErrorComponent],
})
export class GenericErrorModule {}
