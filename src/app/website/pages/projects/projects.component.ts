import { animate, state, style, transition, trigger } from '@angular/animations';
import {
  AfterViewChecked,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  QueryList,
  ViewChildren,
  inject,
} from '@angular/core';

import { toSignal } from '@angular/core/rxjs-interop';
import { Meta, Title } from '@angular/platform-browser';
import { faAppStore, faGithub, faGooglePlay, faMicrosoft } from '@fortawesome/free-brands-svg-icons';
import { faBriefcase, faGlobe, faRocket } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { Subject, takeUntil } from 'rxjs';
import { projectActions } from 'src/app/backoffice/tables/project/state/project.actions';
import { projectReducer } from 'src/app/backoffice/tables/project/state/project.reducer';
import { Page } from 'src/app/shared/models/page.model';
import { TranslationProvider } from 'src/app/shared/models/translation-provider.model';
import { ActionStatus } from 'src/app/shared/state/common/common-state';
import { addActionId } from 'src/app/shared/state/common/common.actions';
import { publicLanguageReducer } from 'src/app/shared/state/languages/public-language.reducer';
import { generateTechnologyShield } from 'src/app/shared/utils/shield.utils';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('projectEnterAnimation', [
      state('inViewport', style({ transform: 'scale(1)', opacity: 1 })),
      state('notInViewport', style({ transform: 'scale(0.5)', opacity: 0 })),
      transition('notInViewport => inViewport', animate('500ms ease-out')),
    ]),
  ],
})
export class ProjectsComponent extends TranslationProvider implements OnInit, OnDestroy, AfterViewChecked, Page {
  private store = inject(Store);
  private ref = inject(ChangeDetectorRef);
  private title = inject(Title);
  private meta = inject(Meta);
  private translateSrv = inject(TranslateService);

  destroy$ = new Subject<void>();

  projects$ = this.store.select(projectReducer.getAll);
  projects = toSignal(this.projects$, {
    initialValue: [],
  });

  language$ = this.store.select(publicLanguageReducer.getOne);
  language = toSignal(this.language$);

  @ViewChildren('project') projectElements!: QueryList<ElementRef>;
  projectElementStates = new Map<string, 'inViewport' | 'notInViewport'>();
  projectElementAnimationsDone: string[] = [];

  ngOnInit(): void {
    this.handleSEO();
    this.store.dispatch(
      projectActions.loadAll(
        addActionId({
          feedback: new Set([ActionStatus.ERROR]),
        }),
      ),
    );

    this.projects$.subscribe(() => {
      if (!this.projectElements) {
        return;
      }
      setTimeout(() => {
        this.ngAfterViewChecked();
      });
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  ngAfterViewChecked() {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      return;
    }

    this.projectElements.forEach((projectElement) => {
      if (this.projectElementAnimationsDone.includes(projectElement.nativeElement.id)) {
        return;
      }

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          const projectElementState = entry.isIntersecting ? 'inViewport' : 'notInViewport';
          this.projectElementStates.set(projectElement.nativeElement.id, projectElementState);
          if (projectElementState === 'inViewport') {
            this.projectElementAnimationsDone.push(projectElement.nativeElement.id);
            observer.disconnect();
            this.ref.detectChanges();
          }
        });
      });
      observer.observe(projectElement.nativeElement);
    });
  }

  handleSEO() {
    this.language$.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.title.setTitle(this.translateSrv.instant('pages.projects.title'));
      this.meta.updateTag({
        name: 'description',
        content: this.translateSrv.instant('pages.projects.meta.description'),
      });
      this.meta.updateTag({
        name: 'keywords',
        content: this.translateSrv.instant('pages.projects.meta.keywords'),
      });
      this.meta.updateTag({
        name: 'og:image',
        content: 'assets/images/meta-image.png',
      });
    });
  }

  getProjectEnterAnimationState(projectId: string | undefined): 'inViewport' | 'notInViewport' {
    if (!projectId) return 'notInViewport';
    return this.projectElementStates.get(projectId) || 'notInViewport';
  }

  get generateTechnologyShield() {
    return generateTechnologyShield;
  }
  get faBriefcase() {
    return faBriefcase;
  }
  get faRocket() {
    return faRocket;
  }
  get faGlobe() {
    return faGlobe;
  }
  get faMicrosoft() {
    return faMicrosoft;
  }
  get faGooglePlay() {
    return faGooglePlay;
  }
  get faAppStore() {
    return faAppStore;
  }
  get faGithub() {
    return faGithub;
  }
}
