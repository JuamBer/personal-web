import { CommonModule, DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { PipesModule } from '@app/shared/modules/pipes.module';
import { TruncatePipe } from '@app/shared/pipes/truncate.pipe';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { PaginatorModule } from 'primeng/paginator';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { CampoComponent } from './campo/campo.component';
import { TablaGenericaComponent } from './tabla-generica.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/');
}
@NgModule({
  declarations: [TablaGenericaComponent, CampoComponent, TruncatePipe],
  exports: [TablaGenericaComponent, CampoComponent],
  imports: [
    PaginatorModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    CalendarModule,
    ToastModule,
    PipesModule,
    DropdownModule,

    CommonModule,

    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
      isolate: true,
    }),
  ],
  providers: [DatePipe],
})
export class TablaGenericaModule {}
