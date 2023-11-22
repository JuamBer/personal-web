import { animate, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, Input, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Language } from 'src/app/backoffice/tables/language/models/language.model';
import { Skill } from 'src/app/backoffice/tables/skill/models/skill.model';
import { publicLanguageReducer } from 'src/app/shared/state/languages/public-language.reducer';
import { TranslationUtils } from 'src/app/shared/utils/translation.utils';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('animation', [transition(':enter', [style({ width: '0%' }), animate('1s', style({ width: '100%' }))])]),
  ],
})
export class ToolsComponent implements OnInit {
  private store = inject(Store);

  @Input() entities: Skill[] = [];
  @Input() loading: boolean = false;
  language$: Observable<Language> = this.store.select(publicLanguageReducer.getOne);

  ngOnInit(): void {}

  get getTranslation() {
    return TranslationUtils.getTranslation;
  }
}
