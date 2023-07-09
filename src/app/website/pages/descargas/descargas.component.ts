import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-descargas',
  templateUrl: './descargas.component.html',
  styleUrls: ['./descargas.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DescargaComponent implements OnInit {
  private http = inject(HttpClient);

  ngOnInit(): void {
    const a =
      'https://github.com/JuamBer/2DAM-DesarrolloDeInterfaces/releases/download/2dam-di-23/juamber-2dam-di-23.exe';

    this.downloadFile(a);
  }

  downloadFile(url: string): Promise<Blob> {
    return this.http
      .get(url)
      .pipe(map((res: any) => res.blob()))
      .toPromise();
  }
}
