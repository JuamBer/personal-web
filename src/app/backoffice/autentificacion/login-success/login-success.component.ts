import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-success',
  templateUrl: './login-success.component.html',
  styleUrls: ['./login-success.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginSuccessComponent implements OnInit {
  ngOnInit(): void {}
}
