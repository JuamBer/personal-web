import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-formulario-recuperacion',
  templateUrl: './formulario-recuperacion.component.html',
  styleUrls: ['./formulario-recuperacion.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormularioRecuperacionComponent implements OnInit {
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
  // logoUrl: string = environment.logo;

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

  async recuperar() {
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
