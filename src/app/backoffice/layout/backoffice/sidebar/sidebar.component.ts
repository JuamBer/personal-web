import { Component } from '@angular/core';
import { MainComponent } from '../main/main.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SideBarComponent {
  constructor(public app: MainComponent) {}
}
