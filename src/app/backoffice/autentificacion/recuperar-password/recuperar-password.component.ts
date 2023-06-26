import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/shared/services/auth.service';
@Component({
  selector: 'app-recuperar-password',
  templateUrl: './recuperar-password.component.html',
  styleUrls: ['./recuperar-password.component.scss'],
})
export class RecuperarPasswordComponent implements OnInit {
  form: FormGroup;
  loading: boolean = false;
  errores: string[] = [];
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
    this.form = this.formBuilder.group({
      correo: [undefined, Validators.required],
    });
  }

  async recuperar() {
    if (this.form.invalid) {
      return;
    }
    this.loading = true;

    const { data, error } = await this.supabaseSrv.sendResetPassword(this.form.value.correo);
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
