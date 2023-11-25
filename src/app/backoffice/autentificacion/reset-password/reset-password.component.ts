import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot, ResolveFn, Router, RouterStateSnapshot } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { MessageService } from 'primeng/api';
import { map } from 'rxjs';
import { appRootTitle } from 'src/app/app.component';
import { AuthService } from 'src/app/shared/services/auth.service';

export const resetPasswordTitleResolver: ResolveFn<string> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  const translateSrv = inject(TranslateService);
  return translateSrv.get('pages.reset-password.title').pipe(map((title) => `${appRootTitle} | Reset Password`));
};

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResetPasswordComponent implements OnInit {
  private messageSrv = inject(MessageService);
  private fb = inject(FormBuilder);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private translateSrv = inject(TranslateService);
  private supabaseSrv = inject(AuthService);

  form: FormGroup;
  loading: boolean = false;
  res: string;

  ngOnInit(): void {
    this.form = this.fb.group({
      email: [undefined, [Validators.required, Validators.email]],
    });
  }

  async onSubmit() {
    if (this.form.invalid) {
      return;
    }
    this.loading = true;

    const { data, error } = await this.supabaseSrv.sendResetPassword(this.form.value.email);
    if (error instanceof Error) {
      this.messageSrv.add({
        severity: 'warn',
        summary: 'Error',
        detail: error.message,
      });
    } else {
      this.res = JSON.stringify(data);
      this.messageSrv.add({
        severity: 'success',
        summary: 'Success',
        detail: 'CHECK YOUR EMAIL',
      });
    }

    this.form.reset();
    this.loading = false;
  }
}
