import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CreateFotoDto, Foto } from '@app/shared/models/foto.model';
import { ModalMode } from '@app/shared/models/modal-config/modal-mode';
import { TranslateService } from '@ngx-translate/core';
import { MessageService } from 'primeng/api';
import { FileUpload } from 'primeng/fileupload';

@Component({
  selector: 'app-imagenes-form',
  templateUrl: './imagenes-form.component.html',
  styleUrls: ['./imagenes-form.component.scss'],
})
export class ImagenesFormComponent implements OnInit {
  @Input() modalMode: ModalMode;
  @Input() fotos: Foto[] = [];
  @Output() fotosEvent = new EventEmitter<Foto[]>();
  @Output() imagenesFormEvent = new EventEmitter<any>();
  fileUpload: FileUpload;

  cols: any[] = [
    {
      field: 'foto',
      header: 'Foto',
    },
    {
      field: 'name',
      header: 'Nombre',
    },
  ];

  constructor(
    private translateSrv: TranslateService,
    private messageSrv: MessageService,
  ) {
    translateSrv.setDefaultLang('es');
  }

  ngOnInit(): void {}

  async onSelect(event: any) {
    if (event.originalEvent.type !== 'change') {
      return;
    }

    let files = event.files;

    for (let index = 0; index < files.length; index++) {
      const file: File = files[index];

      const foto: CreateFotoDto = {
        datos: await this.fileToPhoto(file),
        nombre: file.name,
        orden: this.fotos.length + index,
      };
      this.imagenesFormEvent.emit({
        event: 'CREATE_FOTO',
        data: foto,
      });

      // if (!this.fotos.find(item => {
      //   const itemString: string = JSON.stringify({
      //     id: null,
      //     datos: item.datos,
      //     nombre: item.nombre,
      //     orden: item.orden,
      //     url: '',
      //   });

      //   const fotoString: string = JSON.stringify({
      //     id: null,
      //     datos: foto.datos,
      //     nombre: foto.nombre,
      //     orden: foto.orden,
      //     url: '',
      //   });

      //   if (itemString == fotoString) {
      //     return true;
      //   }
      //   return false;
      // })) {
      //   const copyFotos = [...this.fotos];
      //   copyFotos.push(foto);
      //   this.fotos = copyFotos;
      // }
    }

    this.fotosEvent.emit([...this.fotos]);
    files = [];
  }

  onRemove(foto: Foto) {
    this.imagenesFormEvent.emit({
      event: 'DELETE_FOTO',
      data: foto,
    });
  }

  onRowReorder(foto: Foto, index: number, type: 'up' | 'down') {
    let dragFoto: Foto;
    let dragIndex: number;
    let dropFoto: Foto;
    let dropIndex: number;

    this.fotos.forEach((f, i) => {
      if (i === index) {
        dragFoto = f;
        dragIndex = i;
      } else {
        switch (type) {
          case 'up':
            if (i === index - 1) {
              dropFoto = f;
              dropIndex = i;
            }
            break;
          case 'down':
            if (i === index + 1) {
              dropFoto = f;
              dropIndex = i;
            }
            break;
        }
      }
    });
    let reorderedFotos: Foto[] = [...this.fotos];
    reorderedFotos[dragIndex] = { ...dropFoto, orden: dragFoto.orden };
    reorderedFotos[dropIndex] = { ...dragFoto, orden: dropFoto.orden };

    reorderedFotos.forEach((foto) => {
      this.imagenesFormEvent.emit({
        event: 'UPDATE_FOTO',
        data: foto,
      });
    });
  }

  fileToPhoto(file: File) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve((<string>reader.result).split(',').pop());
      reader.onerror = (error) => reject(error);
    });
  }

  reset() {
    if (this.fileUpload) {
      this.fileUpload.clear();
    }
    this.fotos = [];
    this.fotosEvent.emit([...this.fotos]);
  }
}
