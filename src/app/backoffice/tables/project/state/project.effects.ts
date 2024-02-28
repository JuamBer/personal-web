import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { CommonEffect } from 'src/app/shared/state/common/common.effects';
import { Project } from '../models/project.model';
import { ProjectService } from '../services/project.service';
import { projectActions } from './project.actions';

@Injectable()
export class ProjectEffect extends CommonEffect<Project> {
  constructor(protected override actions$: Actions, private projectSrv: ProjectService) {
    super(actions$, projectActions, projectSrv);
  }
}
