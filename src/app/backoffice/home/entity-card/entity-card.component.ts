import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { AppState } from 'src/app/shared/state/app-state';

@Component({
  selector: 'app-entity-card',
  templateUrl: './entity-card.component.html',
  styleUrls: ['./entity-card.component.scss'],
})
export class EntityCardComponent implements OnInit {
  @Input() loading: boolean;
  @Input() show: boolean;
  @Input() title: string;
  @Input() icon: string;
  @Input() url: string;
  @Input() count: string;

  constructor(private translateSrv: TranslateService, private router: Router, private store: Store<AppState>) {}

  ngOnInit(): void {}

  goTo(url: string) {
    this.router.navigate([url]);
  }
}
