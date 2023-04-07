import { Component, OnInit } from '@angular/core';
import { Mount } from '@app/backoffice/tablas/mounts/models/mount.model';

@Component({
  selector: 'app-hardware',
  templateUrl: './hardware.component.html',
  styleUrls: ['./hardware.component.scss'],
})
export class HardwareComponent implements OnInit {
  mounts: Mount[] = [];

  constructor() {}

  ngOnInit(): void {}
}
