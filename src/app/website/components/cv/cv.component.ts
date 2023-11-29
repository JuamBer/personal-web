import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvComponent {
  downloadCV() {
    const link = document.createElement('a');
    link.setAttribute('type', 'hidden');
    link.href = 'assets/files/cv.pdf';
    link.download = 'CV - JUAN SÁEZ GARCÍA';
    document.body.appendChild(link);
    link.click();
    link.remove();
  }
}
