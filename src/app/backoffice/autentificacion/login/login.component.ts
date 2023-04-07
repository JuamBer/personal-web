import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SupabaseService } from '@app/shared/services/supabase.service';
import { AppState } from '@app/shared/state/account/account.reducer';
import { environment } from '@env/environment';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  formLogin: FormGroup;
  returnUrl: string = '/';
  loading: boolean = false;
  errores: string[] = [];
  nombre: string = environment.nombre;
  logoUrl: string = environment.logo;
  res: string;
  constructor(
    private messageSrv: MessageService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private translateSrv: TranslateService,
    private supabaseSrv: SupabaseService,
    private accountStore: Store<AppState>,
  ) {}

  ngOnInit(): void {
    this.returnUrl =
      this.route.snapshot.queryParams['returnUrl'] || '/backoffice';

    this.form = this.formBuilder.group({
      email: [undefined, Validators.required],
      // password: [undefined, Validators.required],
    });

    this.formLogin = this.formBuilder.group({
      email: [undefined, Validators.required],
      password: [undefined, Validators.required],
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
