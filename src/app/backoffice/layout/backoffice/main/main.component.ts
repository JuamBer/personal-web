import { isPlatformBrowser } from '@angular/common';
import { AfterContentInit, ChangeDetectionStrategy, Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-main',
  styleUrls: ['./main.component.scss'],
  templateUrl: './main.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent implements OnInit, AfterContentInit {
  // eslint-disable-next-line @typescript-eslint/ban-types
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    this.handleColorMode();
  }

  ngAfterContentInit() {
    this.handleColorMode();
  }

  handleColorMode() {
    if (isPlatformBrowser(this.platformId)) {
      document.body.classList.remove('dark', 'light');
      document.body.classList.add('light');
    }
  }
}
