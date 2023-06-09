import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
  private messageSrv = inject(MessageService);
  private fb = inject(FormBuilder);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private translateSrv = inject(TranslateService);
  private supabaseSrv = inject(AuthService);
  private store = inject(Store);

  form: FormGroup;
  formLogin: FormGroup;
  returnUrl: string = '/';
  loading: boolean = false;
  errores: string[] = [];
  // nombre: string = environment.nombre;
  // logoUrl: string = environment.logo;
  res: string;

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/backoffice';

    this.form = this.fb.group({
      email: [undefined, Validators.required],
      // password: [undefined, Validators.required],
    });

    this.formLogin = this.fb.group({
      email: [undefined, Validators.required],
      password: [undefined],
    });
  }

  async onSubmit(): Promise<void> {
    try {
      this.loading = true;
      const email = this.form.value.email as string;
      const { data, error } = await this.supabaseSrv.signIn(email);
      if (error) throw error;
      this.res = JSON.stringify(data);
      this.messageSrv.add({
        severity: 'success',
        summary: 'Success',
        detail: 'CHECK YOUR EMAIL',
      });
    } catch (error) {
      if (error instanceof Error) {
        this.messageSrv.add({
          severity: 'warn',
          summary: 'Error',
          detail: error.message,
        });
      }
    } finally {
      this.form.reset();
      this.loading = false;
    }
  }

  async onSubmitLogin(): Promise<void> {
    try {
      this.loading = true;
      const email = this.formLogin.value.email as string;
      const pass = this.formLogin.value.password as string;
      const { data, error } = await this.supabaseSrv.signIn(email);

      // const { data, error } = await this.supabaseSrv.signInLogin(email, pass);
      if (error) throw error;
      this.res = JSON.stringify(data);

      this.messageSrv.add({
        severity: 'success',
        summary: 'Success',
        detail: 'CHECK YOUR EMAIL',
      });
    } catch (error) {
      if (error instanceof Error) {
        this.messageSrv.add({
          severity: 'warn',
          summary: 'Error',
          detail: error.message,
        });
      }
    } finally {
      this.formLogin.reset();
      this.loading = false;
    }
  }
}
