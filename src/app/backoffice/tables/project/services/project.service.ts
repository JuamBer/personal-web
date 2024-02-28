import { Injectable } from '@angular/core';
import { supabaseClient } from 'src/app/shared/services/auth.service';
import { CommonService } from 'src/app/shared/services/common.service';
import { Naming, NumberMode } from 'src/app/shared/state/common/common.names';
import { Project } from '../models/project.model';
import { projectNames } from '../state/project.names';

@Injectable({
  providedIn: 'root',
})
export class ProjectService extends CommonService<Project> {
  constructor() {
    super(
      Project,
      supabaseClient,
      projectNames.name(Naming.SNAKE_CASE, NumberMode.PLURAL),
      '*, "company": "companies" ( * )',
      '*, "company": "companies" ( * )',
    );
  }
}
