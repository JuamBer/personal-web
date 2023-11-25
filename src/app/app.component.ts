import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { environment } from '@env/environment';
import { Store } from '@ngrx/store';
import { publicLanguageActions } from './shared/state/languages/public-language.actions';

export const appRootTitle = 'Juan Sáez García';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  private store = inject(Store);

  ngOnInit() {
    console.info('Running with configuration: ', environment.name);
    this.store.dispatch(publicLanguageActions.loadAll({}));
  }
}
