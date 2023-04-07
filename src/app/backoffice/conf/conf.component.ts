import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Config } from '@app/backoffice/conf/models/config.model';
import { environment } from '@env/environment';
import { TranslateService } from '@ngx-translate/core';
import { Observable, zip } from 'rxjs';
import { ConfiguracionService } from './conf.service';

@Component({
  selector: 'app-conf',
  templateUrl: './conf.component.html',
  styleUrls: ['./conf.component.scss'],
})
export class ConfComponent implements OnInit {
  // idiomas: Idioma[] = environment.idiomas;
  // idiomasActivos: Idioma[] = environment.idiomasActivos;
  paginators: Number[] = environment.paginators;
  form: FormGroup;
  errores: string[] = [];

  loadingConfiguraciones: boolean = false;
  te: Observable<Config> = this.confSrv.getOneByTag('TOKEN_EXPIRATION');
  prte: Observable<Config> = this.confSrv.getOneByTag(
    'PASSWORD_RESET_TOKEN_EXPIRATION',
  );
  tsk: Observable<Config> = this.confSrv.getOneByTag('TOKEN_SECRET_KEY');

  // logo: Observable<Blob> = this.http.get(environment.logo, {
  //   responseType: 'blob',
  // });
  // favicon: Observable<Blob> = this.http.get(environment.favicon, {
  //   responseType: 'blob',
  // });
  // configFileText: Observable<any> = this.http.get(environment.configuration, {
  //   responseType: 'text',
  // });

  privacyPolicies: Observable<Config> =
    this.confSrv.getOneByTag('PRIVACY_POLICIES');
  cookiePolicies: Observable<Config> =
    this.confSrv.getOneByTag('COOKIE_POLICIES');
  legalWarning: Observable<Config> = this.confSrv.getOneByTag('LEGAL_WARNING');

  constructor(
    private http: HttpClient,
    private translateSrv: TranslateService,
    private formBuilder: FormBuilder,
    private confSrv: ConfiguracionService,
  ) {
    this.translateSrv.setDefaultLang('es');
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      // idioma: [environment.defaultIdioma, [Validators.required]],
      // idiomasActivos: [environment.idiomasActivos, [Validators.required]],
      // paginator: [environment.defaultPaginator, [Validators.required]],
      // nombre: [environment.nombre, [Validators.required]],
      favicon: [undefined, [Validators.required]],
      logo: [undefined, [Validators.required]],

      tokenExpiration: [undefined, [Validators.required]],
      passwordResetTokenExpiration: [undefined, [Validators.required]],
      tokenSecretKey: [undefined, [Validators.required]],

      tipografiaTitle: [undefined, [Validators.required]],
      tipografiaTexto: [undefined, [Validators.required]],
      colorPrimario: [undefined, [Validators.required]],
      colorSecundario: [undefined, [Validators.required]],
      colorComplementario: [undefined, [Validators.required]],

      privacyPolicies: [undefined, [Validators.required]],
      cookiePolicies: [undefined, [Validators.required]],
      legalWarning: [undefined, [Validators.required]],
    });

    this.loadingConfiguraciones = true;
    zip(
      this.te,
      this.prte,
      this.tsk,
      // this.logo,
      // this.favicon,
      this.privacyPolicies,
      this.cookiePolicies,
      this.legalWarning,
    ).subscribe((configuraciones) => {
      this.loadingConfiguraciones = false;
      // this.form.controls['tokenExpiration'].setValue(configuraciones[0].valor);
      // this.form.controls['passwordResetTokenExpiration'].setValue(
      //   configuraciones[1].valor,
      // );
      // this.form.controls['tokenSecretKey'].setValue(configuraciones[2].valor);
      // this.form.controls['privacyPolicies'].setValue(configuraciones[5].valor);
      // this.form.controls['cookiePolicies'].setValue(configuraciones[6].valor);
      // this.form.controls['legalWarning'].setValue(configuraciones[7].valor);

      const reader = new FileReader();
      reader.onloadend = () => {
        var base64data = reader.result;
      };

      // reader.readAsDataURL(configuraciones[3]);
      // this.form.controls['logo'].setValue([configuraciones[3]]);
      // this.form.controls['favicon'].setValue([configuraciones[4]]);
    });

    // this.configFileText.subscribe((config) => {});
  }

  updateConfiguration() {
    this.confSrv
      .updateOneByTag('PRIVACY_POLICIES', this.form.value.privacyPolicies)
      .subscribe();
    this.confSrv
      .updateOneByTag('COOKIE_POLICIES', this.form.value.cookiePolicies)
      .subscribe();
    this.confSrv
      .updateOneByTag('LEGAL_WARNING', this.form.value.legalWarning)
      .subscribe();
  }
}
