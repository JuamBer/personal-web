import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot, ResolveFn, Router, RouterStateSnapshot } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { map } from 'rxjs';
import { appRootTitle } from 'src/app/app.component';
import { AuthService } from 'src/app/shared/services/auth.service';
import { FormUtils } from 'src/app/shared/utils/form-utils';

export const loginTitleResolver: ResolveFn<string> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const translateSrv = inject(TranslateService);
  return translateSrv.get('pages.login.title').pipe(map((title) => `${appRootTitle} | Login`));
};

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
  private fb = inject(FormBuilder);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private supabaseSrv = inject(AuthService);

  formGroup: FormGroup = this.fb.group({
    email: [undefined, [Validators.required, Validators.email]],
    password: [undefined, Validators.required],
  });
  returnUrl: string = this.route.snapshot.queryParams['returnUrl'] || '/backoffice';
  loading: boolean = false;

  ngOnInit(): void {
    document.body.classList.remove('dark', 'light');
    document.body.classList.add('light');
  }

  async onSubmitLogin(): Promise<void> {
    if (this.formGroup.invalid) {
      FormUtils.markAllAsDirtyAndTouched(this.formGroup);
      return;
    }

    try {
      this.loading = true;
      const email = this.formGroup.value.email as string;
      const pass = this.formGroup.value.password as string;
      const { data, error } = await this.supabaseSrv.signInLogin(email, pass);

      if (error) throw error;
      this.router.navigate(['backoffice']);
    } finally {
      this.formGroup.reset();
      this.loading = false;
    }
  }
}
