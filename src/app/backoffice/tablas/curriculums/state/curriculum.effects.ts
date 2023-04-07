import { Injectable } from '@angular/core';
import { CommonEffect } from '@app/shared/state/common/common.effects';
import { Actions } from '@ngrx/effects';
import { Curriculum } from '../models/curriculum.model';
import { CurriculumService } from '../services/curriculum.service';
import { curriculumActions } from './curriculum.actions';

@Injectable()
export class CurriculumEffect extends CommonEffect<Curriculum> {
  constructor(
    protected override actions$: Actions,
    private curriculumSrv: CurriculumService,
  ) {
    super(actions$, curriculumActions, curriculumSrv);
  }
}
