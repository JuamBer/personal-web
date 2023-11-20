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
function trigger(arg0: string, arg1: any[]): any {
  throw new Error('Function not implemented.');
}

function state(arg0: string, arg1: any): any {
  throw new Error('Function not implemented.');
}

function style(arg0: { transform: string }): any {
  throw new Error('Function not implemented.');
}

function animate(arg0: number): any {
  throw new Error('Function not implemented.');
}
