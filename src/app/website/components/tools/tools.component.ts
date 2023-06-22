import { Component, Input, OnInit } from '@angular/core';
import { Skill } from '@app/backoffice/tables/skill/models/skill.model';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss'],
})
export class ToolsComponent implements OnInit {
  @Input() entities: Skill[] = [];
  @Input() loading: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
