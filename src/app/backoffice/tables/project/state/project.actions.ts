import { CommonAction } from 'src/app/shared/state/common/common.actions';
import { Naming, NumberMode } from 'src/app/shared/state/common/common.names';
import { Project } from '../models/project.model';
import { projectNames } from './project.names';

export class ProjectActions extends CommonAction<Project> {
  private static instance: ProjectActions;

  private constructor() {
    super(projectNames.name(Naming.KEBAB_CASE, NumberMode.PLURAL));
  }

  public static getInstance(): ProjectActions {
    if (!ProjectActions.instance) {
      ProjectActions.instance = new ProjectActions();
    }
    return ProjectActions.instance;
  }
}
export const projectActions: ProjectActions = ProjectActions.getInstance();
