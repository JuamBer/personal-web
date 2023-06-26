import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Company } from 'src/app/backoffice/tables/company/models/company.model';
import { Position } from 'src/app/backoffice/tables/position/models/position.model';
import { positionActions } from 'src/app/backoffice/tables/position/state/position.actions';
import { positionReducer } from 'src/app/backoffice/tables/position/state/position.reducer';
import { PositionState } from 'src/app/backoffice/tables/position/state/position.state';

export class PositionGroupedByCompany {
  company!: Company;
  positions!: Position[];
}
@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent implements OnInit {
  loadingPositions$: Observable<boolean> = this.positionStore.select(positionReducer.getLoading);
  positionsGrouped$: Observable<PositionGroupedByCompany[]> = this.positionStore.select(positionReducer.getAll).pipe(
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

  constructor(private positionStore: Store<PositionState>) {}

  ngOnInit(): void {
    this.positionsGrouped$.subscribe((positionsGrouped) => {
      if (!positionsGrouped.length) {
        this.positionStore.dispatch(positionActions.loadAll({ payload: null }));
      }
    });
  }
}
