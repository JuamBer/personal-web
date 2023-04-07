import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rrss',
  templateUrl: './rrss.component.html',
  styleUrls: ['./rrss.component.scss'],
})
export class RRSSComponent implements OnInit {
  @Input() rrss: any[] = [];

  constructor() {}

  ngOnInit(): void {}
}
