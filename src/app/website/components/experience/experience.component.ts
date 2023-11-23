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
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { Company } from 'src/app/backoffice/tables/company/models/company.model';
import { Language } from 'src/app/backoffice/tables/language/models/language.model';
import { Position } from 'src/app/backoffice/tables/position/models/position.model';
import { positionActions } from 'src/app/backoffice/tables/position/state/position.actions';
import { positionReducer } from 'src/app/backoffice/tables/position/state/position.reducer';
import { publicLanguageReducer } from 'src/app/shared/state/languages/public-language.reducer';
import { TranslationUtils } from 'src/app/shared/utils/translation.utils';

export class PositionGroupedByCompany {
  company!: Company;
  positions!: Position[];
}
@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('positionEnterAnimation', [
      state('inViewport', style({ transform: 'translateX(0)' })),
      state('notInViewport', style({ transform: 'translateX(+20%)' })),
      transition('notInViewport <=> inViewport', animate('0.15s')),
    ]),
  ],
})
export class ExperienceComponent implements OnInit, AfterViewChecked, OnDestroy {
  private store = inject(Store);
  private ref = inject(ChangeDetectorRef);

  @ViewChildren('position') positionElements: QueryList<ElementRef>;
  positionElementStates = new Map<string, 'inViewport' | 'notInViewport'>();

  unsubscribe$: Subject<void> = new Subject();
  language$: Observable<Language> = this.store.select(publicLanguageReducer.getOne);
  loadingPositions$: Observable<boolean> = this.store.select(positionReducer.getLoading);
  positionsGrouped$: Observable<PositionGroupedByCompany[]> = this.store.select(positionReducer.getAll).pipe(
    map((positions) => positions.filter((position) => position.importance > 1)),
    map((positions) => {
      let positionsgroupedByCompany: PositionGroupedByCompany[] = [];
      let positionsSorted = [...positions].sort((a, b) => {
        return new Date(b.dateFrom).getTime() - new Date(a.dateFrom).getTime();
      });

      positionsSorted.forEach((position) => {
        const positionGrouped = positionsgroupedByCompany.find(
          (positionGrouped) => positionGrouped.company.id === position.company.id,
        );
        if (positionGrouped) {
          positionsgroupedByCompany = positionsgroupedByCompany.map((positionGrouped) => {
            if (positionGrouped.company.id === position.company.id) {
              return {
                ...positionGrouped,
                positions: [...positionGrouped.positions, position],
              };
            } else {
              return positionGrouped;
            }
          });
        } else {
          positionsgroupedByCompany.push({
            company: position.company,
            positions: [position],
          });
        }
      });
      return positionsgroupedByCompany;
    }),
  );

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  ngAfterViewChecked(): void {
    this.positionElements.forEach((positionElement) => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          const positionsElementState = entry.isIntersecting ? 'inViewport' : 'notInViewport';
          this.positionElementStates.set(positionElement.nativeElement.id, positionsElementState);
          if (positionsElementState === 'inViewport') {
            this.ref.detectChanges();
          }
        });
      });
      observer.observe(positionElement.nativeElement);
    });
  }

  ngOnInit(): void {
    this.positionsGrouped$.pipe(takeUntil(this.unsubscribe$)).subscribe((positionsGrouped) => {
      if (!positionsGrouped.length) {
        this.store.dispatch(positionActions.loadAll({ payload: null }));
      }
    });

    // this.loadingPositions$.pipe(takeUntil(this.unsubscribe$)).subscribe((loading) => {
    //   if (!loading && this.positionsElementState === 'inViewport') {
    //     this.positionsElementState = 'notInViewport';
    //     this.ref.detectChanges();

    //     setTimeout(() => {
    //       this.positionsElementState = 'inViewport';
    //       this.ref.detectChanges();
    //     });
    //   }
    // });
  }

  public getPositionEnterAnimationState(companyId: string): 'inViewport' | 'notInViewport' {
    return this.positionElementStates.get(companyId) || 'notInViewport';
  }

  get getTranslation() {
    return TranslationUtils.getTranslation;
  }
}
