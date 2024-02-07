import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, Component, Inject, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ResolveFn, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { map } from 'rxjs';
import { appRootTitle } from 'src/app/app.component';
import { AuthService } from 'src/app/shared/services/auth.service';
import { LangService } from 'src/app/shared/services/lang.service';
import { FormUtils } from 'src/app/shared/utils/form-utils';

export const loginTitleResolver: ResolveFn<string> = () => {
  const translateSrv = inject(TranslateService);
  return translateSrv.get('pages.login.title').pipe(map(() => `${appRootTitle} | Login`));
};

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit, AfterViewInit {
  private fb = inject(FormBuilder);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private supabaseSrv = inject(AuthService);
  private langSrv = inject(LangService);

  formGroup: FormGroup = this.fb.nonNullable.group({
    email: [undefined, [Validators.required, Validators.email]],
    password: [undefined, Validators.required],
  });
  returnUrl: string = this.route.snapshot.queryParams['returnUrl'] || '/backoffice';
  loading: boolean = false;

  lang$ = this.langSrv.lang$;
  lang = this.langSrv.lang;

  // eslint-disable-next-line @typescript-eslint/ban-types
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    this.handleColorMode();
  }

  ngAfterViewInit() {
    this.handleColorMode();
  }

  handleColorMode() {
    if (isPlatformBrowser(this.platformId)) {
      document.body.classList.remove('dark', 'light');
      document.body.classList.add('light');
    }
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
      const { error } = await this.supabaseSrv.signInLogin(email, pass);

      if (error) throw error;
      this.router.navigate([this.lang(), 'backoffice']);
    } finally {
      this.formGroup.reset();
      this.loading = false;
    }
  }
}
