import { animate, state, style, transition, trigger } from '@angular/animations';
import {
  AfterViewChecked,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  ElementRef,
  OnDestroy,
  OnInit,
  QueryList,
  ViewChildren,
  inject,
} from '@angular/core';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { Meta, Title } from '@angular/platform-browser';
import { faGithub, faGooglePlay, faMicrosoft } from '@fortawesome/free-brands-svg-icons';
import { faDownload, faGlobe, faLink } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Observable, filter, map, pairwise, startWith, zip } from 'rxjs';
import { CertificateGroup } from 'src/app/backoffice/tables/certificate-group/models/certificate-group.model';
import { certificateGroupActions } from 'src/app/backoffice/tables/certificate-group/state/certificate-group.actions';
import { certificateGroupReducer } from 'src/app/backoffice/tables/certificate-group/state/certificate-group.reducer';
import { Certificate } from 'src/app/backoffice/tables/certificate/models/certificate.model';
import { Page } from 'src/app/shared/models/page.model';
import { TranslationProvider } from 'src/app/shared/models/translation-provider.model';
import { ActionStatus, ActionType } from 'src/app/shared/state/common/common-state';
import { addActionId } from 'src/app/shared/state/common/common.actions';
import { publicLanguageReducer } from 'src/app/shared/state/languages/public-language.reducer';
import Swiper, { A11y, Autoplay, Navigation, Pagination, Scrollbar, SwiperOptions } from 'swiper';

Swiper.use([Navigation, A11y, Pagination, Scrollbar, Autoplay]);

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('certificateGroupEnterAnimation', [
      state('inViewport', style({ transform: 'scale(1)', opacity: 1 })),
      state('notInViewport', style({ transform: 'scale(0.5)', opacity: 0 })),
      transition('notInViewport => inViewport', animate('500ms ease-out')),
    ]),
  ],
})
export class CertificatesComponent extends TranslationProvider implements OnInit, AfterViewChecked, OnDestroy, Page {
  private store = inject(Store);
  private ref = inject(ChangeDetectorRef);
  private title = inject(Title);
  private meta = inject(Meta);
  private translateSrv = inject(TranslateService);
  private destroyRef = inject(DestroyRef);

  language$ = this.store.select(publicLanguageReducer.getOne);
  language = toSignal(this.language$);

  certificateGroups$ = this.store.select(certificateGroupReducer.getAll).pipe(
    // eslint-disable-next-line @ngrx/avoid-mapping-selectors
    map((certificateGroups) =>
      [...certificateGroups].sort((a, b) => (b?.certificates?.length || 0) - (a?.certificates?.length || 0)),
    ),
    map((certificateGroups) => {
      const uniqueCertificateGroups: CertificateGroup[] = [];
      certificateGroups.forEach((certificateGroup) => {
        if (!uniqueCertificateGroups.find((cg) => cg.id === certificateGroup.id)) {
          uniqueCertificateGroups.push(certificateGroup);
        }
      });
      return uniqueCertificateGroups;
    }),
  );
  certificateGroups = toSignal(this.certificateGroups$, {
    initialValue: [],
  });

  skillTypesActionStatus$: Observable<ActionStatus> = this.store.select(certificateGroupReducer.getAction).pipe(
    filter((action) => !!action && action.type === ActionType.LOAD_MANY),
    // eslint-disable-next-line @ngrx/avoid-mapping-selectors
    map((action) => (action ? action.status : ActionStatus.SUCCESS)),
  );
  skillTypesActionStatus = toSignal(this.skillTypesActionStatus$, {
    initialValue: ActionStatus.SUCCESS,
  });

  certificateGroupCount$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  tabIndexes: { groupId: string; value: number }[] = [];

  swiperConfig: SwiperOptions = {
    slidesPerView: 3,
    autoplay: {
      delay: 2500,
      disableOnInteraction: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1000: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },
    allowSlideNext: true,
    allowSlidePrev: true,
    spaceBetween: 25,
  };

