import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';

import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Language } from 'src/app/backoffice/tables/language/models/language.model';
import { SkillType } from 'src/app/backoffice/tables/skill-type/models/skill-type.model';
import { skillTypeActions } from 'src/app/backoffice/tables/skill-type/state/skill-type.actions';
import { skillTypeReducer } from 'src/app/backoffice/tables/skill-type/state/skill-type.reducer';
import { Skill } from 'src/app/backoffice/tables/skill/models/skill.model';
import { skillActions } from 'src/app/backoffice/tables/skill/state/skill.actions';
import { skillReducer } from 'src/app/backoffice/tables/skill/state/skill.reducer';
import { TranslationProvider } from 'src/app/shared/models/translation-provider.model';
import { publicLanguageReducer } from 'src/app/shared/state/languages/public-language.reducer';
import { SocialNetwork } from '../../components/social-networks/models/social-network.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent extends TranslationProvider implements OnInit, AfterViewInit {
  private store = inject(Store);
  private translateSrv = inject(TranslateService);

  language$: Observable<Language> = this.store.select(publicLanguageReducer.getOne);
  skills$: Observable<Skill[]> = this.store.select(skillReducer.getAll);
  loadingSkills$: Observable<boolean> = this.store.select(skillReducer.getLoading);
  skillTypes$: Observable<SkillType[]> = this.store.select(skillTypeReducer.getAll);
  loadingSkillTypes$: Observable<boolean> = this.store.select(skillTypeReducer.getLoading);

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
}
