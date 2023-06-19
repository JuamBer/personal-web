import { Component, OnInit, inject } from '@angular/core';
import { CertificateGroup } from '@app/backoffice/tablas/certificate-groups/models/certificate-group.model';
import { CertificateGroupActions } from '@app/backoffice/tablas/certificate-groups/state/certificate-group.actions';
import { CertificateGroupReducer } from '@app/backoffice/tablas/certificate-groups/state/certificate-group.reducer';
import { CertificateGroupState } from '@app/backoffice/tablas/certificate-groups/state/certificate-group.state';
import { CertificateType } from '@app/backoffice/tablas/certificate-types/models/certificate-type.model';
import { certificateTypeReducer } from '@app/backoffice/tablas/certificate-types/state/certificate-type.reducer';
import { CertificateTypeState } from '@app/backoffice/tablas/certificate-types/state/certificate-type.state';
import { Certificate } from '@app/backoffice/tablas/certificates/models/certificate.model';
import { certificateReducer } from '@app/backoffice/tablas/certificates/state/certificate.reducer';
import { CertificateState } from '@app/backoffice/tablas/certificates/state/certificate.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import Swiper, { A11y, Autoplay, Navigation, Pagination, Scrollbar, SwiperOptions } from 'swiper';

Swiper.use([Navigation, A11y, Pagination, Scrollbar, Autoplay]);

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss'],
})
export class CertificatesComponent implements OnInit {
  private certificateGroupActions = inject(CertificateGroupActions);
  private certificateGroupReducer = inject(CertificateGroupReducer);

  certificates$: Observable<Certificate[]> = this.certificateStore.select(certificateReducer.getAll);
  loadingCertificates$: Observable<boolean> = this.certificateStore.select(certificateReducer.getLoading);
  certificateTypes$: Observable<CertificateType[]> = this.certificateTypeStore.select(certificateTypeReducer.getAll);
  loadingCertificateTypes$: Observable<boolean> = this.certificateTypeStore.select(certificateTypeReducer.getLoading);

  certificateGroups$: Observable<CertificateGroup[]> = this.certificateGroupStore.select(
    this.certificateGroupReducer.getAll,
  );
  loadingCertificateGroups$: Observable<boolean> = this.certificateGroupStore.select(
    this.certificateGroupReducer.getLoading,
  );

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
    // scrollbar: {
    //   draggable: true,
    // },
  };

  constructor(
    private certificateStore: Store<CertificateState>,
    private certificateTypeStore: Store<CertificateTypeState>,
    private certificateGroupStore: Store<CertificateGroupState>,
  ) {}

  ngOnInit(): void {
    this.certificateGroups$.subscribe((certificateGroups) => {
      if (!certificateGroups.length) {
        this.certificateGroupStore.dispatch(this.certificateGroupActions.loadAll({ payload: null }));
      }
      certificateGroups.forEach((certificateGroup) => {
        this.tabIndexes.push({
          groupId: certificateGroup.id,
          value: 0,
        });
      });
    });
  }

  orderByDate(certificates: Certificate[]): Certificate[] {
    return [...certificates].sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
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
    console.log(swiper.slideNext);

    // this.tabIndexes = this.tabIndexes.for((tabIndex) => {
    //   if (tabIndex.groupId === certificateGroup.id) {
    //     return {
    //       ...tabIndex,
    //       value: tabIndex.value + 1,
    //     };
    //   } else {
    //     return tabIndex;
    //   }
    // });
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

  navigationNext(event: any) {
    console.log(event);
  }

  open(url: string) {
    window.open(url, '_blank');
  }
}
