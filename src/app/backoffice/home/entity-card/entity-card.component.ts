import { ChangeDetectionStrategy, Component, Input, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entity-card',
  templateUrl: './entity-card.component.html',
  styleUrls: ['./entity-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EntityCardComponent implements OnInit {
  private router = inject(Router);

  @Input() loading: boolean;
  @Input() show: boolean;
  @Input() title: string;
  @Input() icon: string;
  @Input() url: string;
  @Input() count: string;

  ngOnInit(): void {}

  goTo(url: string) {
    this.router.navigate([url]);
  }
}
