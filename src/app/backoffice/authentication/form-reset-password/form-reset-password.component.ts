import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ResolveFn } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { MessageService } from 'primeng/api';
import { map } from 'rxjs';
import { appRootTitle } from 'src/app/app.component';
import { AuthService } from 'src/app/shared/services/auth.service';

export const formResetPasswordTitleResolver: ResolveFn<string> = () => {
  const translateSrv = inject(TranslateService);
  return translateSrv.get('pages.form-reset-password.title').pipe(map(() => `${appRootTitle} | Form Reset Password`));
};

@Component({
  selector: 'app-form-reset-password',
  templateUrl: './form-reset-password.component.html',
  styleUrls: ['./form-reset-password.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormResetPasswordComponent {
  private messageSrv = inject(MessageService);
  private fb = inject(FormBuilder);
  private supabaseSrv = inject(AuthService);

  form: FormGroup = this.fb.group({
    password: [undefined, Validators.required],
    repeat_password: [undefined, Validators.required],
  });
  returnUrl: string = '/';
  loading: boolean = false;

  async onSubmit() {
    if (this.form.invalid) {
      return;
    }
    this.loading = true;

    const { error } = await this.supabaseSrv.updatePassword(this.form.value.password);
    if (error instanceof Error) {
      this.messageSrv.add({
        severity: 'warn',
        summary: 'Error',
        detail: error.message,
      });
    } else {
      this.messageSrv.add({
        severity: 'success',
        summary: 'Success',
        detail: 'PASSWORD CHANGED',
      });
    }

    this.form.reset();
    this.loading = false;
  }
}
