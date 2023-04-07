import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'fileToPhoto',
})
export class FileToPhotoPipe implements PipeTransform {
  transform(file: File) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }
}
