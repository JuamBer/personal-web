import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppState } from '@app/shared/state/app-state';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-group-title',
  templateUrl: './group-title.component.html',
  styleUrls: ['./group-title.component.scss'],
})
export class GroupTitleComponent implements OnInit {
  @Input() loading: boolean;
  @Input() show: boolean;
  @Input() title: string;

  constructor(
    private translateSrv: TranslateService,
    private router: Router,
    private store: Store<AppState>,
  ) {}

  ngOnInit(): void {}
}
