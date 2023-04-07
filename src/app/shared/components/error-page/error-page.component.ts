import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { publicLanguageReducer } from '@app/shared/state/languages/public-language.reducer';
import { PublicLanguageState } from '@app/shared/state/languages/public-language.state';
import { Store } from '@ngrx/store';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-error-page',
  templateUrl: 'error-page.component.html',
  styleUrls: ['error-page.component.scss'],
})
export class ErrorPageComponent implements OnInit {
  // title: string;
  // subtitle: string;
  // text: string;
  urlText: string;
  url: string;

  error: string;
  message: string;
  path: string;
  status: string;
  timestamp: string;

  constructor(
    private translateSrv: TranslateService,
    private publicLanguageStore: Store<PublicLanguageState>,
    private route: ActivatedRoute,
    private location: Location,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.error = params.error;
      this.message = params.message;
      this.path = params.path;
      this.status = params.status;
      this.timestamp = params.timestamp;
    });
    this.translateSrv.onLangChange.subscribe((event: LangChangeEvent) => {
      // this.title = this.translateSrv.instant(
      //   `errors.types.${this.errorType}.title`,
      // );
      // this.subtitle = this.translateSrv.instant(
      //   `errors.types.${this.errorType}.subtitle`,
      // );
      // this.text = this.translateSrv.instant(
      //   `errors.types.${this.errorType}.text`,
      // );
      this.urlText = this.translateSrv.instant(`errors.urlText`);
      this.url = this.translateSrv.instant(`errors.url`);
    });
    this.publicLanguageStore
      .select(publicLanguageReducer.getOne)
      .subscribe((language) => {
        this.translateSrv.use(language ? language.acronym : 'es');
      });
  }
}
