import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/shared/services/auth.service';
@Component({
  selector: 'app-recuperar-password',
  templateUrl: './recuperar-password.component.html',
  styleUrls: ['./recuperar-password.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecuperarPasswordComponent implements OnInit {
  private messageSrv = inject(MessageService);
  private fb = inject(FormBuilder);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private translateSrv = inject(TranslateService);
  private supabaseSrv = inject(AuthService);

  form: FormGroup;
  loading: boolean = false;
  errores: string[] = [];
  res: string;

  ngOnInit(): void {
    this.form = this.fb.group({
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
