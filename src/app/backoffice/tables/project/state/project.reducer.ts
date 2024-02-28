import { ReducerTypes } from '@ngrx/store';
import { Naming, NumberMode } from 'src/app/shared/state/common/common.names';
import { CommonReducer } from 'src/app/shared/state/common/common.reducer';
import { Project } from '../models/project.model';
import { projectActions } from './project.actions';
import { projectNames } from './project.names';
import { ProjectState } from './project.state';

const initialState = new ProjectState();
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const otherReducers: ReducerTypes<ProjectState, any>[] = [];

class ProjectReducer extends CommonReducer<Project, ProjectState> {
  private static instance: ProjectReducer;

  private constructor() {
    super(projectNames.name(Naming.KEBAB_CASE, NumberMode.PLURAL), projectActions, initialState, otherReducers);
  }

  public static getInstance(): ProjectReducer {
    if (!ProjectReducer.instance) {
      ProjectReducer.instance = new ProjectReducer();
    }
    return ProjectReducer.instance;
  }
}
export const projectReducer: ProjectReducer = ProjectReducer.getInstance();
