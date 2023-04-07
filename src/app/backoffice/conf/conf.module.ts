import { CommonModule } from '@angular/common';
import { forwardRef, NgModule } from '@angular/core';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@app/shared/guards/auth.guard';
import { BasicModule } from '@app/shared/modules/basic.module';
import { DirectivesModule } from '@app/shared/modules/directives.module';
import { LanguagesModule } from '@app/shared/modules/languages.module';
import { PrimeNgModule } from '@app/shared/modules/primeng.module';
import { ButtonModule } from 'primeng/button';
import { ColorPickerModule } from 'primeng/colorpicker';
import { FileUpload, FileUploadModule } from 'primeng/fileupload';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { SkeletonModule } from 'primeng/skeleton';
import { ConfComponent } from './conf.component';

const routes: Routes = [
  {
    path: '',
    component: ConfComponent,
    canActivate: [AuthGuard],
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [ConfComponent],
  imports: [
    CommonModule,
    FileUploadModule,
    BasicModule,
    FormsModule,
    DirectivesModule,
    RouterModule.forChild(routes),
    ButtonModule,
    SkeletonModule,
    PrimeNgModule,
    ColorPickerModule,
    LanguagesModule,
    InputTextareaModule,
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FileUpload),
      multi: true,
    },
  ],
})
export class ConfModule {}
