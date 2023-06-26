import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { AppState } from 'src/app/shared/state/app-state';

@Component({
  selector: 'app-group-title',
  templateUrl: './group-title.component.html',
  styleUrls: ['./group-title.component.scss'],
})
export class GroupTitleComponent implements OnInit {
  @Input() loading: boolean;
  @Input() show: boolean;
  @Input() title: string;

  constructor(private translateSrv: TranslateService, private router: Router, private store: Store<AppState>) {}

  ngOnInit(): void {}
}
