import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ningun-resultado',
  templateUrl: './ningun-resultado.component.html',
  styleUrls: ['./ningun-resultado.component.scss'],
})
export class NingunResultadoComponent implements OnInit {
  @Input() icon: string;
  @Input() text: string;
  @Input() height: string;

  constructor() {}

  ngOnInit(): void {}
}
