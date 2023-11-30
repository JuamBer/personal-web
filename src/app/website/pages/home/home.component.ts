import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';

import { animate, state, style, transition, trigger } from '@angular/animations';
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { appRootTitle } from 'src/app/app.component';
import { Language } from 'src/app/backoffice/tables/language/models/language.model';
import { SkillType } from 'src/app/backoffice/tables/skill-type/models/skill-type.model';
import { skillTypeActions } from 'src/app/backoffice/tables/skill-type/state/skill-type.actions';
import { skillTypeReducer } from 'src/app/backoffice/tables/skill-type/state/skill-type.reducer';
import { Skill } from 'src/app/backoffice/tables/skill/models/skill.model';
import { skillActions } from 'src/app/backoffice/tables/skill/state/skill.actions';
import { skillReducer } from 'src/app/backoffice/tables/skill/state/skill.reducer';
import { TranslationProvider } from 'src/app/shared/models/translation-provider.model';
import { ActionStatus, ActionType } from 'src/app/shared/state/common/common-state';
import { publicLanguageReducer } from 'src/app/shared/state/languages/public-language.reducer';
import { SocialNetwork } from '../../components/social-networks/models/social-network.model';

export const homeTitleResolver: ResolveFn<string> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
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

  language$: Observable<Language> = this.store.select(publicLanguageReducer.getOne);
  skills$: Observable<Skill[]> = this.store.select(skillReducer.getAll);
  loadingSkills$: Observable<boolean> = this.store.select(skillReducer.getLoading);
  skillTypes$: Observable<SkillType[]> = this.store.select(skillTypeReducer.getAll);
  skillTypesActionStatus$: Observable<ActionStatus> = this.store.select(skillTypeReducer.getAction).pipe(
    filter((action) => !!action && action.type === ActionType.LOAD_MANY),
    map((action) => action.status),
  );
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

  ngAfterViewInit(): void {
    this.store
      .select(publicLanguageReducer.getOne)
      .pipe(filter((i) => !!i))
      .subscribe((language) => {
        this.translateSrv.use(language!.acronym);
      });
  }

  ngOnInit(): void {
    this.skills$.subscribe((skills) => {
      if (!skills.length) {
        this.store.dispatch(skillActions.loadAll({ payload: null }));
      }
    });

    this.skillTypes$.subscribe((skillTypes) => {
      if (!skillTypes.length) {
        this.store.dispatch(skillTypeActions.loadAll({ payload: null }));
      }
    });
  }

  getSkills(skillType: SkillType): Observable<Skill[]> {
    return this.skills$.pipe(
      map((skills) => {
        return skills
          .filter((skill) => skill.skillType.id === skillType.id)
          .sort((a, b) => b.percentage - a.percentage);
      }),
    );
  }

  get ActionStatus() {
    return ActionStatus;
  }
}
