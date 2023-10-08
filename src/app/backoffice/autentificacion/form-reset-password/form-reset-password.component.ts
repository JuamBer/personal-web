import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot, ResolveFn, Router, RouterStateSnapshot } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { MessageService } from 'primeng/api';
import { map } from 'rxjs';
import { appRootTitle } from 'src/app/app.component';
import { AuthService } from 'src/app/shared/services/auth.service';

export const formResetPasswordTitleResolver: ResolveFn<string> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  const translateSrv = inject(TranslateService);
  return translateSrv
    .get('pages.form-reset-password.title')
    .pipe(map((title) => `${appRootTitle} | Form Reset Password`));
};

@Component({
  selector: 'app-form-reset-password',
  templateUrl: './form-reset-password.component.html',
  styleUrls: ['./form-reset-password.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormResetPasswordComponent implements OnInit {
  private messageSrv = inject(MessageService);
  private fb = inject(FormBuilder);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private translateSrv = inject(TranslateService);
  private supabaseSrv = inject(AuthService);

  form: FormGroup;
  returnUrl: string = '/';
  token: string;
  loading: boolean = false;
  errores: string[] = [];

  res: string;

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.token = params['token'];
    });

    this.form = this.fb.group({
      password: [undefined, Validators.required],
      repeat_password: [undefined, Validators.required],
    });
  }

  async onSubmit() {
    if (this.form.invalid) {
      return;
    }
    this.loading = true;

    const { data, error } = await this.supabaseSrv.updatePassword(this.form.value.password);
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
        detail: 'PASSOWRD CHANGED',
      });
    }

    this.form.reset();
    this.loading = false;
  }
}
