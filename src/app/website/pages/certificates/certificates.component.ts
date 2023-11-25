import { animate, state, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable, pairwise, startWith, take, zip } from 'rxjs';
import { CertificateGroup } from 'src/app/backoffice/tables/certificate-group/models/certificate-group.model';
import { certificateGroupActions } from 'src/app/backoffice/tables/certificate-group/state/certificate-group.actions';
import { certificateGroupReducer } from 'src/app/backoffice/tables/certificate-group/state/certificate-group.reducer';
import { CertificateType } from 'src/app/backoffice/tables/certificate-type/models/certificate-type.model';
import { certificateTypeReducer } from 'src/app/backoffice/tables/certificate-type/state/certificate-type.reducer';
import { Certificate } from 'src/app/backoffice/tables/certificate/models/certificate.model';
import { certificateReducer } from 'src/app/backoffice/tables/certificate/state/certificate.reducer';
import { Language } from 'src/app/backoffice/tables/language/models/language.model';
import { TranslationProvider } from 'src/app/shared/models/translation-provider.model';
import { publicLanguageReducer } from 'src/app/shared/state/languages/public-language.reducer';
import Swiper, { A11y, Autoplay, Navigation, Pagination, Scrollbar, SwiperOptions } from 'swiper';

Swiper.use([Navigation, A11y, Pagination, Scrollbar, Autoplay]);

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss'],
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
export class CertificatesComponent extends TranslationProvider implements OnInit {
  private store = inject(Store);

  language$: Observable<Language> = this.store.select(publicLanguageReducer.getOne);

  certificates$: Observable<Certificate[]> = this.store.select(certificateReducer.getAll);
  loadingCertificates$: Observable<boolean> = this.store.select(certificateReducer.getLoading);
  certificateTypes$: Observable<CertificateType[]> = this.store.select(certificateTypeReducer.getAll);
  loadingCertificateTypes$: Observable<boolean> = this.store.select(certificateTypeReducer.getLoading);

  certificateGroups$: Observable<CertificateGroup[]> = this.store.select(certificateGroupReducer.getAll);
  loadingMoreCertificateGroups$: Observable<boolean> = this.store.select(certificateGroupReducer.getLoading);
  loadingCertificateGroups$: Observable<boolean> = this.store.select(certificateGroupReducer.getLoading).pipe(take(2));
  certificateGroupCount$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  tabIndexes: { groupId: any; value: number }[] = [];

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

  ngOnInit(): void {
    zip([this.certificateGroups$.pipe(startWith([]), pairwise()), this.certificateGroupCount$]).subscribe(
      ([[previousCertificateGroups, currentCertificateGroups], count]) => {
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
          this.tabIndexes.push({
            groupId: certificateGroup.id,
            value: 0,
          });
        });

        this.certificateGroupCount$.next(count + 1);
      },
    );
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

  navigationNext(event: any) {}

  open(url: string) {
    window.open(url, '_blank');
  }
}
