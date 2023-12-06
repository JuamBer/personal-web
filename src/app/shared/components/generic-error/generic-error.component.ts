import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  ViewChild,
  inject,
} from '@angular/core';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-generic-error',
  templateUrl: './generic-error.component.html',
  styleUrls: ['./generic-error.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GenericErrorComponent implements AfterViewInit {
  private ref = inject(ChangeDetectorRef);

  @ViewChild('error') error!: ElementRef<HTMLDivElement>;
  errorWidth: number = 0;

  get faTriangleExclamation() {
    return faTriangleExclamation;
  }

  ngAfterViewInit(): void {
    this.errorWidth = this.error.nativeElement.offsetWidth;
    this.ref.detectChanges();
  }
}
