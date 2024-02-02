import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';

import { animate, state, style, transition, trigger } from '@angular/animations';
import { toSignal } from '@angular/core/rxjs-interop';
import { ResolveFn } from '@angular/router';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { filter, map } from 'rxjs/operators';
import { appRootTitle } from 'src/app/app.component';
import { skillTypeActions } from 'src/app/backoffice/tables/skill-type/state/skill-type.actions';
import { skillTypeReducer } from 'src/app/backoffice/tables/skill-type/state/skill-type.reducer';
import { TranslationProvider } from 'src/app/shared/models/translation-provider.model';
import { ActionStatus, ActionType } from 'src/app/shared/state/common/common-state';
import { addActionId } from 'src/app/shared/state/common/common.actions';
import { publicLanguageReducer } from 'src/app/shared/state/languages/public-language.reducer';
import { SocialNetwork } from '../../components/social-networks/models/social-network.model';

export const homeTitleResolver: ResolveFn<string> = () => {
  const translateSrv = inject(TranslateService);
  return translateSrv.get('pages.home.title').pipe(map((title) => `${appRootTitle} | ${title}`));
};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('enterAnimation', [
      state(
        'void',
        style({
          transform: 'scale(0.5)',
          opacity: 0,
        }),
      ),
      state(
        '*',
        style({
          transform: 'scale(1)',
          opacity: 1,
        }),
      ),
      transition(':enter', animate('500ms ease-out')),
    ]),
  ],
})
export class HomeComponent extends TranslationProvider implements OnInit, AfterViewInit {
  private store = inject(Store);
  private translateSrv = inject(TranslateService);

  language$ = this.store.select(publicLanguageReducer.getOne);
  language = toSignal(this.language$);

  skillTypes$ = this.store.select(skillTypeReducer.getAll);
  skillTypes = toSignal(this.skillTypes$, {
    initialValue: [],
  });

  skillTypesActionStatus$ = this.store.select(skillTypeReducer.getAction).pipe(
    filter((action) => !!action && action.type === ActionType.LOAD_MANY),
    // eslint-disable-next-line @ngrx/avoid-mapping-selectors
    map((action) => (action ? action.status : ActionStatus.SUCCESS)),
  );
  skillTypesActionStatus = toSignal(this.skillTypesActionStatus$, {
    initialValue: ActionStatus.SUCCESS,
  });

  socialNetworks: SocialNetwork[] = [
    {
      name: 'GitHub',
      url: 'https://github.com/JuamBer',
      icon: 'fa-brands fa-github',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/juamber/',
      icon: 'fa-brands fa-linkedin',
    },
    {
      name: 'StackOverflow',
      url: 'https://stackoverflow.com/users/8794462/juamber?tab=profile',
      icon: 'fa-brands fa-stack-overflow',
    },
  ];

  ngAfterViewInit() {
    this.store
      .select(publicLanguageReducer.getOne)
      .pipe(filter((i) => !!i))
      .subscribe((language) => {
        this.translateSrv.use(language!.acronym);
      });
  }

  ngOnInit() {
    this.skillTypes$.subscribe((skillTypes) => {
      if (!skillTypes.length) {
        this.store.dispatch(
          skillTypeActions.loadAll(
            addActionId({
              feedback: new Set([ActionStatus.ERROR]),
            }),
          ),
        );
      }
    });
  }

  get ActionStatus() {
    return ActionStatus;
  }
}
