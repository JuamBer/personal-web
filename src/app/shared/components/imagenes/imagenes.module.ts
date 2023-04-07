import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { PipesModule } from '@app/shared/modules/pipes.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FileUploadModule } from 'primeng/fileupload';
import { GalleriaModule } from 'primeng/galleria';
import { TableModule } from 'primeng/table';
import { NingunResultadoModule } from '../ningun-resultado/ningun-resultado.module';
import { ImagenesFormComponent } from './imagenes-form/imagenes-form.component';
import { ImagenesViewComponent } from './imagenes-view/imagenes-view.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/');
}

@NgModule({
  declarations: [ImagenesFormComponent, ImagenesViewComponent],
  imports: [
    CommonModule,

    FileUploadModule,
    GalleriaModule,
    TableModule,

    PipesModule,
    NingunResultadoModule,

    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
      isolate: true,
    }),
  ],
  exports: [ImagenesFormComponent, ImagenesViewComponent],
})
export class ImagenesModule {}