  @ViewChildren('group') certificateElements!: QueryList<ElementRef>;
  certificateElementStates = new Map<string, 'inViewport' | 'notInViewport'>();
  certificateElementAnimationsDone: string[] = [];

  ngOnInit() {
    this.handleSEO();
    zip([this.certificateGroups$.pipe(startWith([]), pairwise()), this.certificateGroupCount$])
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(([[previousCertificateGroups, currentCertificateGroups], count]) => {
        if (
          currentCertificateGroups.length === 0 ||
          previousCertificateGroups.length < currentCertificateGroups.length
        ) {
          this.store.dispatch(
            certificateGroupActions.loadMore(
              addActionId({
                feedback: new Set([ActionStatus.ERROR]),
                payload: {
                  first: count,
                  rows: 1,
                },
              }),
            ),
          );
        }

        currentCertificateGroups.forEach((certificateGroup) => {
          if (!certificateGroup.id) return;

          this.tabIndexes.push({
            groupId: certificateGroup.id,
            value: 0,
          });
        });

        this.certificateGroupCount$.next(count + 1);
      });
  }

  ngAfterViewChecked() {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      return;
    }

    this.certificateElements.forEach((positionElement) => {
      if (this.certificateElementAnimationsDone.includes(positionElement.nativeElement.id)) {
        return;
      }

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          const positionsElementState = entry.isIntersecting ? 'inViewport' : 'notInViewport';
          this.certificateElementStates.set(positionElement.nativeElement.id, positionsElementState);
          if (positionsElementState === 'inViewport') {
            this.certificateElementAnimationsDone.push(positionElement.nativeElement.id);
            observer.disconnect();
            this.ref.detectChanges();
          }
        });
      });
      observer.observe(positionElement.nativeElement);
    });
  }

  ngOnDestroy() {
    this.store.dispatch(certificateGroupActions.unloadAll());
  }

  handleSEO() {
    this.translateSrv.onLangChange
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        map((event) => event.lang),
        startWith(this.translateSrv.currentLang),
      )
      .subscribe(() => {
        this.title.setTitle(this.translateSrv.instant('pages.certificates.title'));
        this.meta.updateTag({
          name: 'description',
          content: this.translateSrv.instant('pages.certificates.meta.description'),
        });
        this.meta.updateTag({
          name: 'keywords',
          content: this.translateSrv.instant('pages.certificates.meta.keywords'),
        });
        this.meta.updateTag({
          name: 'og:image',
          content: 'https://github.com/JuamBer/personal-web/blob/master/src/assets/images/meta-image.png?raw=true',
        });
      });
  }

  orderByDate(certificates: Certificate[]): Certificate[] {
    if (certificates) {
      return [...certificates].sort((a, b) => {
        return b.date.getTime() - a.date.getTime();
      });
    }
    return [];
  }

  getTabIndex(certificateGroup: CertificateGroup) {
    return this.tabIndexes.find((tabIndex) => tabIndex.groupId === certificateGroup.id);
  }

  getIndex(certificateGroup: CertificateGroup) {
    this.getTabIndex(certificateGroup)!.value;
  }

  slideNext(certificateGroup: CertificateGroup) {
    const swiper = document.getElementById('.swiper' + certificateGroup.id) as unknown as Swiper;
    swiper.slideNext();
  }

  slidePrev(certificateGroup: CertificateGroup) {
    this.tabIndexes = this.tabIndexes.map((tabIndex) => {
      if (tabIndex.groupId === certificateGroup.id) {
        return {
          ...tabIndex,
          value: tabIndex.value - 1,
        };
      } else {
        return tabIndex;
      }
    });
  }

  getCertificateGroupEnterAnimationState(certificateGroupId: string | undefined): 'inViewport' | 'notInViewport' {
    if (!certificateGroupId) return 'notInViewport';
    return this.certificateElementStates.get(certificateGroupId) || 'notInViewport';
  }

  get ActionStatus() {
    return ActionStatus;
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

  get faGithub() {
    return faGithub;
  }

  get faLink() {
    return faLink;
  }

  get faDownload() {
    return faDownload;
  }
}
