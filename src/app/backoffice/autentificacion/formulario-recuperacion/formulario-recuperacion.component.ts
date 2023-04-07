import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '@app/shared/services/auth.service';
import { environment } from '@env/environment';
import { TranslateService } from '@ngx-translate/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-formulario-recuperacion',
  templateUrl: './formulario-recuperacion.component.html',
  styleUrls: ['./formulario-recuperacion.component.scss'],
})
export class FormularioRecuperacionComponent implements OnInit {
  form: FormGroup;
  returnUrl: string = '/';
  token: string;
  loading: boolean = false;
  errores: string[] = [];
  logoUrl: string = environment.logo;

  res: string;

  constructor(
    private messageSrv: MessageService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private translateSrv: TranslateService,
    private supabaseSrv: AuthService,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.token = params['token'];
    });

    this.form = this.formBuilder.group({
      password: [undefined, Validators.required],
      repeat_password: [undefined, Validators.required],
    });
  }

  async recuperar() {
    if (this.form.invalid) {
      return;
    }
    this.loading = true;

    const { data, error } = await this.supabaseSrv.updatePassword(
      this.form.value.password,
    );
    if (error instanceof Error) {
      this.messageSrv.add({
        severity: 'warn',
        summary: 'Error',
        detail: error.message,
      });
    } else {
      console.log(data);
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
