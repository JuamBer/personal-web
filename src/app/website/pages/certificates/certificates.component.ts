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
import { ResolveFn } from '@angular/router';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Observable, Subject, filter, map, pairwise, startWith, takeUntil, zip } from 'rxjs';
import { appRootTitle } from 'src/app/app.component';
import { CertificateGroup } from 'src/app/backoffice/tables/certificate-group/models/certificate-group.model';
import { certificateGroupActions } from 'src/app/backoffice/tables/certificate-group/state/certificate-group.actions';
import { certificateGroupReducer } from 'src/app/backoffice/tables/certificate-group/state/certificate-group.reducer';
import { Certificate } from 'src/app/backoffice/tables/certificate/models/certificate.model';
import { Language } from 'src/app/backoffice/tables/language/models/language.model';
import { TranslationProvider } from 'src/app/shared/models/translation-provider.model';
import { ActionStatus, ActionType } from 'src/app/shared/state/common/common-state';
import { publicLanguageReducer } from 'src/app/shared/state/languages/public-language.reducer';
import Swiper, { A11y, Autoplay, Navigation, Pagination, Scrollbar, SwiperOptions } from 'swiper';

Swiper.use([Navigation, A11y, Pagination, Scrollbar, Autoplay]);

export const certificatesTitleResolver: ResolveFn<string> = () => {
  const translateSrv = inject(TranslateService);
  return translateSrv.get('pages.certificates.title').pipe(map((title) => `${appRootTitle} | ${title}`));
};

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
export class CertificatesComponent extends TranslationProvider implements OnInit, AfterViewChecked, OnDestroy {
  private store = inject(Store);
  private ref = inject(ChangeDetectorRef);

  unsubscribe$ = new Subject<void>();
  language$: Observable<Language | undefined> = this.store.select(publicLanguageReducer.getOne);

  certificateGroups$: Observable<CertificateGroup[]> = this.store.select(certificateGroupReducer.getAll);
  skillTypesActionStatus$: Observable<ActionStatus> = this.store.select(certificateGroupReducer.getAction).pipe(
    filter((action) => !!action && action.type === ActionType.LOAD_MANY),
    map((action) => (action ? action.status : ActionStatus.SUCCESS)),
  );
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

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
    this.store.dispatch(certificateGroupActions.unloadAll());
  }

  ngOnInit(): void {
    zip([this.certificateGroups$.pipe(startWith([]), pairwise()), this.certificateGroupCount$])
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(([[previousCertificateGroups, currentCertificateGroups], count]) => {
        if (
          currentCertificateGroups.length === 0 ||
          previousCertificateGroups.length < currentCertificateGroups.length
        ) {
          this.store.dispatch(
            certificateGroupActions.loadMore({
              payload: {
                first: count,
                rows: 1,
              },
            }),
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

  ngAfterViewChecked(): void {
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

  orderByDate(certificates: Certificate[]): Certificate[] {
    if (certificates) {
      return [...certificates].sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
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

  open(url: string) {
    window.open(url, '_blank');
  }

  getCertificateGroupEnterAnimationState(certificateGroupId: string | undefined): 'inViewport' | 'notInViewport' {
    if (!certificateGroupId) return 'notInViewport';
    return this.certificateElementStates.get(certificateGroupId) || 'notInViewport';
  }

  get ActionStatus() {
    return ActionStatus;
  }
}
