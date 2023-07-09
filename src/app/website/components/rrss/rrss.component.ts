import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rrss',
  templateUrl: './rrss.component.html',
  styleUrls: ['./rrss.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RRSSComponent implements OnInit {
  @Input() rrss: any[] = [];

  ngOnInit(): void {}
}
