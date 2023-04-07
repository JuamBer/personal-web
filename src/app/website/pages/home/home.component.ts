import { AfterViewInit, Component, OnInit } from '@angular/core';
import { PositionState } from '@app/backoffice/tablas/positions/state/position.state';
import { SkillType } from '@app/backoffice/tablas/skill-types/models/skill-type.model';
import { skillTypeActions } from '@app/backoffice/tablas/skill-types/state/skill-type.actions';
import { skillTypeReducer } from '@app/backoffice/tablas/skill-types/state/skill-type.reducer';
import { SkillTypeState } from '@app/backoffice/tablas/skill-types/state/skill-type.state';
import { Skill } from '@app/backoffice/tablas/skills/models/skill.model';
import { skillActions } from '@app/backoffice/tablas/skills/state/skill.actions';
import { skillReducer } from '@app/backoffice/tablas/skills/state/skill.reducer';
import { SkillState } from '@app/backoffice/tablas/skills/state/skill.state';
import { publicLanguageReducer } from '@app/shared/state/languages/public-language.reducer';
import { PublicLanguageState } from '@app/shared/state/languages/public-language.state';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  skills$: Observable<Skill[]> = this.skillStore.select(skillReducer.getAll);
  loadingSkills$: Observable<boolean> = this.skillStore.select(
    skillReducer.getLoading,
  );
  skillTypes$: Observable<SkillType[]> = this.skillTypeStore.select(
    skillTypeReducer.getAll,
  );
  loadingSkillTypes$: Observable<boolean> = this.skillTypeStore.select(
    skillTypeReducer.getLoading,
  );
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
      name: 'Instagram',
      url: 'https://www.instagram.com/juamber/',
      icon: 'fa-brands fa-instagram',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/JuanSaezGarcia',
      icon: 'fa-brands fa-twitter',
    },
    {
      name: 'StackOverflow',
      url: 'https://stackoverflow.com/users/8794462/juamber?tab=profile',
      icon: 'fa-brands fa-stack-overflow',
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/channel/UCnwQce1OREgFG9Mve5oHlMg/playlists?view_as=subscriber',
      icon: 'fa-brands fa-youtube',
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
        this.skillTypeStore.dispatch(
          skillTypeActions.loadAll({ payload: null }),
        );
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
