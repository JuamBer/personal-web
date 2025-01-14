import { AfterViewInit, ChangeDetectionStrategy, Component, DestroyRef, OnInit, inject } from '@angular/core';

import { animate, state, style, transition, trigger } from '@angular/animations';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { Meta, Title } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { filter, map, startWith } from 'rxjs/operators';
import { skillTypeActions } from 'src/app/backoffice/tables/skill-type/state/skill-type.actions';
import { skillTypeReducer } from 'src/app/backoffice/tables/skill-type/state/skill-type.reducer';
import { Page } from 'src/app/shared/models/page.model';
import { TranslationProvider } from 'src/app/shared/models/translation-provider.model';
import { ActionStatus, ActionType } from 'src/app/shared/state/common/common-state';
import { addActionId } from 'src/app/shared/state/common/common.actions';
import { publicLanguageReducer } from 'src/app/shared/state/languages/public-language.reducer';
import { SocialNetwork } from '../../components/social-networks/models/social-network.model';

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
export class HomeComponent extends TranslationProvider implements OnInit, AfterViewInit, Page {
  private store = inject(Store);
  private translateSrv = inject(TranslateService);
  private title = inject(Title);
  private meta = inject(Meta);
  private destroyRef = inject(DestroyRef);

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
    this.handleSEO();
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

  handleSEO() {
    this.translateSrv.onLangChange
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        map((event) => event.lang),
        startWith(this.translateSrv.currentLang),
      )
      .subscribe(() => {
        this.title.setTitle(this.translateSrv.instant('pages.home.title'));
        this.meta.updateTag({
          name: 'description',
          content: this.translateSrv.instant('pages.home.meta.description'),
        });
        this.meta.updateTag({
          name: 'keywords',
          content: this.translateSrv.instant('pages.home.meta.keywords'),
        });
        this.meta.updateTag({
          name: 'og:image',
          content: 'https://github.com/JuamBer/personal-web/blob/master/src/assets/images/meta-image.png',
        });
      });
  }

  get ActionStatus() {
    return ActionStatus;
  }
}
