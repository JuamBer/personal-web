import { AfterViewInit, Component, OnInit, inject } from '@angular/core';

import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Language } from 'src/app/backoffice/tables/language/models/language.model';
import { PositionState } from 'src/app/backoffice/tables/position/state/position.state';
import { SkillType } from 'src/app/backoffice/tables/skill-type/models/skill-type.model';
import { skillTypeActions } from 'src/app/backoffice/tables/skill-type/state/skill-type.actions';
import { skillTypeReducer } from 'src/app/backoffice/tables/skill-type/state/skill-type.reducer';
import { SkillTypeState } from 'src/app/backoffice/tables/skill-type/state/skill-type.state';
import { Skill } from 'src/app/backoffice/tables/skill/models/skill.model';
import { skillActions } from 'src/app/backoffice/tables/skill/state/skill.actions';
import { skillReducer } from 'src/app/backoffice/tables/skill/state/skill.reducer';
import { SkillState } from 'src/app/backoffice/tables/skill/state/skill.state';
import { publicLanguageReducer } from 'src/app/shared/state/languages/public-language.reducer';
import { PublicLanguageState } from 'src/app/shared/state/languages/public-language.state';
import { TranslationUtils } from 'src/app/shared/utils/translation.utils';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  private store = inject(Store);

  language$: Observable<Language> = this.store.select(publicLanguageReducer.getOne);

  skills$: Observable<Skill[]> = this.skillStore.select(skillReducer.getAll);
  loadingSkills$: Observable<boolean> = this.skillStore.select(skillReducer.getLoading);
  skillTypes$: Observable<SkillType[]> = this.skillTypeStore.select(skillTypeReducer.getAll);
  loadingSkillTypes$: Observable<boolean> = this.skillTypeStore.select(skillTypeReducer.getLoading);
  rrss: any[] = [
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

  constructor(
    private positionStore: Store<PositionState>,
    private skillStore: Store<SkillState>,
    private skillTypeStore: Store<SkillTypeState>,
    private publicLanguageStore: Store<PublicLanguageState>,
    private translateSrv: TranslateService,
  ) {}
  ngAfterViewInit(): void {
    this.publicLanguageStore
      .select(publicLanguageReducer.getOne)
      .pipe(filter((i) => !!i))
      .subscribe((language) => {
        this.translateSrv.use(language!.acronym);
      });
  }

  ngOnInit(): void {
    this.skills$.subscribe((skills) => {
      if (!skills.length) {
        this.skillStore.dispatch(skillActions.loadAll({ payload: null }));
      }
    });

    this.skillTypes$.subscribe((skillTypes) => {
      if (!skillTypes.length) {
        this.skillTypeStore.dispatch(skillTypeActions.loadAll({ payload: null }));
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
  get getTranslation() {
    return TranslationUtils.getTranslation;
  }
}
